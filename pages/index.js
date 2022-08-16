import Head from 'next/head'

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import ShortText from '../components/short-text'
import TwoUpButton from '../components/2-up-button'
import TwoUpNoButton from '../components/2-up-no-button'

import { getHomePageData, getPosts4Home } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ homeData, posts }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Home | {CMS_NAME}</title>
        </Head>
        <Jumbotron 
          title={homeData.title}
          subtitle={homeData.subtitle}
          imageUrl={homeData.image}
        />
        <ShortText 
          heading={homeData.blurb.heading}
          text={homeData.blurb.text}
        />
        <TwoUpNoButton 
          intro={homeData.intro}
          products={homeData.products1}
        />
        <TwoUpNoButton 
          intro=""
          products={homeData.products2}
        />
        <TwoUpButton 
          intro=""
          products={homeData.products3}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const homeData = getHomePageData()
  const posts = getPosts4Home()
  return {
    props: { homeData, posts },
  }
}
