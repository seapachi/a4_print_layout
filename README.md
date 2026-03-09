# A4 Print Layout PoC README

## 1. 概要
`index.html` は、端末内画像をA4レイアウトPDFへ変換する単体HTML PoCです。

- サーバーレス（ローカル処理のみ）
- JPEG / PNG 複数選択
- A4 1 / 2 / 4 / 6 / 8 分割
- `contain` / `cover` 配置モード
- PDF生成後に「共有する」または「保存する」

## 2. ファイル構成
- `index.html`: PoC本体（Hansi UI + 4画面フロー、内部レイアウト面のみ表示）
- `EXPLANATION.md`: 開発者向け仕様メモ
- `PLAN.md`: タスク進捗と実行ログ
- `validation-checklist.md`: 実機検証チェックシート
- `reference/RDD.md`: 要件定義書
- `reference/ooui.md`: OOUI設計ガイド
- `reference/mock/`: 画面モック

## 3. 実行方法
1. ローカルサーバーを起動（例: `python3 -m http.server 8000`）
2. `http://127.0.0.1:8000/index.html` を開く
3. Screen Aで画像を選択
4. Screen Bで分割レイアウトと配置モードを選択
5. Screen Cでプレビュー後に `PDFを生成`
6. Screen Dで `共有する` または `保存する`

## 4. 実装上の契約（PoC）
- `loadSelectedImages(files): Promise<ImageAsset[]>`
- `computeSlots(layoutKey, marginMm, gapMm): SlotRectMm[]`
- `buildPdfA4(images, slots, fitMode): Promise<Blob>`
- `shareOrDownload(blob, filename): Promise<"shared"|"download">`

## 5. UI仕様
- テーマ: Hansi固定
- 構成: 1カラム（内部レイアウト面を中央カード表示）
- 非表示化: スマホ外枠・上部ABCDタブ・端末ステータスバー
- 右パネル: なし
- ログ表示: 画面下部の折りたたみ (`logBox`)

## 6. 既知の制約
- 低解像度判定はUI警告の詳細表示を簡略化している
- 大量の高解像度画像ではブラウザメモリ制約に到達する可能性あり
- 共有APIは端末/ブラウザで挙動差あり（未対応時は保存導線へフォールバック）

## 7. 次フェーズ候補
- 低解像度判定ロジックの導入と警告UI強化
- 画像並び替えUI
- 余白/ギャップのユーザー設定
- React化時のモジュール分割
