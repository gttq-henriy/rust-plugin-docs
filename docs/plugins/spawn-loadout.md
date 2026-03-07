# SpawnLoadout 使用方法

## 概要
プレイヤーがリスポーンした際に、設定ファイルで定義したアイテムを自動的にインベントリへ付与するプラグインです。

## 主な機能
- リスポーン時にホットバー・メインインベントリ・装備スロットの3箇所に指定アイテムを自動付与
- カスタム表示名やスキンIDの設定が可能
- 権限やコマンドは不要で、導入するだけで動作

---



## 一般プレイヤー向けの使用方法
このプラグインはパッシブ（自動適用）に動作します。**プレイヤーが直接入力するコマンドは不要**です。サーバー内のイベントや特定の行動（NPC討伐、スポーン、死亡など）に対して自動的に機能が適用されます。

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `SpawnLoadout.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/SpawnLoadout.json`
3. リロード: `carbon.reload SpawnLoadout`

### 設定ファイルの編集
```json
{
  "Items": [
    {
      "Shortname": "stone.pickaxe",
      "DisplayName": "",
      "SkinID": 0,
      "Amount": 1,
      "Container (main/belt/wear)": "belt"
    }
  ]
}
```

| 項目 | 説明 | 例 |
|---|---|---|
| `Shortname` | アイテムの内部名 | `"stone.pickaxe"`, `"bandage"` |
| `DisplayName` | カスタム表示名（空欄でデフォルト） | `"初心者キット"` |
| `SkinID` | スキンID（0でデフォルト） | `0` |
| `Amount` | 付与する個数 | `1`, `5` |
| `Container` | 配置先 | `"belt"` / `"main"` / `"wear"` |

### アイテムShortname一覧
- ゲーム内コンソール（F1）で `find item` と入力
- 外部サイト: [Rust Item List](https://www.corrosionhour.com/rust-item-list/) 等

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **SpawnLoadout** を選択。
2. **Reload** でリロード、**Config** で付与アイテムの設定を確認できます。
3. 本プラグインには権限設定が不要なため、Permissionsの操作は必要ありません。
