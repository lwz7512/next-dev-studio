export default function MainGallery({ heading, description, image1, image2, image3 }) {
  return (
    <>
      <div className="mw7 center">
        <div className="mw6 ph3 mb3">
          <h3 className="f3 b lh-title mb2">{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="mw7 center ph3 pv4">
        <div className="flex flex-wrap mhn1">
          <div className="w-100 w-50-ns ph1-ns">
            <img src={image1.image} alt={image1.alt} />
          </div>
          <div className="w-100 w-50-ns ph1-ns">
            <img src={image2.image} alt={image2.alt} />
          </div>
          <div className="w-100 ph1-ns">
            <img src={image3.image} alt={image3.alt} />
          </div>
        </div>
      </div>
    </>
  )
}