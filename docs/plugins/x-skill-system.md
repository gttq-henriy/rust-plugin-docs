# xSkillSystem プラグイン 使用方法

## 概要
各種アクションに応じてXP（経験値）を獲得し、スキルレベルを上げるRPG風成長システムを追加するプラグインです。

## プレイヤー向けコマンド（デフォルト）
| コマンド | 説明 |
|---|---|
| `/skills` | メインのスキルUIを開く |
| `/stats` | ステータス詳細UIを開く |
| `/lb` | リーダーボード（ランキング）UIを開く |

※コマンド名は設定ファイルで変更・追加が可能です。

## スキルの種類
| スキル | 取得方法 |
|---|---|
| Woodcutting | 木材採集 |
| Mining | 鉱石・石の採集 |
| Gathering | 植物やアイテム拾い |
| Looting | 箱やドラム缶を開ける |
| Slayer | 動物・NPC・プレイヤーの討伐 |
| Skinning | 動物の解体 |
| Building | 建築パーツのアップグレードや設置 |
| Crafting | アイテム作成 |
| Vitality | 医療アイテム使用 |

## 主な機能
- **Gather Rate倍率**: スキルレベルに応じて採取量を増加（Config: `EnableGatherRateBySkill`）
- **Level Rewards**: 特定レベル到達時に権限付与やコマンド実行の報酬
- **ダブルXP**: 曜日と時間を指定して経験値2倍イベントを自動開催
- **HUDとXPポップアップ**: XP獲得時にミニHUDとポップアップで通知

---



## 一般プレイヤー向けの使用方法
プレイヤーはチャットコマンド等を使用してこのプラグインの機能を利用できます。

### コマンド
- /skill コマンドでスキルツリー画面を開き、獲得した経験値でスキルをアンロックできます。

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `xSkillSystem.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/xSkillSystem.json`
3. リロード: `carbon.reload xSkillSystem`

### 設定の主な項目
- **XP設定**: 各スキルごとのXP取得量をアイテム単位で設定可能
- **MaxLevelBySkill**: 各スキルの最大レベル（0 = 無制限）
- **LevelRewards**: レベル到達時のコマンド実行（権限付与、アイテム付与等）
- **DoubleXPTimes**: ダブルXPの曜日・時間帯設定

### 権限の付与
```
o.grant user <SteamID> xskillsystem.powertools100%
```
※ `xskillsystem.powertools100%` : 電動ツール使用時のXPペナルティを無効化

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **xSkillSystem** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。

### 権限の管理
1. **「Permissions」** タブを開きます。
2. `xskillsystem.` で始まる権限一覧から、プレイヤーへの付与・削除が可能です。

### スキル管理（Admin UI）
- 管理者権限を持つプレイヤーがスキルUIを開くと、**Admin** タブが表示されます。
- Admin タブからプレイヤーのスキルレベル・XPの確認や編集、リセットが可能です。
