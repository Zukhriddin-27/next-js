import React from 'react'
import { Header } from '.'
import FeaturedPosts from '../sections/FeaturedPosts'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <FeaturedPosts />
      {children}
      <Footer />
    </>
  )
}

export default Layout
