# A4 Print Layout Beta

`index.html` は、端末内の画像を A4 印刷向け PDF に並べて出力する単体 HTML のベータ版です。
画像選択、レイアウト指定、プレビュー、PDF生成までをブラウザ内で完結させます。
この README は入口資料として、概要、読み分け、共通の開発前提だけをまとめます。

## 概要
- ローカル処理のみで画像を PDF 化
- JPEG / PNG の複数選択に対応
- A4 の `1 / 2 / 4 / 6 / 8` 分割に対応
- `contain` / `cover` の配置モードを選択可能
- 生成後は共有または保存へ進める

## 現在の位置づけ
- このリポジトリは、初期検証段階を終えた継続改善中のベータ版として扱います。
- 改善候補や保留中の案は `PLAN.md` で管理します。
- 確定要件の正本は `reference/RDD.md`、実装意図や運用メモは `EXPLANATION.md` に置きます。

## バージョン管理
- バージョン番号の正本は `package.json` の `version` です。
- 採番形式は `MAJOR.MINOR.PATCH-beta.N` を使います。
- 機能追加や挙動改善を含む更新は `MINOR` を上げ、同一機能群の調整は `beta.N` を増やします。
- 緊急の小修正だけを単独で出す場合のみ `PATCH` を上げます。

## はじめに読む文書
- 利用者向けの使い方: `USER_GUIDE.md`
- 開発者向けの仕様メモ: `EXPLANATION.md`
- 要件の正本: `reference/RDD.md`
- 作業進捗と実行ログ: `PLAN.md`
- AI 作業ルール: `AGENTS.md`

## ドキュメント構成
| 文書 | 役割 |
|---|---|
| `README.md` | プロジェクトの入口資料 |
| `USER_GUIDE.md` | iPhone利用者向けの操作ガイド |
| `EXPLANATION.md` | 開発者向け仕様メモと設計意図 |
| `reference/RDD.md` | 要件定義の正本 |
| `PLAN.md` | タスク進捗と実行ログ |
| `AGENTS.md` | AI 作業ルール |

## 最短起動手順
1. 共通セットアップを実行する  
   `npm run setup`
2. リポジトリのルートでローカルサーバーを起動する  
   `npm run serve`
3. 疎通確認を行う  
   `curl -I http://127.0.0.1:8000/index.html`
4. 必要なら自動テストを実行する  
   `npm test`
5. ブラウザで `http://127.0.0.1:8000/index.html` を開く

## 開発環境の共通前提
- 開発コマンドは Ubuntu 基準で統一します。
- `Node >= 18`、`python3`、`npx` が利用できる前提です。
- 依存再現は `package-lock.json` を正本とし、日常のセットアップは `npm ci` を内包した `npm run setup` でそろえます。
- Playwright ブラウザは `PLAYWRIGHT_BROWSERS_PATH=0` によりプロジェクト内へ配置し、環境差を減らします。
- パス表記は Linux 形式を使い、Windows 固有パスは文書の正本に載せません。

## 開発用の基本コマンド
```bash
npm run setup
npm run serve
curl -I http://127.0.0.1:8000/index.html
npm test
```

## 環境差が出やすいポイント
| 環境 | 共通方針 |
|---|---|
| `Codex cloud` | ワークスペースが使い捨てなら `npm run setup` を毎回実行する。まず CLI で疎通確認とセットアップを行う |
| `Windows + Windsurf + remote Ubuntu` | コマンドは Windows 側ではなく WSL / remote Ubuntu 側で実行する |
| `Ubuntu + VS Code 拡張` | 基準環境として扱い、README のコマンドをそのまま使う |

## 補足セットアップメモ
- `npm run setup` は `npm ci` と `PLAYWRIGHT_BROWSERS_PATH=0 npx playwright install chromium` をまとめて実行します。
- 依存定義を変更するときだけ `npm install` を使い、通常の再現や初期化には使いません。
- `PLAYWRIGHT_BROWSERS_PATH=0` により、Playwright の Chromium はホーム配下 `~/.cache/ms-playwright` ではなくプロジェクト内へ寄ります。

## 既知の制約
- 大量の高解像度画像では、ブラウザのメモリ制約に到達することがあります。
- 共有機能はブラウザや端末の対応状況により使えない場合があります。
- PDF の確認はブラウザ標準ビューアへ委ねるため、表示体験はブラウザ依存です。
