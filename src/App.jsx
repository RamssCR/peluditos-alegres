import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="main-container">
      <Header />
      <section className="main-content">
        <Banner />
        <About />
        <Services />
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

export default App
