
const PriceItem = ({plan, price, description, items }) => (
  <div className="ph2">
    <h3 className="b f5 grey-3 tc lh-title mb3">{plan}</h3>
    <p className="primary f1 b tc lh-title center">
      <span className="f4">starting at<br />$</span>{price}
    </p>
    <p className="b">{description}</p>
    <ul>
      {
        items.map(it => (
          <li key={it}>
            <p className="pb2 mb2 divider-grey">{it}</p>
          </li>
        ))
      }
    </ul>
  </div>
)

export default function PricingBlocksOnly({plans}) {
  return (
    <div className="bg-off-white pv4 ph3">
      <div className="mw7 center">
        <div className="flex-ns mhn2-ns mw7">
          {
            plans.map(p => (
              <div className="w-33-ns ph2" key={p.plan}>
                <PriceItem 
                  plan={p.plan}
                  price={p.price}
                  description={p.description}
                  items={p.items}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}