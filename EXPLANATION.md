# EXPLANATION.md

## 概要
このプロジェクトは、端末内画像を A4 印刷用 PDF へ配置して出力する PoC です。
実装本体は `index.html` 単体で動作し、現在は Hansi デザインの 4 画面フローを採用しています。
この文書は開発者向けの仕様メモとして、実装内容、設計意図、運用上の前提を整理します。

## 文書の役割分担
- `README.md`: プロジェクトの入口資料。概要、起動方法、文書導線、共通前提のみを載せます。
- `USER_GUIDE.md`: iPhone 利用者向けの操作ガイド。実際の使い方と注意点を平易な言葉でまとめます。
- `EXPLANATION.md`: 開発者向け仕様メモ。設計意図、実装範囲、既知の制約、運用方針をまとめます。
- `reference/RDD.md`: 要件定義の正本です。要求レベルの変更はここを起点に管理します。
- `PLAN.md`: タスク進捗と作業ログです。

## README から詳細を外した理由
- README は最初に読む文書なので、入口情報だけに絞った方が更新漏れを減らせます。
- 関数契約や画面詳細を README に残すと、利用者向けの説明と開発者向けの説明が混ざります。
- 詳細仕様は `EXPLANATION.md` に寄せた方が、実装変更時の追従先が明確になります。

## `USER_GUIDE.md` を分離した理由
- 利用者は操作手順と注意点を短時間で知りたい一方、開発者は設計理由や制約を知りたいです。
- 同じ文書に両方を書くと、利用者には長く、開発者には浅い文書になります。
- 操作手順を `USER_GUIDE.md` に分けることで、README を入口、EXPLANATION を開発メモとして維持しやすくします。

## 現在の実装範囲
- 画像選択: JPEG / PNG 複数選択
- 分割レイアウト: `1 / 2 / 4 / 6 / 8`
- 配置モード: `contain`（全体表示） / `cover`（トリミング）
- `Screen A`: 選択画像の全件サムネイル表示
- `Screen B`: 2列のコンパクトな分割レイアウト候補と配置モード選択
- `Screen C`: A4 比率に寄せた実画像プレビューとページ送り
- `Screen D`: 生成結果表示、PDF確認、共有、保存
- PDF生成: `pdf-lib` を利用
- 出力: Web Share API または Blob URL による保存
- UI構成: 1カラム、下部固定 CTA、折りたたみログ

## 画面構成
- `Screen A`: 画像選択、サムネイル、警告表示
- `Screen B`: レイアウト選択、配置モード選択
- `Screen C`: プレビュー、ページ送り、PDF生成
- `Screen D`: ファイル情報、PDF確認、共有、保存、リセット
- 画面遷移: `data-go` による次へ / 戻る
- 進行表示: 上部ステップドット

## 主要仕様
- 用紙サイズ: A4 `210 x 297 mm`
- 余白: `5 mm`
- ギャップ: `2 mm`
- レイアウト定義:
  - `1`: `1 x 1`
  - `2`: `1 x 2`
  - `4`: `2 x 2`
  - `6`: `2 x 3`
  - `8`: `2 x 4`

## 実装ポイント
### 1) 分割ロジック
`computeSlots(layoutKey, marginMm, gapMm)` で、選択された分割定義からスロットを計算します。

### 2) 配置モード
`buildPdfA4(images, slots, fitMode)` で PDF を構築します。
- `contain`: 画像全体を見せる
- `cover`: 枠を埋めるように描画する

`cover` のクリップ演算が使えない環境では、安全側として `contain` 相当に寄せます。

### 3) プレビューとページ計算
- 1ページあたりのスロット数をレイアウトから動的に計算します。
- `Screen C` は DOM ベースのプレビューで、`object-fit` により `contain / cover` の見た目を合わせています。
- 表示ラベルは利用者向けに `全体表示` / `トリミング` としています。

### 4) `Screen A` の全件サムネイル
- 選択した全画像を表示します。
- `ImageAsset.previewUrl` を使い、再選択やリスタート時に `URL.revokeObjectURL` で解放します。
- 未選択時は空状態メッセージを表示します。

### 5) `Screen B` の圧縮レイアウト
- 分割候補は `2列 x 複数行` のコンパクトカードです。
- 1画面でレイアウト候補、配置モード、CTA を見渡しやすくしています。
- ボタン高さは他画面と共通です。

### 6) `Screen D` の PDF確認
- 埋め込み viewer は使わず、ブラウザ標準 PDF ビューアへ遷移させます。
- iPhone Safari 系では `iframe + blob URL` の PDF 表示が不安定だったためです。
- アプリ内で無理に抱えず、表示の信頼性を優先しています。

### 7) 下部固定 CTA
- 各画面は `.sc-body` と `.sc-cta` に分離しています。
- 本文だけをスクロールさせ、主要操作ボタンの位置を固定しています。
- `env(safe-area-inset-bottom)` を使い、iPhone のホームインジケータ干渉を避けています。

### 8) モバイル高さ調整
- `100dvh` を基準にし、iOS Safari のアドレスバー伸縮に引きずられにくい構成にしています。
- モバイル時の `app-surface` 高さを調整し、CTA が画面下へ食い込みにくいようにしています。

## JPEG縦横比崩れ対策
iPhone 写真の EXIF Orientation 差異に対して、次を継続実装しています。
1. JPEG は Canvas 経由で正規化
2. EXIF Orientation（1-8）を解釈して回転・反転を適用
3. `createImageBitmap(..., { imageOrientation: "none" })` を優先
4. PDF 描画時は埋め込み後の寸法を基準にスケール計算

## 開発環境差を埋める運用
このリポジトリでは、`Codex cloud`、`Windows + Windsurf + remote Ubuntu`、`Ubuntu + VS Code 拡張` の 3 環境差を、Ubuntu 側で実行する共通コマンドに寄せて吸収します。

### 共通前提
- 実行コマンドは Ubuntu 互換で統一します。
- パスは repo 相対または Ubuntu 絶対パスで扱います。
- Windows パス記法は文書の正本に出しません。
- GUI があるかどうかに関係なく、まず CLI で疎通確認します。

### 共通セットアップ
```bash
python3 -m http.server 8000 --bind 127.0.0.1
curl -I http://127.0.0.1:8000/index.html
npx playwright install chromium
```

### Playwright 運用メモ
- `package.json` には `@playwright/test` が入っていますが、Chromium 実体は環境ごとに未導入のことがあります。
- 初回セットアップ、またはブラウザキャッシュ消失後は `npx playwright install chromium` を先に実行します。
- スクリーンショットや可視確認は GUI 依存になり得るため、先に `curl -I` や構文確認などの CLI 検証を通します。
- スクリーンショット手順を書く場合も、共通手順と環境依存メモを分けます。

### 環境別の扱い
- `Codex cloud`: ローカル GUI 前提ではないため、CLI 検証を優先します。
- `Windows + Windsurf + remote Ubuntu`: コマンドは Windows ホストではなく remote Ubuntu 側で実行します。
- `Ubuntu + VS Code 拡張`: 基準環境として扱い、共通コマンドをそのまま実行します。

## 補足
- `reference/mock/*` は比較用モックです。
- `reference/mock/index_frontend_desight.html` は `frontend-design` スキルを使った比較用 MOC です。
- 実機確認やスクリーンショット取得の運用は `AGENTS.md` のプレビュー確認ルールに従います。
