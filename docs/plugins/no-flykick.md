# NoFlykick プラグイン 使用方法

## 概要
フライハック検出によるキックを無効化するプラグインです。建築の上や特殊な地形でプレイヤーが誤ってキックされるのを防止します。

## 主な機能
- フライハックキックの無効化
- 権限ベースの適用制御

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `NoFlykick.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/NoFlykick.json`
3. リロード: `carbon.reload NoFlykick`

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **NoFlykick** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。
