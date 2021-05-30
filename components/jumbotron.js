export default function Jumbotron({ title, subtitle, imageUrl }) {
  return (
    <div className="pv5 pv6-l ph3 bg-center cover progressive replace" data-href={imageUrl}>
      <img src="/img/global-preloader.jpg" className="preview" alt="jumbotron image" />
      <div className="mw7 center ph3">
        <div className="db mb3">
          <div className="mw7 relative bg-fix-primary mb3">
            <h1 className="pv1 px1 f2 f1-l b di lh-title mb3 white mw6 bg-primary">
              {title}
            </h1>
          </div>
          <div className="mw7 relative bg-fix-primary">
            { subtitle &&
              <p className="py1 px1 b f4 di lh-title mb3 white mw6 bg-primary">
                {subtitle}
              </p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}