export default function MediaBlock({imageUrl, heading, text, reverse}) {
  return (
    <div className="flex-m mhn3-m mb4" >
      <div className={`ph3-m w-50-m ${reverse && 'order-last-m'}`}>
        <img src={imageUrl} alt="value image" className="db mb2" />
      </div>
      <div className="ph3-m w-50-m">
        <h3 className="f3 b lh-title mb1">{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}