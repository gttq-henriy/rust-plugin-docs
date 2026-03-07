# RobLoot プラグイン 使用方法

## 概要
NPCの死亡時のルートテーブルをカスタマイズするプラグインです。RobSpawnプラグインと連携して使用し、スポーンされたNPCのドロップ品を細かく制御できます。

## 主な機能
- NPC種類別のルートテーブル設定
- アイテムのドロップ確率・個数設定
- RobSpawnとの連携

## 連携プラグイン
- **RobSpawn**: NPC管理プラグインとの連携

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `RobLoot.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/RobLoot.json`
3. リロード: `carbon.reload RobLoot`

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **RobLoot** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。
