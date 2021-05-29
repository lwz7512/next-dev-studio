import Head from 'next/head'

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import PostBlock from '../components/post-block'
import { getAllPosts,  } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Blog({posts}) {

  return (
    <>
      <Layout>
        <Head>
          <title>Blog | {CMS_NAME}</title>
        </Head>
        <Jumbotron 
          title="Latest stories"
          subtitle=""
          imageUrl="/img/blog-index.jpg"
        />
        <div className="mw9 center">
          <ul className="flex-ns flex-wrap mhn1-ns pa5-m justify-center">
          {
            posts.map(p => (
              <div key={p.title} className="flex w-30-l w-50-m ph2-ns pv2-ns ">
                <PostBlock 
                  title={p.title}
                  description={p.description}
                  date={p.date}
                  slug={p.slug}
                />
              </div>
            ))
          }
          </ul>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: { posts },
  }
}
