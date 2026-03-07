# ScavengerHunt プラグイン 使用方法

## 概要
サーバー内にランダムに宝箱（クレート）を出現させ、プレイヤーにそれを見つけさせる「宝探し」イベントを自動または手動で開催するプラグインです。イベント中、プレイヤーの画面には宝箱の方向と距離を示すHUD（コンパス）が表示されます。

## コマンド（管理者専用）
| コマンド | 説明 |
|---|---|
| `/sch_start` | ScavengerHuntイベントを即座に開始 |
| `/sch_stop` | 進行中のイベントを強制終了し、宝箱を消去 |

## 主な機能
- **自動化対応**: 設定した一定時間ごとに自動でイベントを開催
- **UI表示（コンパス）**: 宝箱の方角と距離を表示
- **ルート連携**: `SimpleLootTable` プラグインと連携可能
- **ポイント連携**: `ServerRewards` で発見者にポイント付与可能
- **通知連携**: `Notify` プラグインによるチャット装飾に対応

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `ScavengerHunt.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/ScavengerHunt.json`
3. リロード: `carbon.reload ScavengerHunt`

### 設定の主な項目
- `Autostart event`: `true` で自動開催を有効化
- `Pre-event message time`: イベント開始の事前告知時間（秒）
- `Minimum amount of online players`: 自動開始に必要な最低オンライン人数
- `Own loot table for crate`: `true` でプラグイン独自のドロップアイテムリストを使用

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **ScavengerHunt** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。

### イベントの操作
- ゲーム内チャットで `/sch_start` や `/sch_stop` を管理者権限で直接実行できます。
