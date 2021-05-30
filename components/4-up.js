export default function FourUp({ heading, description, blurbs }) {
  return (
    <div className="bg-off-white pv4">
      <div className="ph3 mw7 center">
        <h2 className="f2 b lh-title mb2">{heading}</h2>
        <p className="mb4 mw6">{description}</p>
        <div className="flex-ns flex-wrap mhn2-ns mb3">
          {
            blurbs.map(p => (
              <div className="ph2-ns w-50-ns mb4" key={p.text}>
                <div className="flex bg-grey-1">
                  <img src={p.image} alt="product image" className="center db mv3 w-240" />
                </div>
                <p>{p.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}