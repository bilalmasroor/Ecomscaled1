import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Amazon from '../pages/Amazon'
import Walmart from '../pages/Walmart'
import TikTok from '../pages/TikTok'
import Shopify from '../pages/Shopify'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Marketing from '../pages/Marketing'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/amazon' element={<Amazon />} />
        <Route path='/walmart' element={<Walmart />} />
        <Route path='/tiktok' element={<TikTok />} />
        <Route path='/shopify' element={<Shopify />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Router