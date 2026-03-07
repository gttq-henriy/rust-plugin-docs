# GameOverScreen プラグイン 使用方法

## 概要
プレイヤー死亡時に画面全体を覆うUI表示とサウンドエフェクトで死の演出（アニメーション）を追加するプラグインです。背景画像の上にオーバーレイ画像を重ねて拡大表示させるアニメーション機能があります。

## 設定項目
| 設定項目 | デフォルト値 | 説明 |
|---|---|---|
| `BackgroundImageUrl` | `https://i.imgur.com/RY3DrU6.jpeg` | 背景画像のURL |
| `OverlayImageUrl` | `https://i.imgur.com/RHw6pie.png` | ズーム表示するテキスト/ロゴ画像URL |
| `OverlayScaleFactor` | `1.2` | 最終的な拡大率 |
| `AnimationFPS` | `60` | UIアニメーションの更新頻度 |
| `SoundEnabled` | `true` | ミッション失敗サウンドの再生有無 |

## 主な仕様
- **動作条件**: NPCゾンビ以外の要因で死亡した際に自動的に演出が開始
- **表示時間**: フェードイン→表示維持→フェードアウトのサイクル
- **権限・コマンド**: 特定のパーミッションやコマンドは不要
- **依存プラグイン**: `ImageLibrary` が必須

---

## サーバー管理者向け（ファイル操作）

### プラグインの導入
1. `GameOverScreen.cs` を `carbon/plugins/` に配置します。
2. 設定ファイル: `carbon/config/GameOverScreen.json`
3. リロード: `carbon.reload GameOverScreen`

### カスタマイズ
- 設定ファイルの `BackgroundImageUrl` と `OverlayImageUrl` を変更することで、自由にデザインを変更できます。

---

## ゲーム内管理者向け（Carbon CPanel）

### CPanel へのアクセス
- `F1` コンソールで `cpanel` と入力、またはチャットで `/cpanel` を実行します。

### プラグインの管理
1. **「Plugins」** タブから **GameOverScreen** を選択。
2. **Reload** でリロード、**Config** で設定内容を確認・変更できます。
3. 本プラグインにはユーザー向け権限はないため、Permissionsの設定は不要です。
