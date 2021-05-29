import Head from 'next/head'

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import FourUp from '../components/4-up'
import MainGallery from '../components/main-gallery'
import Testimonials from '../components/testimonials'
import Pricing from '../components/pricing'

import { getPageData } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function ProductsPage({page}) {
  return (
    <>
      <Layout>
        <Head>
          <title>Products | {CMS_NAME}</title>
        </Head>
        <Jumbotron 
          title={page.title}
          subtitle={page.subtitle}
          imageUrl={page.image}
        />
        <FourUp 
          heading={page.heading}
          description={page.description}
          blurbs={page.intro.blurbs}
        />
        <MainGallery 
          heading={page.main.heading}
          description={page.main.description}
          image1={page.main.image1}
          image2={page.main.image2}
          image3={page.main.image3}
        />
        <Testimonials 
          items={page.testimonials}
        />
        {/* Full-width image */}
        <img 
          src={page.full_image} 
          alt="full width image" className="db w-100" 
        />
        <Pricing 
          heading={page.pricing.heading}
          description={page.pricing.description}
          plans={page.pricing.plans}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = getPageData('products')
  return {
    props: { page },
  }
}