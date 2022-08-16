import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL, HOME_OG_URL, HOME_OG_TITLE, HOME_OG_DESC } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={HOME_OG_DESC} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={HOME_OG_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={HOME_OG_TITLE} />
      <meta property="og:description" content={HOME_OG_DESC} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={HOME_OG_URL} />
      <meta name="twitter:title" content={HOME_OG_TITLE} />
      <meta name="twitter:description" content={HOME_OG_DESC} />
      <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />
      
    </Head>
  )
}
