export default function FourUp({ heading, description, blurbs }) {
  return (
    <div className="bg-off-white pv4">
      <div className="ph3 mw7 center">
        <h2 className="f2 b lh-title mb2">{heading}</h2>
        <p className="mb4 mw6">{description}</p>
        <div className="flex-ns flex-wrap mhn2-ns mb3">
          {
            blurbs.map(b => (
              <div className="ph2-ns w-50-ns mb4" key={b.text}>
                <img src={b.image} alt="" className="center db mb3 w-240" />
                <p>{b.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}