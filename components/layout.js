// import Alert from '../components/alert'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
