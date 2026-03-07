# TechTree プラグイン 使用方法

## 概要
Rustの標準テックツリーを完全にカスタマイズし、独自のアイテムアンロック経路や価格設定を可能にするプラグインです。直感的なゲーム内UIを備え、管理者はゲーム内で直接ツリーを編集できます。

## パーミッション（権限）
| 権限名 | 説明 |
|---|---|
| `techtree.use` | カスタムテックツリーを利用するための基本権限 |
| `techtree.unlock.free` | 通貨を消費せずに無料でアンロック可能 |
| `techtree.unlock.instant` | アンロック時間をゼロにし即座に完了 |
| `techtree.unlock.path` | ツリーの前提ルートを無視して直接アンロック可能 |

## プレイヤーの基本操作
1. ワークベンチ（レベル1～3）に近づく
2. リロードキー `R` またはUIメニューから「Open tech tree」を実行
3. 専用UIが開き、アイテムのアンロックが可能

## 管理者向け：UI編集モード
テックツリーUIを開くと **「Admin」** 編集メニューが表示されます:
- ノード（アイテム）の追加・削除
- 価格（Price）の変更
- 接続（パス）の編集
- カスタム画像・名前の多言語設定
- バニラからの除外設定
- グリッドの拡張

## コンソールコマンド（管理者用）
| コマンド | 説明 |
|---|---|
| `techtree.cmd.open` | テックツリーUIを強制的に開く |
| `techtree.cmd.deleteallnodes` | 現在のツリーの全ノードを削除 |
| `techtree.cmd.resetvanilla` | ツリーをバニラ状態にリセット |

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `TechTree.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/TechTree.json`
3. リロード: `carbon.reload TechTree`

### 権限の付与
```
o.grant user <SteamID> techtree.use
o.grant group default techtree.use
```

### 連携プラグイン
- `Economics`: スクラップ以外の経済システムでツリー進行可能
- `CraftMenu`: テックツリーを開くための統合ボタンをUIに表示

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **TechTree** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。

### 権限の管理
1. **「Permissions」** タブを開きます。
2. `techtree.` で始まる権限一覧から、プレイヤーやグループへの付与・削除が可能です。

### ツリーの編集
- 管理者権限があれば、ゲーム内でワークベンチを開きUI上の「Admin」ボタンから直接ツリーを編集できます。
