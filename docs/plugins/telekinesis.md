# Telekinesis プラグイン 使用方法

## 概要
エンティティ（建築物・デプロイアブル）をテレキネシスのように掴んで移動・回転させるプラグインです。設置済みのオブジェクトの位置調整に便利です。

## 主な機能
- エンティティの移動（前後左右上下）
- エンティティの回転
- 掴み距離の設定
- 元に戻す機能

## チャットコマンド
| コマンド | 説明 |
|---|---|
| `/tls` | テレキネシスモードのON/OFF切替 |

## パーミッション
| 権限名 | 説明 |
|---|---|
| `telekinesis.use` | テレキネシスの使用権限 |

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `Telekinesis.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/Telekinesis.json`
3. リロード: `carbon.reload Telekinesis`

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **Telekinesis** を選択。
2. **「Permissions」** タブで `telekinesis.use` を管理者に付与します。
