# InitialHealthModifier 使用方法

## 概要
プレイヤーがリスポーンした際の初期体力（HP）上限を変更するプラグインです。デフォルトの100HPを任意の値（例: 200HP）に設定できます。

## 主な仕様
- リスポーン時に自動で体力上限と現在HPが設定値に変更されます。
- 権限やコマンドは不要で、導入するだけで動作します。

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `InitialHealthModifier.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/InitialHealthModifier.json`
   ```json
   {
     "InitialHealth": 200.0
   }
   ```
3. `InitialHealth` の数値を変更して保存後、リロードします。
   ```
   carbon.reload InitialHealthModifier
   ```

### 確認方法
- ゲーム内で `kill` コマンドで死亡→リスポーン後、HP上限が設定値になっていることを確認。

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **InitialHealthModifier** を選択。
2. **Reload** でリロード、**Config** で体力値を確認できます。
3. 本プラグインには権限設定が不要なため、Permissionsの操作は必要ありません。
