# MonumentFinder プラグイン 使用方法

## 概要
サーバーマップ上のモニュメント（遺跡・施設）を検索・特定するユーティリティプラグインです。他プラグイン（MonumentAddons、CustomVendingSetup、NPCShop等）がモニュメントの座標取得に利用しています。

## 主な機能
- 全モニュメントの位置・名前の検索
- 他プラグインへのAPI提供
- モニュメントの相対座標計算

## コンソールコマンド
| コマンド | 説明 |
|---|---|
| `mf.list` | 全モニュメントの一覧表示 |

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `MonumentFinder.cs` を `carbon/plugins/` に配置します。
2. 設定なし（自動検出）
3. リロード: `carbon.reload MonumentFinder`

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **MonumentFinder** を選択。
2. **Reload** でリロードできます。
