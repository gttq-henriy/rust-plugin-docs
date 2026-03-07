# SignArtist プラグイン 使用方法

## 概要
ゲーム内の看板やフォトフレームにURL指定で画像を描画できるプラグインです。サーバーのロゴや案内図をゲーム内の看板に表示するのに便利です。

## 主な機能
- URL画像の看板への描画
- フォトフレーム対応
- 画像サイズの自動調整
- 権限ベースのアクセス制御

## チャットコマンド
| コマンド | 説明 |
|---|---|
| `/sil <URL>` | 見ている看板にURLの画像を描画 |

## パーミッション
| 権限名 | 説明 |
|---|---|
| `signartist.use` | 画像描画の使用権限 |

> **注意**: サーバーに `libgdiplus` が必要です。Ubuntu: `sudo apt install libgdiplus`

---



## 一般プレイヤー向けの使用方法
プレイヤーはチャットコマンド等を使用してこのプラグインの機能を利用できます。

### コマンド
- /sil <画像URL> : 見ている看板やフォトフレームに、指定したURLの画像を貼り付けます。（要権限）

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `SignArtist.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/SignArtist.json`
3. リロード: `carbon.reload SignArtist`

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **SignArtist** を選択。
2. **「Permissions」** タブで `signartist.use` を付与します。
