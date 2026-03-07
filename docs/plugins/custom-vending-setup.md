# CustomVendingSetup プラグイン 使用方法

## 概要
モニュメント内の自動販売機の商品ラインナップをカスタマイズできるプラグインです。バニラの自動販売機の中身を自由に変更し、ワイプ間で設定を維持できます。

## 主な機能
- 自動販売機の商品カスタマイズ
- モニュメント単位での設定保存
- カスタムスキン・名前の設定
- ブロードキャスト（マップマーカー）設定

## 連携プラグイン
- **MonumentFinder**: モニュメント基準の設定保存に使用

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `CustomVendingSetup.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/CustomVendingSetup.json`
3. データ: `carbon/data/CustomVendingSetup/` に保存
4. リロード: `carbon.reload CustomVendingSetup`

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### 自動販売機のカスタマイズ
- 管理者権限を持つプレイヤーが自動販売機を開くと、編集UIが表示されます。
- 商品の追加・削除・価格変更がゲーム内で直接行えます。
