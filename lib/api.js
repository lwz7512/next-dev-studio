import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const contentDirectory = join(process.cwd(), 'content')
const postsDirectory = join(process.cwd(), 'content/post')

export function getHomePageData() {
  const indexMD = join(contentDirectory, '_index.md')
  const fileContents = fs.readFileSync(indexMD, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export function getPosts4Home() {
  return getAllPosts().slice(0, 3)
}

export function getPageData(pageName, withContent = false) {
  const indexMD = join(contentDirectory, pageName, '_index.md')
  const fileContents = fs.readFileSync(indexMD, 'utf8')
  const { data, content } = matter(fileContents)

  if (withContent) return { data, content}

  return data
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {...data, content, slug: realSlug}
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
