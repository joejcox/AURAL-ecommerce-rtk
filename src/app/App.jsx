import Layout from "core/Layout"
import screenshot from "assets/images/AURAL_HOME_UNAUTH_USER.png"
import { Route, Routes } from "react-router-dom"
import Home from "pages/public/Home"

const App = () => {
  return (
    <Layout>
      <img className="hidden mx-auto" src={screenshot} alt="Aural Mockup" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
