import Head from 'next/head'

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import ShortText from '../components/short-text'
import TwoUp from '../components/2-up'
import TextAndImage from '../components/text-and-image'
import Blog4Home from '../components/blog-4-home'

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
        <TwoUp 
          intro={homeData.intro}
          products={homeData.products}
        />
        <TextAndImage 
          heading={homeData.values.heading}
          text={homeData.values.text}
          buttonText={homeData.values.buttonText}
          buttonLink={homeData.values.buttonLink}
          image={homeData.values.image}
        />
        <Blog4Home 
          posts={posts}
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
