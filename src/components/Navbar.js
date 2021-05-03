import React from "react"
import styled from "styled-components"
import { GiShoppingCart } from "react-icons/gi"
import NavButton from "../components/NavButton/NavButton"

import logo from "../assets/images/logo-dark.svg"
import Container from "../components/Cont/Container"

const Cont = styled(Container)`
  display: flex;
  position: fixed;
  height: 80px;
  align-items: center;
  background: #f2f2f0;
  z-index: 50;
`

const Logo = styled.img`
  flex: 1 0 auto;
  height: 45px;
`

const NavButtonList = styled.div`
  display: flex;
  flex: 3 1 auto;
  justify-content: center;
`

const Cart = styled(GiShoppingCart)`
  font-size: 30px;
  flex: 1 0 auto;
`

const Navbar = () => {
  return (
    <Cont>
      <Logo src={logo} alt="logo" />
      <NavButtonList>
        {["About", "Menu", "Order", "FAQ"].map(s => {
          return <NavButton name={s} key={s} />
        })}
      </NavButtonList>
      <Cart />
    </Cont>
  )
}

export default Navbar
