# NPCShop プラグイン 使用方法

## 概要
サーバー上にNPCショップ（店員NPC）を設置し、プレイヤーがアイテムの売買を行えるプラグインです。NPCに近づいてインタラクトするとショップUIが開きます。複数のショップNPCを設置でき、各NPCごとに販売品目・価格・在庫管理を個別に設定可能です。

## 主な機能
- **NPC店員の配置**: ゲーム内の任意の場所にショップNPCを設置
- **カスタム商品**: アイテム・コマンド・通貨を組み合わせた売買設定
- **在庫管理（リフィルシステム）**: 購入で在庫が減り、時間経過で補充されるシステム
- **割引システム**: 権限ベースの割引率を複数段階設定可能
- **マップマーカー**: ショップ位置をマップに表示
- **NPC外見のカスタマイズ**: 服装・手持ちアイテム・名前を自由に設定
- **モニュメント連動**: モニュメント基準の相対座標で配置可能

## チャットコマンド（管理者専用）
| コマンド | 説明 |
|---|---|
| `/shopspawn` | 自分の位置にショップNPCを設置 |
| `/shopremove` | 見ているショップNPCを削除 |
| `/shopchangepos` | ショップNPCの位置変更モード |
| `/shopchangepos update` | 選択したNPCを自分の位置に移動 |
| `/shopchangepos cancel` | 位置変更をキャンセル |

## 連携プラグイン
- **Economics / ServerRewards / IQEconomic**: 通貨システム
- **ImageLibrary**: 商品アイコンの表示
- **MonumentFinder**: モニュメント座標の取得
- **CustomItemDefinitions**: カスタムアイテム対応

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `NPCShop.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/NPCShop.json`
3. リロード: `carbon.reload NPCShop`

### 設定の主な項目
- `Bots`: 各ショップNPCの設定（名前、位置、服装、販売品目、権限）
- `Discounts`: 権限名と割引率のペア
- `UseServerRewards`: `true`でServerRewards、`false`でEconomicsを使用

### 権限の付与
```
o.grant user <SteamID> npcshop.interact
```

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **NPCShop** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。

### ショップNPCの設置
- 管理者権限（`npcshop.interact`）を持つプレイヤーが `/shopspawn` でNPCを設置します。
- NPCに近づいてインタラクト（しゃがみ+使用）すると、管理者にはUIの編集モードが表示されます。

### 商品の編集
- 管理者UIから商品の追加・削除・価格変更・在庫設定が可能です。
