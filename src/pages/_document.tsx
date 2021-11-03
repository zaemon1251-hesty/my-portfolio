import Document, { Html, Head, Main, NextScript } from "next/document";
import { LIGHT_IMAGE } from "../utils/constants";

type Props = {};

export default class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shurtcut icon" href={LIGHT_IMAGE} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}