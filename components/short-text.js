export default function ShortText({ heading, text }) {
  return (
    <div className="bg-grey-1 pv4">
      <div className="flex-l mhn1-l ph3 center mw7">
        <h2 className="f2 b lh-title mb2 w-40-l">{heading}</h2>
        <p className="w-60-l mb0">{text}</p>
      </div>
    </div>
  )
}