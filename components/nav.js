import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const router = useRouter()
  const slug = router.pathname.substr(1)
  const navStyle = "overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative"
  return (
    <nav 
      className={`${navStyle} on-${slug}`}>
      <a href="/" className="pa3 db mr4 h-100 w3 flex-none">
      <img src="/img/logo.svg" alt="Kaldi logo" className="br0 db mb0 w-100"/>
      </a>
      <ul className="flex b grey-3">
        <li class="products">
          <Link href="/products">
            <a className="pa3 no-underline db">Products</a>
          </Link>
        </li>
        <li class="values">
          <Link href="/values">
            <a className="pa3 no-underline db">Values</a>
          </Link>
        </li>
        <li class="post">
          <Link href="/post" >
            <a className="pa3 no-underline db">Blog</a>
          </Link>
        </li>
        <li class="contact">
          <Link href="/contact">
            <a className="pa3 no-underline db">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>

  )
}