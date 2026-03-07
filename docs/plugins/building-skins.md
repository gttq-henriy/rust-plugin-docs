# BuildingSkins プラグイン 使用方法

## 概要
建築物にカスタムスキンを適用できるプラグインです。壁・床・階段・屋根など各建築パーツに対して、ワークショップスキンを適用できます。

## 主な機能
- 建築パーツへのスキン適用
- スキンのプレビューと選択UI
- 権限ベースのスキンアクセス制御

## 連携プラグイン
- **ImageLibrary**: スキンアイコンの表示に必須

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `BuildingSkins.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/BuildingSkins.json`
3. リロード: `carbon.reload BuildingSkins`

> **注意**: ImageLibrary が必須です。未導入の場合、プラグインは無効化されます。

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **BuildingSkins** を選択。
2. **Reload** でリロード、**Config** で設定を確認できます。
