# PLAN.md

## 改善候補メモ（未承認・実行禁止）
- この欄は、要件未確定の改善案や検討メモを書くための場所です。
- ここに書かれた内容は実行対象ではありません。
- 実行する場合は、ユーザー承認後に `タスク管理` 表へ承認済みタスクとして追加します。
- 記入テンプレート: `C-001 / 候補名 / 目的 / 未確定事項 / メモ`

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
| T-030 | Playwright可視セレクタ運用ルール追記 | `AGENTS.md`, `PLAN.md` | 完了 | `.on` 画面スコープの明文化 |
| T-031 | Screen Dの `PDFを開く` ボタン左寄せ修正 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | 表示指定を `block` に統一し中央揃えを回復 |
| T-032 | iPhone下余白調整 + Screen D簡素化 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | モバイル高さを再調整し、D画面はviewer折りたたみ + 5操作の1画面初期表示へ再構成 |
| T-033 | Screen B初期レイアウトを4分割へ変更 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | 初回選択状態とプレビュー初期表示を4分割へ統一 |
| T-034 | Screen Dの見出し再配置とPDFプレビュー拡張 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | 見出し右へ完了アイコン移設、viewer展開時の高さを `clamp(320px, 48dvh, 460px)` へ拡張 |
| T-035 | Screen Bの分割レイアウトを2列化して1画面表示へ圧縮 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | 分割候補の2列カード化とモバイル縦高さの最適化 |
| T-036 | コミットメッセージ案を番号付きで提示する運用へ更新 | `AGENTS.md`, `PLAN.md` | 完了 | `1. ... / 2. ...` 形式で数字選択できるよう明文化 |
| T-037 | Screen BのCTA高さを他画面と同じ共通サイズへ戻す | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | モバイル時の `#sc-b .btn` 上書きを解除して再検証 |
| T-038 | 共有時のタイトル送信を廃止してPDF実体のみ共有 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | `navigator.share()` の `title` を外し、共有ペイロードを `files` のみに統一 |
| T-039 | 直前コミットのrevert実施 | `PLAN.md`, `index.html`, `EXPLANATION.md` | 完了 | `e17f846` をrevertし、共有ペイロードを `title + files` へ戻した |
| T-040 | Screen Dの中央チェックマークを復元 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | 完了アイコンのみを中央配置へ戻し、他導線は現状維持 |
| T-041 | Screen DのPDF確認をボトムシート化 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | アプリカード内ボトムシート + 幅フィットiframe + フォールバック導線 |
| T-042 | Screen DのPDF確認を標準PDFビューア導線へ統一 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | Safari不安定な埋め込みPDFを廃止し、標準ビューアへ委譲 |
| T-043 | Screen Cの低解像度案内文を削除 | `index.html`, `EXPLANATION.md`, `PLAN.md` | 完了 | 生成時ログ/警告へ集約し、常時表示は撤去 |
| T-044 | RDDへ画像圧縮方針と可変DPI要件を追記 | `reference/RDD.md`, `PLAN.md` | 完了 | Screen Cの自動最適化表示と `targetDpi` 設定方針を要件化 |
| T-045 | 文書責務の再編と `USER_GUIDE.md` 追加 | `README.md`, `USER_GUIDE.md`, `EXPLANATION.md`, `AGENTS.md`, `PLAN.md` | 完了 | READMEを入口化し、利用者向け/開発者向け文書を分離。Ubuntu基準の開発環境差吸収ルールを追加 |
| T-046 | PLAN改善候補メモ枠の追加と実行対象ルール明確化 | `AGENTS.md`, `PLAN.md` | 完了 | 未承認メモと承認済みタスクを分離して誤実行を防ぐ |
| T-047 | PLAN改善候補メモを冒頭へ移動 | `PLAN.md` | 完了 | 改善候補メモの視認性を上げるため、冒頭配置へ変更 |
| T-048 | `package.json` の役割説明を `EXPLANATION.md` へ追記 | `EXPLANATION.md`, `PLAN.md` | 完了 | 初心者向けに、このリポジトリでの使い方も含めて整理 |
| T-049 | ベータ版向け文書・メタ情報整備 | `README.md`, `EXPLANATION.md`, `USER_GUIDE.md`, `AGENTS.md`, `PLAN.md`, `package.json`, `tests/*` | 完了 | `index.html` は保留し、文書・メタ情報・テスト導線のみ先行整備 |
| T-050 | 改善候補メモへ候補番号を付与 | `PLAN.md` | 完了 | 改善候補を `C-001` 形式で参照できるよう整理 |
| T-051 | アプリ画面ヘッダーへベータ版・版番号表示を追加 | `index.html`, `EXPLANATION.md`, `PLAN.md`, `tests/smoke.spec.js` | 完了 | `Beta` バッジ + `v1.1.0-beta.1` をヘッダーへ表示 |
| T-052 | ブラウザタイトルを `PoC` から `Beta` 表記へ変更 | `index.html`, `EXPLANATION.md`, `PLAN.md`, `tests/smoke.spec.js` | 完了 | ブラウザタブタイトルを `A4 Print Layout Beta` に統一 |
| T-053 | 画面内のベータ版表記整理をヘッダーへ限定して実施 | `index.html`, `EXPLANATION.md`, `PLAN.md`, `tests/smoke.spec.js` | 完了 | Screen本文は変えず、ヘッダーのみでベータ運用を明示 |
| T-054 | ヘッダー版情報の簡素化（Betaバッジ削除 + 版番号右寄せ） | `index.html`, `EXPLANATION.md`, `PLAN.md`, `tests/smoke.spec.js` | 完了 | `appReleaseBadge` を削除し、`appVersionText` をタイトル行右端へ移動 |
| T-055 | スクリーンショット保存先を `reference/preview/` へ固定 | `AGENTS.md`, `PLAN.md`, `reference/preview/*` | 完了 | ルールを固定し、ルート直下の新規 preview 画像を移動 |
| T-056 | 3環境共通の npm / Playwright セットアップ運用を自動化 | `package.json`, `README.md`, `EXPLANATION.md`, `AGENTS.md`, `PLAN.md` | 完了 | `npm run setup` と project-local Playwright browser を共通手順へ統一 |
| T-057 | `package-lock.json` を作業範囲へ追加して lockfile 差分を確定 | `AGENTS.md`, `PLAN.md`, `package-lock.json` | 完了 | 許可対象へ追加し、既存の root metadata 差分をコミット対象へ整理 |

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
- T-030運用ルール更新: `AGENTS.md` に「Playwright操作ルール（追加）」を追記し、可視画面限定セレクタ（`#sc-*.on`）の優先を明文化
- T-031疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-031スクリーンショット（Screen D）: `/tmp/t031-screen-d-pdf-open-2026-03-15T00-18-00.png`（390x844, `PDFを開く` ボタン中央揃えを確認）
- T-031画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-031レイアウト検証: Playwright評価で `#sc-d.on #openPdfLink` の `display=\"block\"` `textAlign=\"center\"` `width=mainWidth` `leftDelta=0` `rightDelta=0` を確認
- T-032疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-032スクリーンショット（Screen A/B/C/D）: `/tmp/t032-screen-a-20260315-004148.png` `/tmp/t032-screen-b-20260315-004148.png` `/tmp/t032-screen-c-20260315-004148.png` `/tmp/t032-screen-d-20260315-004148.png`
- T-032画像内容確認: `view_image` で上記4枚を確認（撮影成功・ビューア表示成功）
- T-032レイアウト検証: Playwright評価で `iPhone 12 / iPhone 15` 相当の `A/B/C` は `surfaceBottomGap >= 19px` `lastBtnBottomGapToViewport >= 32px`、`D` 初期表示は `bodyNeedsScroll=false` かつ `共有する/保存する/PDFを開く/戻る/もう一度作る` の5操作表示を確認
- T-032viewer展開検証: Playwright評価で `#pdfPreviewDetails` を開いた後、`previewDisclosureOpen=true` `viewerVisible=true` `bodyNeedsScroll=true` を確認
- T-033疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-033スクリーンショット（Screen B）: `reference/preview/preview-t033-screen-b-20260315-010258.png`（390x844, 初期選択が4分割であることを確認）
- T-033画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-033初期値検証: Playwright評価で `#sc-b.on [data-layout].sel` が `data-layout=\"4\"`、`#previewLayoutLabel` が `レイアウト: 4分割 (2x2)` を確認
- T-034疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-034スクリーンショット（Screen D）: `/tmp/t034-screen-d-20260315-013817.png`（iPhone 12相当, 完了アイコン右寄せとviewer拡張を確認）
- T-034画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-034レイアウト検証: Playwright評価で `#pdfPreviewDetails.open=true`、`#pdfViewer.height=320px`、`iconRightOfTitle=true` を確認
- T-035疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-035スクリーンショット（Screen B）: `/tmp/t035-screen-b-20260315-2col.png`（iPhone 12相当, 分割レイアウト2列表示とCTAまでの1画面表示を確認）
- T-035画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-035レイアウト検証: Playwright評価で `#sc-b.on .sc-body` の `bodyNeedsScroll=false`、`#lay-opts` の `gridTemplateColumns=\"164px 164px\"`、`.fit-row` の `gridTemplateColumns=\"164px 164px\"`、`ctaInsideSurface=true` を確認
- T-036運用ルール更新: `AGENTS.md` のコミット方針に、コミットメッセージ案を `1. ... / 2. ...` 形式で番号付き提示し、数字だけで選べるようにするルールを追加
- T-037疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-037スクリーンショット（Screen B）: `/tmp/t037-screen-b-common-btn-20260315.png`（iPhone 12相当, CTA高さを共通化した状態で1画面表示を確認）
- T-037画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-037レイアウト検証: Playwright評価で `#sc-b.on .sc-body` の `bodyNeedsScroll=false`、`buttonHeight=43`、`ctaInsideSurface=true`、`#lay-opts` の `gridTemplateColumns=\"164px 164px\"` を確認
- T-038共有仕様確認: `rg -n "title:\\s*filename|shareFn\\.call\\(navigator, \\{ files: \\[file\\] \\}\\)|PDFファイル本体のみ共有|共有タイトルは付与しません|T-038" index.html EXPLANATION.md PLAN.md` で `title` 除去と文書反映を確認
- T-039revert適用: `git revert --no-commit HEAD` で `e17f846` を打ち消し適用し、共有ペイロードを `title + files` に復帰
- T-040疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-040Playwright再取得: `npx playwright install chromium` で `/home/shi7111/.cache/ms-playwright/chromium-1208` と `chromium_headless_shell-1208` を再取得
- T-040スクリーンショット（Screen D）: `reference/preview/preview-t040-screen-d-20260315-234804.png`（iPhone 12相当, 中央チェックマーク復元と既存CTA維持を確認）
- T-040画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-040レイアウト検証: Playwright評価で `iconAfterNote=true` `iconInsideNav=false` `saveVisible=true` `openVisible=true` `shareDisabled=false` を確認
- T-040中央配置検証: Playwright評価で `.done-icon` の `margin-left/right` が同値、親コンテンツ中央との差分 `0px`、`iconWidth=52px` `iconHeight=52px` `iconFontSize=18.4px` を確認
- T-041疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`（既存のローカルサーバーを継続利用）
- T-041構文確認: 抽出した `index.html` 内スクリプトを一時ファイルへ保存して `node --check` が通過
- T-041スクリーンショット（Screen Dシート展開）: `/tmp/t041-screen-d-sheet-20260316-001146.png`（iPhone 12相当, ボトムシート表示を確認）
- T-041画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-041シート表示検証: Playwright評価で `ariaHidden="false"` `widthDelta=0` `ctaPointerEvents="none"` `sheetVisible=true` を確認
- T-041閉じる/リセット検証: Playwright評価で `Escape` と背景タップの両方が `aria-hidden="true"` に戻ること、`もう一度作る` 後に `activeScreen="sc-a"` `previewHidden=true` `sheetHidden="true"` を確認
- T-042疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-042構文確認: 抽出した `index.html` 内スクリプトを一時ファイルへ保存して `node --check` が通過
- T-042スクリーンショット（Screen D確認導線）: `/tmp/t042-screen-d-open-link-20260316-012425.png`（iPhone 12相当, `PDFを開いて確認` ボタン表示を確認）
- T-042画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-042確認リンク検証: Playwright評価で `hrefStartsWithBlob=true` `popupOpened=true` `saveVisible=true` `activeScreen="sc-d"` を確認
- T-042リセット検証: Playwright評価で `openPreviewLink` の幅差 `delta=2px`、`もう一度作る` 後に `activeScreen="sc-a"` `previewHidden=true` `previewHref=null` を確認
- T-042実機確認: この環境ではiPhone Safari実機の直接確認は未実施。標準PDFビューア遷移の最終確認はユーザー実機確認待ち
- T-043文言確認: `rg -n "低解像度警告は生成時にログと警告表示へ集約します" index.html EXPLANATION.md PLAN.md -S` は一致なし
- T-043疎通確認: `curl` 未導入のため代替として `python3 -c "import http.client; ... HEAD /t043-screen-c-preview.html ..."` を実行し `HTTP/1.0 200 OK` を確認
- T-043スクリーンショット（Screen C）: `/tmp/t043-screen-c-20260317-1847.png`（390x844, 低解像度案内文が表示されないことを確認）
- T-043画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-044文書更新: `reference/RDD.md` に `Screen C` の自動最適化表示、`targetDpi` 可変要件、必要px算出と事前最適化方針を追記
- T-045文書再編: `README.md` を入口資料へ再編し、`USER_GUIDE.md` を新規追加、`EXPLANATION.md` を開発者向け仕様メモとして再構成
- T-045運用ルール更新: `AGENTS.md` に `USER_GUIDE.md` を作業範囲へ追加し、Ubuntu基準の開発環境差吸収ルールを追記
- T-045文書整合確認: `rg -n "USER_GUIDE\\.md|EXPLANATION\\.md|reference/RDD\\.md|PLAN\\.md|AGENTS\\.md|Ubuntu|127\\.0\\.0\\.1:8000|npx playwright install chromium" README.md EXPLANATION.md AGENTS.md USER_GUIDE.md` で文書導線と共通コマンドの記述を確認
- T-045差分確認: `git diff -- README.md USER_GUIDE.md EXPLANATION.md AGENTS.md PLAN.md` で対象文書のみの更新内容を確認
- T-045変更範囲確認: `git status --short` で `README.md` `USER_GUIDE.md` `EXPLANATION.md` `AGENTS.md` `PLAN.md` のみ変更されていることを確認
- T-046運用ルール更新: `AGENTS.md` に `PLAN.md` の `改善候補メモ` は実行対象外、`タスク管理` 表の承認済みタスクのみ実行対象とするルールを追加
- T-046文書更新: `PLAN.md` に `改善候補メモ（未承認・実行禁止）` セクションを追加し、未確定案の記入テンプレートを明記
- T-046差分確認: `git diff -- AGENTS.md PLAN.md` で今回の文書差分のみを確認
- T-047文書更新: `PLAN.md` の `改善候補メモ（未承認・実行禁止）` を冒頭へ移動し、タスク表より先に見えるよう配置を調整
- T-049改善候補整理: `PLAN.md` の `改善候補メモ` にアプリ画面への版表示、ブラウザタイトル変更、画面内表記整理の保留項目を追加
- T-049文書更新: `README.md` `EXPLANATION.md` `USER_GUIDE.md` をベータ版運用と採番ルールに合わせて更新
- T-049作業範囲更新: `AGENTS.md` の許可対象へ `package.json` と `tests/*` を追加
- T-049メタ情報更新: `package.json` を `1.1.0-beta.1` へ更新し、`serve` `test` `test:smoke` を追加、不要な `main` と `directories.test` を削除
- T-049ブラウザ導入: `npx playwright install chromium` を実行し、Chromium / ffmpeg / headless shell を取得
- T-049スモークテスト追加: `tests/smoke.spec.js` を追加し、`3画像 -> 2分割 + cover -> PDF生成` の最小経路を自動化
- T-049テスト確認: `npm test` で `1 passed` を確認
- T-050文書更新: `PLAN.md` の改善候補メモへ `C-001` 形式の候補番号を付与し、テンプレート表記も合わせて更新
- T-048文書更新: `EXPLANATION.md` に `package.json` の役割、主要項目、そしてこのリポジトリで Playwright 用の開発ツール管理に使っていることを追記
- T-051ヘッダー実装: `index.html` に `APP_META`、`Beta` バッジ、`v1.1.0-beta.1` 表示を追加
- T-052タイトル更新: `index.html` の `<title>` と `document.title` を `A4 Print Layout Beta` に統一
- T-053画面内表記整理: ヘッダーのみをベータ版表記対象とし、`Screen A` から `Screen D` の本文文言は現状維持
- T-051〜T-053文書更新: `EXPLANATION.md` にヘッダー版情報表示と `APP_META.version` の位置づけを追記
- T-051〜T-053テスト更新: `tests/smoke.spec.js` にタイトル、`#appReleaseBadge`、`#appVersionText` の確認を追加
- T-051〜T-053失敗分析: `npm test` は Playwright の `chromium_headless_shell` 不足で失敗。直接原因は実行ファイル欠落、根本原因はブラウザキャッシュ未取得、再試行方針として `npx playwright install chromium` 実行後に再試行
- T-051〜T-053ブラウザ導入: `npx playwright install chromium` を実行し、Chromium / ffmpeg / headless shell を取得
- T-051〜T-053テスト確認: `npm test` で `1 passed` を確認
- T-051〜T-053疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-051〜T-053スクリーンショット: `reference/preview/preview-t051-beta-header-20260321-090514.png`（390x844, ヘッダーの `Beta` バッジと版番号表示を確認）
- T-051〜T-053画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-054ヘッダー簡素化: `index.html` から `appReleaseBadge` と `APP_META.releaseLabel` を削除し、`appVersionText` をタイトル行右端へ移動
- T-054文書更新: `EXPLANATION.md` のベータ版表示説明を「タイトル右側の版番号表示」に更新
- T-054テスト更新: `tests/smoke.spec.js` から `#appReleaseBadge` の表示期待を外し、非存在確認とタイトル右側レイアウト確認を追加
- T-054失敗コマンドなし
- T-054テスト確認: `npm test` で `1 passed` を確認
- T-054疎通確認: `curl -I http://127.0.0.1:8000/index.html` -> `HTTP/1.0 200 OK`
- T-054スクリーンショット: `reference/preview/preview-t054-title-version-right-20260321-095014.png`（390x844, タイトル右側の版番号表示を確認）
- T-054画像内容確認: `view_image` で上記画像を確認（撮影成功・ビューア表示成功）
- T-055ルール更新: `AGENTS.md` の作業範囲へ `reference/preview/*` を追加し、スクリーンショット保存先を `reference/preview/` 固定へ変更
- T-055ファイル移動: ルート直下 `preview-t051-beta-header-20260321-090514.png` と `preview-t054-title-version-right-20260321-095014.png` を `reference/preview/` へ移動
- T-055失敗コマンドなし
- T-056スクリプト更新: `package.json` に `setup` `setup:playwright` を追加し、`test` `test:smoke` を `PLAYWRIGHT_BROWSERS_PATH=0` 前提へ更新
- T-056README更新: `README.md` の共通セットアップ手順を `npm run setup` / `npm run serve` / `curl -I` / `npm test` 中心へ変更
- T-056仕様メモ更新: `EXPLANATION.md` に `package-lock.json` を依存再現の正本とする運用、`npm ci` 優先、project-local Playwright browser の理由を追記
- T-056運用ルール更新: `AGENTS.md` に `npm run setup` 正本、`npm ci` 優先、`package-lock.json` 運用ルールを追記
- T-056失敗コマンドなし
- T-056Playwright導入確認: `npm run setup:playwright` で Chromium / ffmpeg / headless shell が repo 配下の Playwright ローカルブラウザ領域へ取得されることを確認
- T-056テスト確認: `npm test` で `1 passed` を確認
- T-056差分確認: `git diff -- package-lock.json` で既存差分のみを確認し、今回の運用変更で新たな lockfile 差分が増えていないことを確認
- T-057運用範囲更新: `AGENTS.md` の作業範囲へ `package-lock.json` を追加
- T-057lockfile整理: `package-lock.json` の root metadata（`name` `version` `license`）差分を既存未コミット差分として確定対象へ整理
- T-057失敗コマンドなし
