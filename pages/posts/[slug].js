import Head from 'next/head'
import Layout from '../../components/layout'
import DateFormatter from '../../components/date-formatter'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
  
  return (
    <Layout >
      <Head>
        <title>{post.title} | {CMS_NAME}</title>
      </Head>
      <article className="mw6 center ph3 pv4">
        <h1 class="f2 lh-title b mb3">{post.title}</h1>
        <div class="flex justify-between grey-3">
          <p>
            <DateFormatter
              dateString={post.date}
            />
          </p>
          {/* <p>Read in ? minutes</p> */}
        </div>
        <div class="cms mw6">
          <p>{post.description}</p>
          {post.image &&
            <img src={post.image} alt={post.title} />
          }
          <div dangerouslySetInnerHTML={{ __html: post.content }}/>
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
