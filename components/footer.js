// import Link from 'next/link'
import NewsletterForm from './newsletter-form'
import SocialIcon from './social-icon'

export default function Footer() {
  return (
    <footer className="bg-black ph3 pv4 white">
      <div className="mw7 center pt3">
        <div className="measure-narrow center mb4">
          <img className="db w4 center mb4 br0" src="/img/logo.svg" alt="Kaldi logo" />
        </div>
        <div className="flex-ns justify-between">
          <div>
            <h3 className="f4 b lh-title mb1 primary">Iron Detailing</h3>
            <ul className="mb3">
              <li><a href="/" className="link">Home</a></li>
              <li><a href="/services" className="link">Our Services</a></li>
              <li><a href="/team" className="link">Our Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="f4 b lh-title mb1 primary">Serving Torrance and South Bay</h3>
            <ul className="mb3">
              <li><a href="tel:3239447238" className="link">Call or Text to Book<br />(323) 944-7238</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://squareup.com/appointments/book/afwc68r654y6i1/L8VCJCD01JR06/services" className="link">Book Online</a></li>
            </ul>
          </div>
          <div>
            <h3 className="f4 b lh-title mb2 primary">Social media</h3>
            <ul className="mhn2">
              {/* <SocialIcon link="#" iconPath="/img/icons-facebook.svg" /> */}
              <SocialIcon link="https://www.instagram.com/irondetails/" iconPath="/img/icons-instagram.svg" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
