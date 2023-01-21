import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="small-phones:text-[14px]">
      <Head />
      <body className="font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
