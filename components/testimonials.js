export default function Testimonials({items}) {
  return (
    <div className="pb4">
      {
        items.map(it => (
          <div className="center mb3 ph3" key={it.author}>
            <blockquote className="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
              <p className="f4 mb0">“{it.quote}”</p>
              <cite className="tr db grey-3">{it.author}</cite>
            </blockquote>
          </div>
        ))
      }
    </div>
  )
}