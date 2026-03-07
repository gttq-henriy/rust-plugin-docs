# SpawnLoadout の使用方法（導入および設定手順）

## 1. プラグインのインストール
1. `Src` フォルダ内の `SpawnLoadout.cs` をコピーします。
2. Rustサーバーの **Carbonプラグインディレクトリ** に配置します。
   - 例: `[サーバーのルートディレクトリ]/carbon/plugins/SpawnLoadout.cs`
3. 配置後、自動的にコンパイルされてロードされます。
   - コンソールログで `Spawn Loadout plugin loaded.` と表示されれば成功です。

## 2. 設定ファイルの変更方法
プラグインが初回ロードされると、自動的にコンフィグファイルが生成されます。

1. **コンフィグファイル** を開きます。
   - 例: `[サーバーのルートディレクトリ]/carbon/config/SpawnLoadout.json`
2. テキストエディタで開くと、以下のような内容になっています。
   ```json
   {
     "Items": [
       {
         "Shortname": "stone.pickaxe",
         "DisplayName": "",
         "SkinID": 0,
         "Amount": 1,
         "Container (main/belt/wear)": "belt"
       },
       {
         "Shortname": "stonehatchet",
         "DisplayName": "",
         "SkinID": 0,
         "Amount": 1,
         "Container (main/belt/wear)": "belt"
       },
       {
         "Shortname": "torch",
         "DisplayName": "",
         "SkinID": 0,
         "Amount": 1,
         "Container (main/belt/wear)": "belt"
       }
     ]
   }
   ```

### 設定項目の説明
| 項目 | 説明 | 例 |
|---|---|---|
| `Shortname` | Rustのアイテム内部名 | `"stone.pickaxe"`, `"bandage"`, `"hoodie"` |
| `DisplayName` | カスタム表示名（空欄ならデフォルト名を使用） | `"初心者キット"` |
| `SkinID` | スキンID（0ならデフォルトの見た目） | `0` |
| `Amount` | 付与する個数 | `1`, `5`, `10` |
| `Container` | 配置先（`belt` = ホットバー、`main` = メインインベントリ、`wear` = 装備スロット） | `"belt"` |

### アイテムの追加例
衣服を追加する場合:
```json
{
  "Shortname": "burlap.shirt",
  "DisplayName": "",
  "SkinID": 0,
  "Amount": 1,
  "Container (main/belt/wear)": "wear"
}
```

## 3. リロードとテスト
1. 設定ファイルを保存後、サーバーのコンソールでリロードコマンドを実行します。
   ```
   carbon.reload SpawnLoadout
   ```
2. ゲーム内で `F1` → `kill` で死亡し、リスポーンします。
3. リスポーン後、設定したアイテムがインベントリに入っていることを確認してください。

## 4. アイテムのShortname一覧の確認方法
Rustの全アイテムショートネーム一覧は以下で確認できます。
- ゲーム内コンソール（F1）で `find item` と入力 → リストが出力されます。
- 外部サイト: [Rust Item List](https://www.corrosionhour.com/rust-item-list/) 等
