# XDQuest プラグイン 使用方法

## 概要
サーバー内に高機能な「クエストシステム」を導入するプラグインです。プレイヤーはクエストUIまたは専用NPCからクエストを受注し、達成することで報酬を獲得できます。

## プレイヤー向けコマンド
| コマンド | 説明 |
|---|---|
| `/qlist` または `/quest` | クエストリストと進行状況UIを開く（コマンド名は設定で変更可能） |

### UIからできること
- クエストの受注・破棄
- クエストの報告（完了）と報酬の受け取り
- 進行状況のリアルタイム確認

## クエストの種類
`Gather`(採集) / `EntityKill`(キル) / `Craft`(クラフト) / `Loot`(ルート) / `RaidableBases`(攻略) / `Fishing`(釣り) / `Delivery`(納品) など多数

---



## 一般プレイヤー向けの使用方法
プレイヤーはチャットコマンド等を使用してこのプラグインの機能を利用できます。

### コマンド
- /q または /quest コマンドでクエストメニューを開き、受注や報酬の受け取りができます。

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `XDQuest.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/XDQuest.json`
3. リロード: `carbon.reload XDQuest`

### 管理コマンド
| コマンド | 説明 |
|---|---|
| `/quest.saveposition` | 現在位置をNPCスポーン位置として保存 |
| `/quest.saveposition.outpost` | アウトポスト基準の相対位置として保存 |
| `xdquest.player.reset [SteamID64]` | (コンソール) プレイヤーのクエスト進行をリセット |

### 設定の主な項目
- **SpawnSettings**: クエストルーム自動スポーン / NPC単体スポーン / セーフゾーン設定
- **Discord連携**: `discordWebhookUrl` で統計情報をDiscordへ定期配信

### クエストデータの設定
- クエストリストは `carbon/data/XDQuest/Quest.json` に保存
- Webエディタ（https://xdquest.skyplugins.ru/）でJSONファイルの生成も可能

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **XDQuest** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。
3. `xdquest.player.reset` コマンドはゲーム内コンソール（F1）からも実行可能です。

### クエストルームの配置
- 管理者がゲーム内で目的の位置に立ち、チャットで `/quest.saveposition` を実行するだけでNPC建物のスポーン位置を設定できます。
