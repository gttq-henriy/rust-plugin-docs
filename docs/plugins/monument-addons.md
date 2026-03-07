# MonumentAddons プラグイン 使用方法

## 概要
モニュメント（遺跡・施設）にカスタムエンティティを追加するプラグインです。NPC、自動販売機、CCTV、スポーンポイントなどをモニュメントに追加設定できます。プロファイルベースの管理で複数の設定セットを切り替えられます。

## 主な機能
- モニュメントへのエンティティ追加（NPC、販売機、CCTV等）
- プロファイルによる設定管理
- CopyPaste連携でのプリセット配置
- マップ上のモニュメント自動検出

## 連携プラグイン
- **MonumentFinder**: モニュメント座標の取得に必須
- **CopyPaste**: プリセット建築の配置

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `MonumentAddons.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/MonumentAddons.json`
3. プロファイル: `carbon/data/MonumentAddons/` に保存
4. リロード: `carbon.reload MonumentAddons`

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **MonumentAddons** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。
