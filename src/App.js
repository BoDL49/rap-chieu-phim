import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefalutComponent from './components/DefalutComponent/DefalutComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

function App() {




  // useEffect(() => {
  //   fetchApi()
  // }, [])

  // console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)

  const fetchApi = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/getALL`)
    return res.data
  }

  const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })

  // console.log('query', query)

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