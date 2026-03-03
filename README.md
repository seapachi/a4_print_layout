# Warm Sand PoC README

## 1. 概要
`index.html` は、A4 8分割固定で画像からPDFを生成する最小PoCです。

- サーバーレス（ローカル処理のみ）
- JPEG / PNG 複数選択
- A4 (210x297mm) / 8分割 (2x4)
- PDF生成後に「共有する」または「保存する」

## 2. ファイル
- `index.html`: PoC本体
- `validation-checklist.md`: 実機検証チェックシート

## 3. 実行方法
1. `index.html` をブラウザで開く
2. 画像を複数選択する（JPEG / PNG）
3. `PDFを生成` を押す
4. 完了後に `共有する` または `保存する` を使用

## 4. 実装上の契約（PoC）
- `loadSelectedImages(files): Promise<ImageAsset[]>`
- `computeSlotsA4_8(marginMm, gapMm): SlotRectMm[]`
- `buildPdfA4(images, slots): Promise<Blob>`
- `shareOrDownload(blob, filename): Promise<"shared"|"download">`

## 5. Theme仕様
- `ThemeKey = "warm" | "mineral" | "editorial"`
- `PRIMARY_THEME = "warm"`
- PoCは `warm` 固定運用

## 6. 既知の制約
- 1/2/4/6分割切替は未対応（8分割固定）
- 大量の高解像度画像ではブラウザメモリ制約に到達する可能性あり
- 共有APIは端末/ブラウザで挙動差あり（未対応時は保存導線へフォールバック）

## 7. 次フェーズへの引き継ぎ
- React化時はPoC関数契約をそのまま移植する
- 1/2/4/6分割は `computeSlots` の一般化で追加可能
- 実機検証結果は `validation-checklist.md` と `RDD.md` に追記する

