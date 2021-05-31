import Nav from '../components/nav'
import Footer from '../components/footer'
import Meta from '../components/meta'
import metaData from '../data/meta.json'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Nav logo={metaData.logo}/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
