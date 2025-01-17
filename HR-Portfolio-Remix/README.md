# README.md

# Welcome to HR Portfolio Remix!

このプロジェクトは、Remixを使用して構築されたHRポートフォリオアプリケーションです。以下は、開発とデプロイに関する情報です。

## 開発

開発サーバーを起動するには、次のコマンドを実行します：

```bash
npm run dev
```

## デプロイ

まず、アプリケーションを本番用にビルドします：

```bash
npm run build
```

次に、本番モードでアプリケーションを実行します：

```bash
npm start
```

デプロイ先のホストを選択する必要があります。

### DIY

Nodeアプリケーションのデプロイに慣れている場合、組み込みのRemixアプリサーバーは本番環境に対応しています。

`npm run build` の出力をデプロイしてください：

- `build/server`
- `build/client`

## スタイリング

このテンプレートには、シンプルなデフォルトのスタート体験のために、すでに[Tailwind CSS](https://tailwindcss.com/)が設定されています。お好みのCSSフレームワークを使用することもできます。詳細については、[ViteのCSSに関するドキュメント](https://vitejs.dev/guide/features.html#css)を参照してください。