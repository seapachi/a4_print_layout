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
| T-016 | スマホ内部レイアウトのみ反映（外枠/上部タブ/ステータスバー削除） | `index.html`, `EXPLANATION.md`, `README.md`, `PLAN.md` | 完了 | 内部レイアウトカード化・遷移は次へ/戻る維持 |
| T-017 | Screen D戻る導線追加 + レイアウト設定ミニ図の縦長化 | `index.html`, `EXPLANATION.md`, `README.md`, `PLAN.md` | 完了 | D画面戻る導線を追加、B画面のミニ図を縦長化 |
| T-018 | PCワイド時のヘッダー左ズレ修正（420px中央揃え） | `index.html`, `EXPLANATION.md`, `README.md`, `PLAN.md` | 完了 | ヘッダー幅を `app-surface` と一致させ中央配置 |
| T-019 | 既存preview画像の `reference/preview/` への移動 | `reference/preview/*`, `PLAN.md` | 完了 | ルート直下 `preview-*.png` を集約管理 |
| T-020 | 戻る導線の下部統一（B/C/D） | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | B/C/Dの上部戻るを撤去し下部CTAへ統一 |
| T-021 | Screen Aの選択画像プレビュー全件表示 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | 6件固定表示を廃止し全件サムネイルへ変更 |
| T-022 | Screen CのA4レイアウト実画像プレビュー化 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | スロット内テキストを実画像表示へ置換 |
| T-023 | PDF生成後のScreen D埋め込み表示 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | viewer埋め込み + フォールバック導線 |
| T-024 | Screen B/C/Dの表示領域とCTA重なり解消 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | 絶対配置CTAを通常フロー化して重なりを防止 |

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
- HIG/OOUI MOCスクリーンショット: `reference/preview/preview-hig-ooui-20260309-233027.png`（Playwrightでタブ操作後に撮影）
- HIG/OOUI MOCモバイル確認: `reference/preview/preview-hig-ooui-mobile-20260309-233123.png`（390x844でレイアウト崩れなし）
- Hansi実装疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- Hansi実装スクリーンショット: `reference/preview/preview-hansi-desktop-20260310-002631.png`（B設定タブへ遷移後に撮影）
- Hansi実装モバイル確認: `reference/preview/preview-hansi-mobile-20260310-002631.png`（390x844, 6分割選択状態で撮影）
- Hansi実装スモークテスト: Playwrightで `2分割 + cover + 3画像` を投入し、`2ページ` 生成とScreen D表示を確認（`smoke: ok`）
- 内部レイアウト疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- 内部レイアウトスクリーンショット: `reference/preview/preview-inner-layout-desktop-20260310-004604.png`（Screen B表示で撮影）
- 内部レイアウトモバイル確認: `reference/preview/preview-inner-layout-mobile-20260310-004604.png`（390x844, 6分割選択状態）
- 内部レイアウトスモークテスト: Playwrightで `2分割 + cover + 3画像` を投入し、`2ページ` 生成とScreen D表示を確認（`smoke: ok`）
- T-017疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-017スクリーンショット（B画面）: `reference/preview/preview-screen-d-back-desktop-20260310-010327.png`（縦長ミニ図を確認）
- T-017モバイル確認（B画面）: `reference/preview/preview-screen-d-back-mobile-20260310-010327.png`（390x844, 6分割選択状態）
- T-017スクリーンショット（D画面）: `reference/preview/preview-screen-d-back-state-20260310-010412.png`（上部の戻る導線を確認）
- T-017スモークテスト: Playwrightで `2分割 + cover + 3画像` を投入し、Screen D到達後に `← 戻る` でScreen Cへ復帰確認（`smoke: ok`）
- T-018疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-018スクリーンショット（desktop）: `reference/preview/preview-header-align-desktop-20260310-011304.png`（ヘッダーと `app-surface` 左端一致を確認）
- T-018スクリーンショット（mobile）: `reference/preview/preview-header-align-mobile-20260310-011304.png`（390x844で折返し崩れなし）
- T-019移動対象（13件）: ルート直下 `preview-*.png` を `reference/preview/` へ一括移動
- T-019検証: ルート直下 `preview-*.png` は 0 件、`reference/preview/` には 14 件（既存1件 + 移動13件）
- T-018レイアウト検証: Playwright評価で `.pg-header.left` と `.app-surface.left` の差分 `< 1px` を確認（`alignment-check: ok`）
- T-020〜T-023疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-020〜T-023スクリーンショット（A画面）: `reference/preview/preview-t020-023-screen-a-20260309224853.png`（A画面で全件サムネイル表示を確認）
- T-020〜T-023スクリーンショット（B画面）: `reference/preview/preview-t020-023-screen-b-20260309224853.png`（下部戻る導線を確認）
- T-020〜T-023スクリーンショット（C画面）: `reference/preview/preview-t020-023-screen-c-20260309224853.png`（A4比率の実画像プレビューを確認）
- T-020〜T-023スクリーンショット（D画面）: `reference/preview/preview-t020-023-screen-d-20260309224853.png`（viewer領域 + PDFを開くフォールバック導線を確認）
- T-020〜T-023スモークテスト: Playwrightで `3画像投入 -> B/A戻る -> C/B戻る -> PDF生成 -> D/C戻る` と `fallbackリンク表示` を確認（`smoke: ok`）
- T-024疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-024スクリーンショット（B画面）: `reference/preview/preview-t024-screen-b-20260309225754.png`（設定領域とCTAの非重なりを確認）
- T-024スクリーンショット（C画面）: `reference/preview/preview-t024-screen-c-20260309225754.png`（A4プレビュー領域とCTAの非重なりを確認）
- T-024スクリーンショット（D画面）: `reference/preview/preview-t024-screen-d-20260309225754.png`（viewer領域とCTAの非重なりを確認）
- T-024レイアウト検証: Playwright評価で `sc-b/sc-c/sc-d` の表示領域と `.sc-cta` の重なり判定がすべて `false`（`OVERLAP_CHECK {"sc-b":false,"sc-c":false,"sc-d":false}`）
