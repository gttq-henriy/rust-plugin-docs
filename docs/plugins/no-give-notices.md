# NoGiveNotices プラグイン 使用方法

## 概要
管理者が `inventory.give` コマンドでアイテムを付与した際のチャット通知を非表示にするプラグインです。他プレイヤーにアイテム付与が見えなくなります。

## 主な機能
- アイテム付与メッセージの抑制
- 管理コマンドの透明化

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `NoGiveNotices.cs` を `carbon/plugins/` に配置します。
2. 設定なし
3. リロード: `carbon.reload NoGiveNotices`

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **NoGiveNotices** を選択。
2. **Reload** でリロードできます。
