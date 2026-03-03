# EXPLANATION.md

## 概要
このプロジェクトは、端末内画像をA4印刷用PDFへ配置して出力するPoCです。
現時点では `index.html` 単体で動作します（サーバーレス構成）。

## 現在の実装範囲
- 画像選択: JPEG / PNG 複数選択
- レイアウト: A4縦・8分割固定（2x4）
- PDF生成: `pdf-lib` を利用
- 出力: 共有（Web Share API）または保存（Blob URL）
- UI: Warm Sandトーン

## 主要仕様
- 用紙サイズ: A4 `210 x 297 mm`
- 余白: `5 mm`
- ギャップ: `2 mm`
- 画像配置: `contain`（縦横比維持）
- 画像超過: 次ページへ自動割当

## 最近の修正（重要）
### JPEGの縦横比崩れ対策
iPhone写真の一部JPEGにEXIF Orientation（例: `6`）が含まれており、
PDF埋め込み時に見た目の縦横比が崩れる問題がありました。

対応内容:
1. JPEGは常にCanvas経由で正規化し、EXIF情報を除去
2. 正規化時にEXIF Orientation（1-8）を解釈し、回転・反転を適用
3. `createImageBitmap(..., { imageOrientation: "none" })` を優先して生データ基準で補正
4. PDF描画時は `embedded.width / embedded.height` を基準にスケール計算

これにより、`IMG_5504.JPG` / `IMG_5508.JPG` のような Orientation=6 のJPEGでも、横方向への引き延ばしを回避する実装にしています。

## 補足
- `reference/poc/` はテスト結果格納用として `.gitignore` 済み
- 実機検証手順は `validation-checklist.md` を参照


