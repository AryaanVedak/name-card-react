import Photo from './components/Photo'
import Name from './components/Name'
import Buttons from './components/Buttons'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import './App-style.css'

function App() {
  return (
    <div className = "container">
      <Photo />
      <Name />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
