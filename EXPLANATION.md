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
1. JPEGのEXIF Orientationを検出
2. Orientationが `1` 以外の場合、Canvas経由で正規化JPEGを再生成
3. PDF描画時は `embedded.width / embedded.height` を基準にスケール計算

これにより、`IMG_5504.JPG` / `IMG_5508.JPG` の崩れ再現ケースを回避可能な実装にしています。

## 補足
- `reference/poc/` はテスト結果格納用として `.gitignore` 済み
- 実機検証手順は `validation-checklist.md` を参照
