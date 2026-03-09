# PLAN.md

## タスク管理

| ID | タスク | 対象ファイル | 状態 | 備考 |
|---|---|---|---|---|
| T-001 | Warm Sand PoCを単体HTMLで実装 | `index.html` | 完了 | A4 8分割・PDF生成・共有/保存 |
| T-002 | RDDへPoC検証セクションを追記 | `reference/RDD.md` | 完了 | 14.12 追加済み |
| T-003 | `reference/poc` をgitignore対象に追加 | `.gitignore` | 完了 | テスト結果の追跡除外 |
| T-004 | JPEG EXIF由来の縦横比崩れ修正 | `index.html` | 完了 | 5504/5508対策（初回） |
| T-005 | AGENTSルール準拠の文書整備 | `EXPLANATION.md`, `PLAN.md` | 完了 | 本更新 |
| T-006 | iPhone実機検証の記録反映 | `validation-checklist.md`, `reference/RDD.md` | 完了 | 完了扱い（ユーザー指示） |
| T-007 | AGENTSプレビュー確認ルール実施 | `index.html` | 完了 | `curl -I`でHTTP 200確認、スクリーンショット取得済み |
| T-008 | JPEG縦横比崩れ（5504/5508）再修正 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | JPEG常時正規化 + EXIF 1-8補正 |
| T-009 | Apple HIG反映スキル作成 | `~/.codex/skills/apple-hig-ui-reflector/*`, `PLAN.md` | 完了 | HIG参照ガイド + `quick_validate.py` 通過 |
| T-010 | OOUI設計ガイド文書の作成 | `reference/ooui.md`, `PLAN.md` | 完了 | OOUI適用の基礎整理 |
| T-011 | ローカルPlaywright環境の整合性修復 | `package.json`, `package-lock.json`, `PLAN.md` | 完了 | 依存正規化 + Chromium起動確認 |
| T-012 | Apple HIGスキルを本文取得前提で再構築 | `~/.codex/skills/apple-hig-ui-reflector/*`, `PLAN.md` | 完了 | Playwright本文抽出 + 参照再作成 + 検証通過 |
| T-013 | リポジトリ構成の整理（配置と除外設定の見直し） | `.gitignore`, `README.md`, `PLAN.md`, `reference/preview/*` | 完了 | preview画像を `reference/preview/` へ移動、重複1件削除、ignore整理を実施 |
| T-014 | HIG/OOUI準拠MOCの再設計実装 | `AGENTS.md`, `PLAN.md`, `reference/mock/index_hig_ooui.html`, `EXPLANATION.md` | 完了 | iOS調単一テーマ + OOUIオブジェクト中心UI |
| T-015 | Hansi本実装 + 1/2/4/6/8分割 + cover対応 | `index.html`, `EXPLANATION.md`, `README.md`, `PLAN.md` | 完了 | 右パネル廃止・1カラム化・ログ折りたたみ・分割/fit連動 |

## 状態定義
- 未着手
- 進行中
- 完了
- 保留

## 実行ログ
- プレビュー疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.1 200 OK`
- スクリーンショット: `reference/preview/preview-20260304-012749.png`
- スクリーンショット整理: `preview-20260304-011605.png` は同一内容のため削除
- スキル検証: `python3 ~/.codex/skills/.system/skill-creator/scripts/quick_validate.py ~/.codex/skills/apple-hig-ui-reflector` -> `Skill is valid!`
- Playwright導入: `npm i -D @playwright/test` / `npx playwright install chromium`
- Playwright疎通確認: `node -e "const { chromium } = require('playwright'); ..."` -> `Example Domain`
- HIG本文抽出（単体）: `node ~/.codex/skills/apple-hig-ui-reflector/scripts/hig_scrape.js --url .../layout --out /tmp/hig-layout-live.json`
- HIG本文抽出（カタログ）: `node ~/.codex/skills/apple-hig-ui-reflector/scripts/hig_scrape.js --catalog --out-dir ~/.codex/skills/apple-hig-ui-reflector/references/generated`
- HIG/OOUI MOC疎通確認: `curl -I http://127.0.0.1:8000/index.html` / `curl -I http://127.0.0.1:8000/reference/mock/index_hig_ooui.html` -> `HTTP/1.0 200 OK`
- HIG/OOUI MOCスクリーンショット: `preview-hig-ooui-20260309-233027.png`（Playwrightでタブ操作後に撮影）
- HIG/OOUI MOCモバイル確認: `preview-hig-ooui-mobile-20260309-233123.png`（390x844でレイアウト崩れなし）
- Hansi実装疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- Hansi実装スクリーンショット: `preview-hansi-desktop-20260310-002631.png`（B設定タブへ遷移後に撮影）
- Hansi実装モバイル確認: `preview-hansi-mobile-20260310-002631.png`（390x844, 6分割選択状態で撮影）
- Hansi実装スモークテスト: Playwrightで `2分割 + cover + 3画像` を投入し、`2ページ` 生成とScreen D表示を確認（`smoke: ok`）
