import Head from 'next/head'

import Layout from '../components/layout'
import ContactForm from '../components/contact-form'
import { getPageData } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function ContacePage({page}) {

  return (
    <>
      <Layout>
        <Head>
          <title>Contact | {CMS_NAME}</title>
        </Head>
        <div className="ph3 bg-off-white">
          <div className="center mw6 pv3">
            <img src={page.data.logo} alt="" className="db w5 center pv4" />
            <div dangerouslySetInnerHTML={{ __html: page.content }} /> 
            <div className="flex-ns mv4">
            {
              page.data.contact_entries.map(c => (
                <div key={c.heading}>
                  <h4 className="f4 b lh-title mb2 primary">
                    {c.heading}
                  </h4>
                  <p>{c.text}</p>
                </div>
              ))
            }
            </div>
            <ContactForm />
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = getPageData('contact', true)
  return {
    props: { page },
  }
}
