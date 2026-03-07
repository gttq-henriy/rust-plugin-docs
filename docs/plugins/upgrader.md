# Upgrader プラグイン 使用方法

## 概要
武器、防具、採集ツールをスクラップなどのアイテムを消費してアップグレードできるプラグインです。ダメージ増加、マガジンサイズ拡張、ライフスティール、死亡時のアイテム保護など様々な特殊能力を付与できます。

## 操作方法（プレイヤー）
- 修理ベンチ（Repair Bench）を開き、対象アイテムを入れるとアップグレードUIが表示されます。
- UIから必要なコスト（スクラップ等）を支払い、能力レベルを上げます。

## パーミッション（権限）
| 権限名 | 説明 |
|---|---|
| `upgrader.button` | 修理ベンチでアップグレードUIボタンを表示・使用 |
| `upgrader.weapon` | 武器のアップグレードを実行可能 |
| `upgrader.armor` | 防具のアップグレードを実行可能 |
| `upgrader.tool` | ツールのアップグレードを実行可能 |
| `upgrader.bypasscost` | コストを無視して無料でアップグレード |
| `upgrader.inspection` | 他プレイヤーの装備アップグレード状況を確認 |

## アップグレード項目
### 武器
DamageLevels / MagazineSizeLevels / DurabilityWeaponLevels / LifeStealLevels / CritChanceLevels / InstantReloadLevels

### 防具
DefenseLevels / DurabilityArmorLevels / RadiationProtectionLevels / ResurrectionChanceLevels / RestoreChanceLevels

### ツール
GatherYieldLevels / DurabilityToolLevels / TreeDeforestationLevels / InstantMiningLevels / SmeltingLevels

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `Upgrader.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/Upgrader.json`
3. リロード: `carbon.reload Upgrader`

### 設定ファイルの主な内容
- 各武器・防具・ツールごとのアップグレードレベル・上昇値・要求コスト（アイテムと個数）を細かくカスタマイズ可能
- デフォルトコストは「スクラップ」

### 権限の付与
```
o.grant user <SteamID> upgrader.button
o.grant group default upgrader.weapon
o.grant group default upgrader.armor
o.grant group default upgrader.tool
```

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **Upgrader** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。

### 権限の管理
1. **「Permissions」** タブを開きます。
2. `upgrader.` で始まる権限一覧から、プレイヤーやグループへの付与・削除が可能です。
3. 特定プレイヤーに `upgrader.bypasscost` を付与すれば、そのプレイヤーは無料でアップグレードできます。
