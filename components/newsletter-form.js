export default function NewsletterForm() {
  return (
    <form action="" className="flex-ns mb3">
      <fieldset className="flex-auto mb2 mb0-ns mr2-ns" name="newsletter" action="newsletter-subscribe">
        <input type="text" id="email" placeholder="Your email" className="w-100" />
        <label htmlFor="email">Your email</label>
      </fieldset>
      <button className="btn mb3 w-100 w-auto-ns mb0-ns raise" type="submit">Submit</button>
    </form>

  )
}