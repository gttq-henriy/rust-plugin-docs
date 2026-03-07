# ExtraTea プラグイン 使用方法

## 概要
カスタムティーアイテムを追加するプラグインです。特定のスキンIDを持つアイテムを飲むと、ダメージ増加・防御増加・ルート量増加などの時限バフ効果を得られます。CustomStatusFramework と連携し、バフ状態をHUDに表示できます。

## プレイヤー向けコマンド
| コマンド | 説明 |
|---|---|
| `/tea` または `/t` | 現在のティーバフ状態と残り時間を確認 |

## バフの種類
| タイプ | 効果 |
|---|---|
| Damage | 攻撃ダメージ増加 |
| Defend | 被ダメージ軽減 |
| Loot | ルートコンテナからの獲得量増加 |

## パーミッション
| 権限名 | 説明 |
|---|---|
| `extratea.admin` | 管理者用：他プレイヤーにティーアイテムを付与 |

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `ExtraTea.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/ExtraTea.json`
3. リロード: `carbon.reload ExtraTea`

### 設定の主な項目
- `Extra Tea Settings`: 各ティーの名前、効果タイプ、発動確率（min/max）、持続時間（秒）、アイテムShortname・SkinIDを設定
- `Custom Status Framework`: `true` でHUDにバフ状態を表示

### 連携プラグイン
- **CustomStatusFramework**: バフ状態のHUD表示
- **ImageLibrary**: バフアイコンの管理

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **ExtraTea** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。

### 権限の管理
1. **「Permissions」** タブで `extratea.admin` を管理者に付与できます。
