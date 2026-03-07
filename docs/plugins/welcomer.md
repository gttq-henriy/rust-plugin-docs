# Welcomer プラグイン 使用方法

## 概要
プレイヤーの入退出時にチャットメッセージを表示するプラグインです。ウェルカムメッセージや離脱メッセージをカスタマイズ可能です。

## 主な機能
- 入室時のウェルカムメッセージ
- 退出時のメッセージ
- メッセージのカスタマイズ（色、プレフィックス等）
- 新規プレイヤーと再訪プレイヤーの区別

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `Welcomer.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/Welcomer.json`
3. リロード: `carbon.reload Welcomer`

### 設定の主な項目
- `JoinMessage`: 入室メッセージテンプレート
- `LeaveMessage`: 退出メッセージテンプレート
- `ShowJoinMessage` / `ShowLeaveMessage`: 表示の有効/無効

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **Welcomer** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。
