import Head from 'next/head'

export default function(props) {
  return (
    <Head>
        <title>{props.title ? `${props.title} | ` : ""} Adam Isaak</title>
        <meta name="description" content={props.description} />
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="240x240" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  );
}