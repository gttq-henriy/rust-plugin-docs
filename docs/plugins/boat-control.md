# BoatControl 使用方法

## 1. プラグインの導入
1. `Src/BoatControl.cs` をサーバーのプラグインディレクトリへ配置します。
   - 例: `[サーバールート]/carbon/plugins/BoatControl.cs`
2. コンソールでリロードします。
   ```
   carbon.reload BoatControl
   ```

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

プレイヤーへの権限付与コマンド例:
```
oxide.grant user <SteamID> <権限名>
oxide.grant group default <権限名>
```

| 権限名 | 説明 |
|---|---|
| `boatcontrol.use` | **プラグインの基本使用権限**。ステアリングに乗った際にコントロールUIが表示される。この権限がないとプラグインの全機能が使えません。 |
| `boatcontrol.edit` | **ボートの編集権限**。ボートの建築・改修モードへのアクセスを許可します。 |
| `boatcontrol.cannonuse` | **大砲操作権限**。UIに大砲ボタンが表示され、砲撃やクルーの配置が可能になります。 |
| `boatcontrol.bypassAmmo` | **弾薬制限バイパス**。大砲の発射時に弾薬を消費せずに撃てます。 |
| `boatcontrol.bypasscannoncooldown` | **砲撃クールダウンバイパス**。大砲の発射間隔制限を無視して連射できます。 |
| `boatcontrol.authlist` | **認証リスト閲覧権限**。ボートに認証されているプレイヤーのリストをUI上で確認できます。 |
| `boatcontrol.deleteauth` | **認証削除権限**。認証リストからプレイヤーを削除できます。 |
| `boatcontrol.repair` | **修理権限**。設定メニューからボートの修理を実行できます（素材コストあり）。 |
| `boatcontrol.repair.nocost` | **無料修理権限**。修理に必要な素材を消費せずにボートを修理できます。 |
| `boatcontrol.wallpaper` | **壁紙変更権限**。ボートの壁紙（テクスチャ）を変更するUIにアクセスできます（BetterTC連携が必要）。 |
| `boatcontrol.engineconfig` | **エンジン設定メニュー権限**。エンジンの詳細設定画面（燃料補給UIなど）にアクセスできます。 |
| `boatcontrol.engineupgrade` | **エンジンアップグレード権限**。エンジンの推力や燃費を段階的にアップグレードできます（コストあり）。 |
| `boatcontrol.sailconfig` | **帆の設定メニュー権限**。帆の詳細設定画面にアクセスできます。 |
| `boatcontrol.sailupgrade` | **帆のアップグレード権限**。帆の推力を段階的にアップグレードできます（コストあり）。 |

---

## 4. コンソールコマンド一覧

通常はUI経由で操作しますが、以下のコンソールコマンドでも操作可能です。

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
| `boatcontrol.cannonsmenu` | 大砲メニューの表示/非表示 |
| `boatcontrol.togglecrewselection <番号>` | 指定番号のクルーの選択/非選択を切替 |

### メニュー関連
| コマンド | 説明 |
|---|---|
| `boatcontrol.showconfig` | 設定メニューの表示 |
| `boatcontrol.showauth` | 認証リストの表示（`boatcontrol.authlist` 権限が必要） |
| `boatcontrol.removeauth <SteamID>` | 指定プレイヤーの認証削除（`boatcontrol.deleteauth` 権限が必要） |
| `boatcontrol.repairboat` | ボートの修理を実行（`boatcontrol.repair` 権限が必要） |

### エンジン・帆のアップグレード
| コマンド | 説明 |
|---|---|
| `boatcontrol.showenginemenu` | エンジン設定メニューの表示（`boatcontrol.engineconfig` 権限が必要） |
| `boatcontrol.openrefuel <netID>` | 指定エンジンの燃料補給画面を表示 |
| `boatcontrol.refuelengine <netID> <量>` | 手持ちの低品質燃料でエンジンに補給 |
| `boatcontrol.openupgrade <netID>` | エンジンのアップグレード画面を表示 |
| `boatcontrol.upgradeengine <netID>` | エンジンを次レベルにアップグレード（`boatcontrol.engineupgrade` 権限が必要） |
| `boatcontrol.showsailmenu` | 帆の設定メニューの表示（`boatcontrol.sailconfig` 権限が必要） |
| `boatcontrol.upgradesail <netID>` | 帆を次レベルにアップグレード（`boatcontrol.sailupgrade` 権限が必要） |

### UI 操作
| コマンド | 説明 |
|---|---|
| `boatcontrol.resetuiposition` | 情報ウィンドウの位置をデフォルトにリセット |
| `boatcontrol.toggleinfodrag` | 情報ウィンドウのドラッグの有効/無効を切替 |

### 管理者コマンド
| コマンド | 説明 |
|---|---|
| `boatcontrol.clearorphancrew` | 孤立したNPCクルーをサーバーから一括削除 |
| `boatcontrol.editboat` | ボートの編集モードを開始（`boatcontrol.edit` 権限が必要） |
| `boatcontrol.wallpaperedit` | 壁紙編集UIを表示（`boatcontrol.wallpaper` 権限が必要、BetterTC連携） |

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

## 6. 修正版についての注意事項
- 今回の修正は `System.Reflection` を使用して `MaxThrust` の内部フィールドにアクセスしています。
- 将来的なRust本体アップデートでフィールド名が変更された場合、コンソールに `[BoatControl] MaxThrust フィールドが見つかりません` と警告が出る可能性があります。
