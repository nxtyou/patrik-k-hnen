import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="mini-screen:text-[14px] scroll-smooth small-height:text-[12px]">
      <Head />
      <body className="overflow-x-hidden bg-black font-inter text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
