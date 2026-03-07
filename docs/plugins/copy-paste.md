# CopyPaste プラグイン 使用方法

## 概要
建築物やデプロイアブルを範囲選択してコピーし、別の場所にペーストできるプラグインです。建築のバックアップ・復元・テンプレート化に活用できます。

## 主な機能
- 建築物の範囲コピー＆ペースト
- 保存されたコピーデータの管理
- 高さ・回転のオフセット指定
- スキン・アイテム内容の保持

## チャットコマンド
| コマンド | 説明 |
|---|---|
| `/copy <名前>` | 見ている建築物をコピーして保存 |
| `/paste <名前>` | 保存したデータをペースト |
| `/pastelist` | 保存されたコピー一覧 |

## パーミッション
| 権限名 | 説明 |
|---|---|
| `copypaste.copy` | コピー権限 |
| `copypaste.paste` | ペースト権限 |
| `copypaste.list` | 一覧表示権限 |
| `copypaste.undo` | 元に戻す権限 |

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `CopyPaste.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/CopyPaste.json`
3. コピーデータ: `carbon/data/copypaste/` に保存
4. リロード: `carbon.reload CopyPaste`

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **CopyPaste** を選択。
2. **「Permissions」** タブで権限を管理者に付与します。
