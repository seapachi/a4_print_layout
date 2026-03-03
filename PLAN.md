# PLAN.md

## タスク管理

| ID | タスク | 対象ファイル | 状態 | 備考 |
|---|---|---|---|---|
| T-001 | Warm Sand PoCを単体HTMLで実装 | `index.html` | 完了 | A4 8分割・PDF生成・共有/保存 |
| T-002 | RDDへPoC検証セクションを追記 | `reference/RDD.md` | 完了 | 14.12 追加済み |
| T-003 | `reference/poc` をgitignore対象に追加 | `.gitignore` | 完了 | テスト結果の追跡除外 |
| T-004 | JPEG EXIF由来の縦横比崩れ修正 | `index.html` | 完了 | 5504/5508対策 |
| T-005 | AGENTSルール準拠の文書整備 | `EXPLANATION.md`, `PLAN.md` | 完了 | 本更新 |
| T-006 | iPhone実機検証の記録反映 | `validation-checklist.md`, `reference/RDD.md` | 未着手 | 実測値反映待ち |
| T-007 | AGENTSプレビュー確認ルール実施 | `index.html` | 完了 | `curl -I`でHTTP 200確認、スクリーンショット取得済み |

## 状態定義
- 未着手
- 進行中
- 完了
- 保留

## 実行ログ
- プレビュー疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.1 200 OK`
- スクリーンショット: `preview-20260304-011605.png`
