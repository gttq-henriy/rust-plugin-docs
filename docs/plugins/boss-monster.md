# BossMonster プラグイン 使用方法

## 概要
マップ上にボスNPC（強力なモンスター）を自動スポーンさせるプラグインです。各ボスに固有の能力（スパイク、ファイアボール、電撃、凍結、動物召喚など）を設定でき、撃破時の報酬（ルートテーブル、経済通貨）を細かくカスタマイズ可能です。

## 主な機能
- **自動スポーン**: 設定したボス数を維持するように自動的にスポーン
- **特殊能力**: Spikes / FireBall / ElectricShock / Wounded / Freeze / 動物召喚 / NPC召喚 / 透明化
- **マップマーカー**: ボス位置をリアルタイムでマップに表示（HP付き）
- **ルートテーブル**: 独自テーブル、AlphaLoot、CustomLoot連携に対応
- **経済連携**: Economics / ServerRewards / IQEconomic / XPerience でキル報酬
- **Discord通知**: DiscordMessages プラグインでボス出現・撃破を通知
- **PvEモード**: PveMode プラグインと連携可能

## 必須プラグイン
- **NpcSpawn**: ボスNPCのスポーンに必須

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `BossMonster.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/BossMonster.json`
3. ボスデータ: `carbon/data/BossMonster/Bosses/` に各ボスの設定ファイルを配置
4. リロード: `carbon.reload BossMonster`

### 設定の主な項目
- `AmountBosses`: マップ上に同時存在するボスの最大数
- `TurretDamageScale`: タレットからボスへのダメージ倍率
- 各ボスファイルで HP、装備、能力、ルートテーブル、スポーン位置を個別設定

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **BossMonster** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。
3. ボスのスポーン位置やルートテーブルは `data/BossMonster/Bosses/` のファイルで管理されます。
