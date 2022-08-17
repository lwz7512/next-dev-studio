import Link from 'next/link'

export default function TwoUpButton({ intro, products }) {
  if(intro.text != null && intro.text != "") {
    return (
      <div className="bg-off-white pv3">
        <div className="ph3 mw7 center">
          <h2 className="f2 b lh-title mb2">{intro.heading}</h2>
          <p className="mb4 mw6">{intro.text}</p>
          <div className="flex-ns mhn2-ns mb3">
            {
              products.map(p => (
                <div key={p.text} className="ph2-ns w-50-ns">
                  <p className="f3 b">{p.heading}</p>
                  <p>{p.text}</p>
                </div>
              ))
            }
          </div>
          <div className="tc">
            <Link href="/services" >
              <a className="btn raise">See all services</a>
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="bg-off-white pv3">
        <div className="ph3 mw7 center">
          <h2 className="f2 b lh-title mb2">{intro.heading}</h2>
          <div className="flex-ns mhn2-ns mb3">
            {
              products.map(p => (
                <div key={p.text} className="ph2-ns w-50-ns">
                  <p className="f3 b">{p.heading}</p>
                  <p>{p.text}</p>
                </div>
              ))
            }
          </div>
          <div className="tc">
            <Link href="/services" >
              <a className="btn raise">See all services</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}