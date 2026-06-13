# Well-being Impact Studio

人的資本価値、探究度数、組織OS、well-being、事業可能性を診断し、AIシナリオとコンセプト画像を生成する静的WebアプリのMVPです。

## 公開方法

GitHub Pagesで公開する場合は、このリポジトリをPublicにして、Settings > Pages から以下を選択します。

- Source: Deploy from a branch
- Branch: main
- Folder: /root

公開URLは通常 `https://<GitHubユーザー名>.github.io/<リポジトリ名>/` になります。

## ファイル

- `index.html`: アプリ本体
- `styles.css`: UIスタイル
- `app.js`: 診断、AIシナリオ、画像生成ロジック

## AI APIを使う場合

GitHub PagesではAPIキーを安全に置けないため、Vercelなどのサーバーレス環境で公開します。

必要な環境変数:

- `OPENAI_WBS_KEY`: OpenAI APIキー
- `OPENAI_API_KEY`: 予備名。`OPENAI_WBS_KEY` が未設定の場合だけ使われます
- `OPENAI_SCENARIO_MODEL`: 任意。未設定時は `gpt-5.5`

VercelでこのリポジトリをImportし、Environment Variablesに上記を設定すると、`/api/scenario-evaluate` がAI評価に使われます。APIが使えない環境では、フロントエンドは自動でローカルのルールベース評価に戻ります。
