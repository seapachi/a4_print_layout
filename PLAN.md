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
| T-025 | 画面A/C文言整理と不要表示削除（初心者向け表現に統一） | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | 画面A情報簡素化 + fit文言日本語化 + ヘッダー文言更新 |
| T-026 | AGENTS運用ルール強化（失敗分析・コミット確認・メッセージ提案） | `AGENTS.md`, `PLAN.md` | 完了 | 失敗分析ループとコミット確認時のメッセージ提案を明文化 |
| T-027 | Claude Code由来 `frontend-design` スキル導入 | `~/.codex/skills/frontend-design/*`, `PLAN.md` | 完了 | `anthropics/claude-code` から導入 |
| T-028 | frontend-designでA/B/C/DのミニマルMOC再設計 | `reference/mock/index_frontend_desight.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | 遷移のみダミー実装 |
| T-029 | iPhone向け固定CTA化（A/B/C/D） | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | `.sc-body` と固定CTA分離、safe-area/dvh対応、D画面CTA主副分割 |

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
- T-025疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-025スクリーンショット（A画面）: `reference/preview/preview-t025-screen-a-20260314-144029.png`（メトリクス/待機中除去、空状態メッセージ中央表示、ヘッダー補助文変更を確認）
- T-025スクリーンショット（C画面）: `reference/preview/preview-t025-screen-c-20260314-144029.png`（`配置: 全体表示` と日本語統一を確認）
- T-025画像内容確認: `view_image` で上記2枚の表示内容を確認（撮影成功・ビューア表示成功）
- T-025動作確認: Playwright評価で `#status`/メトリクス非存在、空状態メッセージ `grid-column: 1 / -1`、非対応ファイル警告表示、`配置: 全体表示` を確認（`missingStatus=true, missingMetrics=true, hasWarning=true`）
- T-026運用ルール更新: `AGENTS.md` に「実行失敗の分析とルール改善」を追加し、コミット確認時の日本語コミットメッセージ提案を必須化
- T-027スキル導入: `python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo anthropics/claude-code --path plugins/frontend-design/skills/frontend-design` -> `/home/shi7111/.codex/skills/frontend-design` へ導入完了
- T-028疎通確認: `python3 -m http.server 8000 --bind 127.0.0.1` 起動後、`curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-028スクリーンショット（desktop）: `/tmp/frontend-desight-desktop-20260314-230619.png`（Screen C表示状態）
- T-028スクリーンショット（mobile）: `/tmp/frontend-desight-mobile-20260314-230619.png`（iPhone 12, Screen D表示状態）
- T-028画像内容確認: `view_image` で上記2枚の表示内容を確認（撮影成功・ビューア表示成功）
- T-029疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-029スクリーンショット（390x844）: `/tmp/t029-mobile390x844-sc-a-2026-03-14T14-25-13-059Z.png` `/tmp/t029-mobile390x844-sc-b-2026-03-14T14-25-13-059Z.png` `/tmp/t029-mobile390x844-sc-c-2026-03-14T14-25-13-059Z.png` `/tmp/t029-mobile390x844-sc-d-2026-03-14T14-25-13-059Z.png`
- T-029スクリーンショット（393x852）: `/tmp/t029-mobile393x852-sc-a-2026-03-14T14-25-13-059Z.png` `/tmp/t029-mobile393x852-sc-b-2026-03-14T14-25-13-059Z.png` `/tmp/t029-mobile393x852-sc-c-2026-03-14T14-25-13-059Z.png` `/tmp/t029-mobile393x852-sc-d-2026-03-14T14-25-13-059Z.png`
- T-029スクリーンショット（desktop）: `/tmp/t029-desktop-sc-c-2026-03-14T14-25-13-059Z.png`
- T-029多ボタンCTA確認（D画面）: `/tmp/t029-mobile390x844-sc-d-with-links-2026-03-14T14-28-54-179Z.png` `/tmp/t029-mobile393x852-sc-d-with-links-2026-03-14T14-28-54-179Z.png`
- T-029画像内容確認: `view_image` で上記代表画像を確認（撮影成功・ビューア表示成功）
- T-029レイアウト検証: Playwright評価で `390x844/393x852` の `sc-a/sc-b/sc-c/sc-d` すべて `ctaInsideSurface=true` `primaryVisible=true` `bodyScrollableMode=true`
- T-029追加検証（D画面多ボタン）: `saveVisible=true` `openVisible=true` `ctaInsideSurface=true` を両ビューポートで確認
- T-029遷移回帰確認: Playwrightで `sc-a -> sc-b -> sc-c -> sc-b -> sc-a` を `data-go` クリックで確認（`trail=["sc-a","sc-b","sc-c","sc-b","sc-a"]`）
- T-029依存確認: Playwright評価で `window.PDFLib` の読み込み済みを確認（`pdfLibLoaded=true`）
