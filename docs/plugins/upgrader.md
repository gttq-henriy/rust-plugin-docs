# Upgrader プラグイン 使用方法

## 概要
武器、防具、採集ツールをスクラップなどのアイテムを消費してアップグレードできる大型プラグインです。
アップグレードにより、ダメージ増加、マガジンサイズ拡張、耐久値無限化、アーマー防御力アップ、採集量増加、即時採掘・製錬機能、さらにはライフスティール（HP吸収）や死亡時のアイテム保護機能など、様々な特殊能力を付与できます。

## 操作方法（プレイヤー）
- 修理ベンチ（Repair Bench）を開き、対象のアイテムを入れることでアップグレード用UIボタンが表示されます。
- 表示されたUIから必要なコスト（スクラップ等）を支払い、任意の能力レベルを上げることができます。
- ※UIを開くには `upgrader.button` 権限が必要です。

## パーミッション（権限）
| 権限名 | 説明 |
|---|---|
| `upgrader.button` | 修理ベンチでアップグレードUIボタンを表示・使用できる権限。 |
| `upgrader.weapon` | 武器のアップグレードを実行できる権限。 |
| `upgrader.armor` | 防具のアップグレードを実行できる権限。 |
| `upgrader.tool` | ツールのアップグレードを実行できる権限。 |
| `upgrader.bypasscost` | アップグレード時のコスト（スクラップ等）を無視して無料でアップグレードできる権限（VIPや管理者用）。 |
| `upgrader.inspection` | 他プレイヤーの装備のアップグレード状況を確認できる権限。 |
| `upgrader.diamondgive` | ダイヤモンド（独自カスタムアイテム）を付与する権限。 |
| `upgrader.giveitem` / `additem` | カスタムアイテムを付与するための権限。 |

## 主な機能とアップグレード項目
### 武器（Weapon）
- **DamageLevels**: 攻撃力増加
- **MagazineSizeLevels**: マガジンサイズ拡張
- **DurabilityWeaponLevels**: 耐久値向上（100倍で無限など）
- **LifeStealLevels**: ライフスティール（与えたダメージの一部を回復）
- **CritChanceLevels**: クリティカルヒット発生率（ダメージ2倍）
- **InstantReloadLevels**: 即時リロード（実装に応じて）

### 防具（Armor）
- **DefenseLevels**: ダメージカット（防御力）増加
- **DurabilityArmorLevels**: 耐久値向上
- **RadiationProtectionLevels**: 放射能耐性増加
- **ResurrectionChanceLevels**: 死亡時にその場で復活できる確率（UIボタンが表示されます）
- **RestoreChanceLevels**: 死亡時にインベントリアイテムをおおよそ保持（自動回収）する確率

### ツール（Tool）
- **GatherYieldLevels**: 採集量増加
- **DurabilityToolLevels**: 耐久値向上
- **TreeDeforestationLevels**: 一定確率で周囲一帯の木を一網打尽に伐採する能力
- **InstantMiningLevels**: 鉱石を叩いた時に1発で破壊・取得できる確率
- **SmeltingLevels**: 採集した鉱石や木材が、一定確率で自動的に製錬済みアイテム（鉄片、硫黄、木炭など）に変換されてインベントリに入る能力

## コマンド
| コマンド | 説明 |
|---|---|
| `/resurrectplayer` | ResurrectionChanceに応じた死亡時復活ボタンから内部的に呼び出されるコマンドです。 |

## 設定（Config）について
`oxide/config/Upgrader.json` により、全ての武器・防具・ツールごとのアップグレードレベル、上昇値、要求コスト（必要アイテムと個数）などを細かくカスタマイズ可能です。デフォルトコストは「スクラップ」になっています。
