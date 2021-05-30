import Link from 'next/link'

export default function TwoUp({ intro, products }) {
  return (
    <div className="bg-off-white pv4">
      <div className="ph3 mw7 center">
        <h2 className="f2 b lh-title mb2">{intro.heading}</h2>
        <p className="mb4 mw6">{intro.text}</p>
        <div className="flex-ns mhn2-ns mb3">
          {
            products.map(p => (
              <div key={p.text} className="ph2-ns w-50-ns">
                <div className="flex bg-grey-1">
                  <img src={p.image} alt="product image" className="center db mv3 w-240" />
                </div>
                <p>{p.text}</p>
              </div>
            ))
          }
        </div>
        <div className="tc">
          <Link href="/products" >
            <a className="btn raise">See all products</a>
          </Link>
        </div>
      </div>
    </div>
  )
}