import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefalutComponent from './components/DefalutComponent/DefalutComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { isJsonString } from './ultils'
import { jwtDecode } from "jwt-decode";
import * as UserService from './services/UserService';
import { useDispatch } from 'react-redux'
import { updateUser, updateKhachHang } from './redux/slides/userSlide'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailUser(decoded?.id, storageData);
    }
  }, []);

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token');
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };


  const handleGetDetailUser = async (id, token) => {
    try {
      const res = await UserService.getDetailUser(id, token);
      dispatch(updateUser({ ...res?.data, access_token: token }));
      const resKh = await UserService.getDetailKhachHang(res?.data.Matk);
      dispatch(updateKhachHang(resKh?.data));
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  UserService.axiosJTW.interceptors.request.use(async (config) => {
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    if (decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserService.refreshToken()
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  })

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