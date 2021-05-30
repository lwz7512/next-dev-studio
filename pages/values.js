import Head from 'next/head'

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import MediaBlock from '../components/media-block'
import { getPageData, } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function ValuesPage({page}) {

  return (
    <>
      <Layout>
        <Head>
          <title>Values | {CMS_NAME}</title>
        </Head>
        <Jumbotron 
          title={page.title}
          subtitle={page.subtitle}
          imageUrl={page.image}
        />
        <div className="mw7 center ph3 pt4">
          {
            page.values.map((v, i) => (
              <MediaBlock 
                key={v.heading}
                heading={v.heading}
                text={v.text}
                imageUrl={v.imageUrl}
                reverse={i%2 == 0}
              />
            ))
          }
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = getPageData('values')
  return {
    props: { page },
  }
}