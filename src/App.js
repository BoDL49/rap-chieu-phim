import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefalutComponent from './components/DefalutComponent/DefalutComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'



function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.IssShowHeader ? DefalutComponent : Fragment
            const Footer = route.IssShowFooter ? FooterComponent : Fragment
            return (
              <Route path={route.path} element={
                <div>
                  <Layout>
                    <Page />
                  </Layout>
                  <Footer />
                </div>

              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App