import Head from 'next/head'

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import FourPerson from '../components/4-psn'
import { getPageData, } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function ValuesPage({page}) {

  return (
    <>
      <Layout>
        <Head>
          <title>Team | {CMS_NAME}</title>
        </Head>
        <Jumbotron 
          title={page.title}
          subtitle=""
          imageUrl={page.image}
        />
        <FourPerson 
          heading={page.members.heading}
          description={page.members.description}
          blurbs={page.members.blurbs}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = getPageData('team')

  return {
    props: { page },
  }
}