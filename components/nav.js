import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative">
      <a href="/" className="pa3 db mr4 h-100 w3 flex-none">
      <img src="/img/logo.svg" alt="Kaldi logo" className="br0 db mb0 w-100"/>
      </a>
      <ul className="flex b grey-3">
        <li>
          <Link href="/products">
            <a className="pa3 no-underline db">Products</a>
          </Link>
        </li>
        <li>
          <Link href="/values">
            <a className="pa3 no-underline db">Values</a>
          </Link>
        </li>
        <li>
          <Link href="/post" >
            <a className="pa3 no-underline db">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="pa3 no-underline db">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>

  )
}