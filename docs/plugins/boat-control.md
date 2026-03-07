# BoatControl 使用方法

## 1. 概要
大型帆船（PlayerBoat）を操作するための統合コントロールUIを提供するプラグインです。帆、エンジン、アンカー、大砲、ライトなどの操作を一元管理できます。

## 2. 基本的な使い方
1. プレイヤーボート（大型帆船など）のステアリングホイール（舵輪）に乗る。
2. 画面下部にコントロールUIが表示される。
3. UIのボタンから各種操作が可能。

### 操作一覧（UI ボタンおよびキーバインド）
| 操作 | UIボタン | キーバインド | 説明 |
|---|---|---|---|
| 方向転換 | ✅ | W/S（設定で有効化） | 前進↔後進の切替 |
| 帆の展開/収納 | ✅ | — | 帆を上げる/下ろす |
| エンジンON/OFF | ✅ | — | 小型エンジンの始動/停止 |
| **推進トグル** | — | **右クリック**（設定で有効化） | エンジンがあればエンジン、なければ帆のON/OFFを切替 |
| アンカー上げ/下ろし | ✅ | — | アンカーの操作 |
| ライト点灯/消灯 | ✅ | R（リロードキー、設定で有効化） | ボート上のライトの一括操作 |
| 砲撃 | ✅ | 左クリック（設定で有効化） | 搭載された大砲の一斉射撃 |

> **注意**: キーバインドは設定ファイルで有効/無効の切り替えが可能です。

---

## 3. パーミッション（権限）一覧

| 権限名 | 説明 |
|---|---|
| `boatcontrol.use` | **プラグインの基本使用権限**。ステアリングに乗った際にコントロールUIが表示される。 |
| `boatcontrol.edit` | **ボートの編集権限**。ボートの建築・改修モードへのアクセスを許可。 |
| `boatcontrol.cannonuse` | **大砲操作権限**。UIに大砲ボタンが表示され、砲撃やクルーの配置が可能。 |
| `boatcontrol.bypassAmmo` | **弾薬制限バイパス**。弾薬を消費せずに撃てる。 |
| `boatcontrol.bypasscannoncooldown` | **砲撃クールダウンバイパス**。発射間隔制限を無視して連射可能。 |
| `boatcontrol.authlist` | **認証リスト閲覧権限**。認証プレイヤーリストをUI上で確認可能。 |
| `boatcontrol.deleteauth` | **認証削除権限**。認証リストからプレイヤーを削除可能。 |
| `boatcontrol.repair` | **修理権限**。設定メニューからボートの修理を実行（素材コストあり）。 |
| `boatcontrol.repair.nocost` | **無料修理権限**。素材を消費せずにボートを修理可能。 |
| `boatcontrol.wallpaper` | **壁紙変更権限**。ボートの壁紙テクスチャを変更するUI（BetterTC連携が必要）。 |
| `boatcontrol.engineconfig` | **エンジン設定メニュー権限**。エンジンの詳細設定画面にアクセス可能。 |
| `boatcontrol.engineupgrade` | **エンジンアップグレード権限**。エンジンの推力や燃費を段階的にアップグレード可能。 |
| `boatcontrol.sailconfig` | **帆の設定メニュー権限**。帆の詳細設定画面にアクセス可能。 |
| `boatcontrol.sailupgrade` | **帆のアップグレード権限**。帆の推力を段階的にアップグレード可能。 |

---

## 4. コンソールコマンド一覧

### 基本操作
| コマンド | 説明 |
|---|---|
| `boatcontrol.sails` | 帆の展開/収納をトグル |
| `boatcontrol.direction` | 前進/後進を切替 |
| `boatcontrol.engine` | エンジンのON/OFFをトグル |
| `boatcontrol.anchor` | アンカーの上げ下ろしをトグル |
| `boatcontrol.light` | ボート上のライトの一括ON/OFF |

### 大砲関連
| コマンド | 説明 |
|---|---|
| `boatcontrol.fire` | 搭載大砲を一斉射撃 |
| `boatcontrol.reload` | 選択中の大砲にプレイヤーの弾薬から装填 |
| `boatcontrol.cannonaim <方向>` | 大砲の照準を調整（up/down/left/right） |
| `boatcontrol.assigncrew` | NPC クルーを大砲に配置 |
| `boatcontrol.clearcrew` | 全NPC クルーを削除 |
| `boatcontrol.togglecrew` | クルーの配置/削除をトグル |

### エンジン・帆のアップグレード
| コマンド | 説明 |
|---|---|
| `boatcontrol.upgradeengine <netID>` | エンジンを次レベルにアップグレード |
| `boatcontrol.upgradesail <netID>` | 帆を次レベルにアップグレード |

### 管理者コマンド
| コマンド | 説明 |
|---|---|
| `boatcontrol.clearorphancrew` | 孤立したNPCクルーをサーバーから一括削除 |
| `boatcontrol.editboat` | ボートの編集モードを開始 |

---

## 5. 連携プラグイン
| プラグイン名 | 役割 |
|---|---|
| ImageLibrary (Carbon: ImageDatabase) | アイコン画像の管理 |
| ServerRewards | アップグレードのポイント通貨 |
| Economics | アップグレードの経済通貨 |
| BetterTC | 壁紙変更機能 |
| Notify / UINotify | 通知表示の拡張 |

---

## 6. サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `BoatControl.cs` をサーバーの `carbon/plugins/` ディレクトリに配置します。
2. 自動コンパイルされてロードされます。

### 設定ファイルの編集
- パス: `carbon/config/BoatControl.json`
- テキストエディタで編集し、以下のリロードコマンドで反映します。
  ```
  carbon.reload BoatControl
  ```

### 権限の付与
```
o.grant user <SteamID> boatcontrol.use
o.grant group default boatcontrol.use
```

---

## 7. ゲーム内管理者向け（Carbon CPanel）

Carbon の管理パネル（CPanel）を使用して、ゲーム内からプラグインの管理が可能です。

### CPanel へのアクセス
- ゲーム内コンソール（`F1`）で `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. CPanel の **「Plugins」** タブを開きます。
2. プラグイン一覧から **BoatControl** を選択します。
3. 以下の操作が可能です:
   - **Reload**: プラグインのリロード（設定変更後の反映）
   - **Unload**: プラグインの一時停止
   - **Config**: 設定ファイルの内容をゲーム内で確認

### 権限の管理
1. CPanel の **「Permissions」** タブを開きます。
2. `boatcontrol.` で始まる権限一覧が表示されます。
3. プレイヤーやグループに対して、UIから直接権限の付与・削除が可能です。
