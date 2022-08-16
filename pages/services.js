import Head from 'next/head'

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import Pricing from '../components/pricing'
import PricingBlocksOnly from '../components/pricing-block-only'

import { getPageData } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function ProductsPage({page}) {
  return (
    <>
      <Layout>
        <Head>
          <title>Services | {CMS_NAME}</title>
        </Head>
        <Jumbotron 
          title={page.title}
          subtitle={page.subtitle}
          imageUrl={page.image}
        />
        <Pricing 
          heading={page.pricing.heading}
          description={page.pricing.description}
          plans={page.pricing.plans}
        />
        <PricingBlocksOnly 
          plans={page.pricing2.plans}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = getPageData('services')
  return {
    props: { page },
  }
}