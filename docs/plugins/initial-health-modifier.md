# InitialHealthModifier の使用方法（導入および設定手順）

## 1. プラグインのインストール
1. `Src` フォルダ内に作成された `InitialHealthModifier.cs` ファイルをコピーします。
2. 稼働中の Rust サーバーの **Carbon（またはOxide）プラグインディレクトリ**に配置します。
   - 例: `[サーバーのルートディレクトリ]/carbon/plugins/InitialHealthModifier.cs`
3. 配置後、自動的にプラグインがコンパイルされロードされます。（コンソールログで `Loaded plugin InitialHealthModifier v1.0.0` のようなメッセージが出れば成功です）

## 2. 設定ファイルの変更方法
プラグインが初めて起動すると、自動的にコンフィグファイルが生成されます。

1. **コンフィグディレクトリ** を開きます。
   - 例: `[サーバーのルートディレクトリ]/carbon/config/InitialHealthModifier.json`
2. テキストエディタ（メモ帳やVSCodeなど）で開くと、以下のような内容になっています。
   ```json
   {
     "InitialHealth": 200.0
   }
   ```
3. `InitialHealth` の数値（デフォルトは 200.0）を希望の初期体力値に変更して上書き保存します。
4. サーバーのコンソール（またはゲーム内の F1 コンソール）で、以下のリロードコマンドを入力して変更を反映します。
   ```
   carbon.reload InitialHealthModifier
   ```
   （※Oxide互換モードの場合は `o.reload InitialHealthModifier` です）

## 3. 確認
- ゲーム内でキーボードの `F1` を押してコンソールを開き `kill` と入力して死亡するか、通常の手段で死亡したあとにリスポーンします。
- リスポーン後、画面右下の HP バーの上限値および現在値が設定した値に変更されていることを確認します。
