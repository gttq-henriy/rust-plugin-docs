# Economics プラグイン 使用方法

## 概要
ゲーム内通貨（仮想マネー）システムを提供する基盤プラグインです。多くの他プラグイン（ショップ、クエスト、ATM等）が通貨管理のためにこのプラグインに依存しています。

## 主な機能
- プレイヤー別の残高管理
- 入金・出金・送金機能
- 他プラグインからのAPI呼び出し対応
- データの自動保存

## チャットコマンド
| コマンド | 説明 |
|---|---|
| `/balance` | 自分の残高を確認 |
| `/deposit <プレイヤー> <金額>` | 指定プレイヤーに入金（管理者） |
| `/withdraw <プレイヤー> <金額>` | 指定プレイヤーから出金（管理者） |
| `/transfer <プレイヤー> <金額>` | 他プレイヤーに送金 |

## コンソールコマンド
| コマンド | 説明 |
|---|---|
| `eco.balance <SteamID>` | 残高確認 |
| `eco.deposit <SteamID> <金額>` | 入金 |
| `eco.withdraw <SteamID> <金額>` | 出金 |
| `eco.setbalance <SteamID> <金額>` | 残高設定 |

---



## 一般プレイヤー向けの使用方法
プレイヤーはチャットコマンド等を使用してこのプラグインの機能を利用できます。

### コマンド
- /balance : 現在の所持金を確認します。
- /transfer <名前> <金額> : 他のプレイヤーへ所持金を送金します。

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `Economics.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/Economics.json`
3. データ: `carbon/data/Economics.json` に残高データ保存
4. リロード: `carbon.reload Economics`

### 設定の主な項目
- `StartingBalance`: 新規プレイヤーの初期残高
- `NegativeBalanceAllowed`: マイナス残高の許可

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **Economics** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。
3. コンソールから `eco.deposit` / `eco.withdraw` で直接残高操作が可能です。
