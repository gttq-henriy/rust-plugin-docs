# DynamicMonuments プラグイン 使用方法

## 概要
サーバー上に動的なモニュメント（建造物セットなど）を自動・手動でスポーンさせることができるプラグインです。プレハブを用いて、木箱、NPC、カードドアなどをまとめて配置し、ルートテーブルの制御管理も統合的に行えます。

## 主な機能
- **自動スポーン機能**: 設定した場所に自動的にモニュメントを出現・リスポーンさせます。
- **グレネード/フレアによるサモン**: 指定スキンが適用されたフレアでプレイヤーがモニュメントを召喚可能。
- **カードドア / エレベーター対応**: モニュメント内にカードドアやカスタムエレベーターを組み込み可能。
- **NpcSpawn / カスタムルート連携**: `NpcSpawn`, `AlphaLoot`, `CustomLoot`, `Loottable` プラグインと連携可能。

## コンソール・チャットコマンド（管理者専用）
| コマンド | 説明 |
|---|---|
| `spawnmonumentmypos [preset_name]` | 自分の位置にモニュメントをスポーン |
| `spawnmonument [preset_name]` | 指定モニュメントをスポーン |
| `killmonument` | 視線先のモニュメントを削除 |
| `killallmonuments` | 全DynamicMonumentsを削除 |
| `respawnmonuments` | 全自動スポーンモニュメントをリスポーン |
| `givemonument [preset_name] <player_id>` | 召喚用アイテムをプレイヤーに付与 |

---



## 一般プレイヤー向けの使用方法
このプラグインはパッシブ（自動適用）に動作します。**プレイヤーが直接入力するコマンドは不要**です。サーバー内のイベントや特定の行動（NPC討伐、スポーン、死亡など）に対して自動的に機能が適用されます。

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `DynamicMonuments.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/DynamicMonuments.json`
3. リロード: `carbon.reload DynamicMonuments`

### 設定の主な項目
- **LootTableConfig**: `AlphaLoot` や `Loottable` との連携設定
- 召喚用フレアのスキンIDや自動スポーン位置の座標設定

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **DynamicMonuments** を選択。
2. **Reload** / **Unload** / **Config** の操作が可能です。
3. ゲーム内のチャットコマンド（`/spawnmonumentmypos` 等）を管理者権限で直接実行できます。
