# DailyRewards プラグイン 使用方法

## 概要
サーバーへのログイン日数に応じて、プレイヤーに毎日報酬（アイテム、カスタムコマンド、キット等）を付与するプラグインです。最大数日間にわたる連続ログインボーナスや、毎月のリセット機能、豪華なUIなどをサポートしています。

## パーミッション（権限）
| 権限名 | 説明 |
|---|---|
| `dailyrewards.use` | デイリー報酬を受け取るための基本権限です。（設定で変更可能） |
| `dailyrewards.edit` | インゲームUIの編集モードにアクセスできる管理者用権限です。 |
| `dailyrewards.vip` | VIP用のクールダウン短縮など、コンフィグで個別設定可能な権限です。 |
| `dailyrewards.premium` | Premium用のクールダウン短縮など、コンフィグで個別設定可能な権限です。 |

## 主な機能と使い方

### プレイヤー向け機能
- **報酬の受け取り**:
  - `/daily` または `/rewards` をチャットで入力すると、報酬受け取り用UIが開きます。（コマンド名は設定で変更可能）
  - 日ごとにもらえるアイテムやコマンドが設定されています。
  - 基本設定では数日目（例：7日目）に豪華な「スペシャルデイ報酬」が設定されています。

### システム機能
- **ストレージ**: インベントリがいっぱいで受け取れなかった報酬はプラグイン内の「ストレージ」に保管され、後から引き出せます。
- **リセットサイクル**: 毎月1日や一定間隔で進行状況をリセットする設定が可能です。
- **他プラグイン連携**: `AFKAPI`、`ServerPanel`、`LangAPI`、`Notify`、`ImageLibrary` と連携。

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `DailyRewards.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/DailyRewards.json`
3. リロード: `carbon.reload DailyRewards`

### 設定ファイルの主な項目
- **Cooldown Settings**: 次の報酬を受け取るまでの待機時間（デフォルト3600秒）
- **DailyAwards**: 各日の獲得アイテム（Shortname, 個数）やコマンド（`deposit %steamid% 100` 等）
- **ResetSettings**: 毎日のリセット時間（例 `05:00`）やタイムゾーン

### 権限の付与
```
o.grant user <SteamID> dailyrewards.use
o.grant group default dailyrewards.use
```

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **DailyRewards** を選択。
2. **Reload** でリロード、**Config** で設定内容を確認できます。

### 権限の管理
1. **「Permissions」** タブを開きます。
2. `dailyrewards.` で始まる権限一覧から、プレイヤーやグループへの付与・削除が可能です。

### UI編集モード
- `dailyrewards.edit` 権限を付与した管理者は、ゲーム内UIから直接報酬内容を編集できます。
