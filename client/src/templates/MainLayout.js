import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { GlobalStyle } from "../components/globalStyles/globalStyles"

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default MainLayout
