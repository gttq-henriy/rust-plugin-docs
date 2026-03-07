# FireworkGun プラグイン 使用方法

## 概要
花火を発射できる銃を追加するプラグインです。特定のアイテムを装備して発射すると、花火エフェクトが表示されます。

## 主な機能
- 花火発射機能
- カスタマイズ可能な花火エフェクト
- 権限ベースのアクセス制御

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `FireworkGun.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/FireworkGun.json`
3. リロード: `carbon.reload FireworkGun`

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **FireworkGun** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。
