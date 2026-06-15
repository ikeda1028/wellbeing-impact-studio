# Well-being Impact Studio

人的資本価値、探究度数、組織OS、well-being、事業可能性を診断し、AIシナリオとコンセプト画像を生成する静的WebアプリのMVPです。

個人モードでは1人の人的資本価値と実践判断を測定します。組織モードでは複数メンバーが同じ診断に回答し、組織の人的資本価値、回答者数、合意度、ばらつき、組織タイプを集計して評価します。

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
- `OPENAI_WEBSITE_MODEL`: 任意。ホームページからのAI暫定診断に使います。未設定時は `OPENAI_SCENARIO_MODEL` を使います
- `OPENAI_IMAGE_MODEL`: 任意。未設定時は `gpt-image-2`。`image2` と書いた場合は `gpt-image-2`、`image1` と書いた場合は `gpt-image-1` として扱います

VercelでこのリポジトリをImportし、Environment Variablesに上記を設定すると、`/api/website-assess` がホームページからの暫定診断に、`/api/scenario-evaluate` がAI評価に、`/api/image-generate` がAI画像生成に使われます。APIが使えない環境では、フロントエンドは自動でローカルのルールベース評価やCanvas画像生成に戻ります。
