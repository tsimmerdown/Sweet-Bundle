import React, { useState, useContext } from "react"
import styled from "styled-components"
import { GiShoppingCart } from "react-icons/gi"
import NavButton from "../components/NavButton/NavButton"

import logo from "../assets/images/logo-dark.svg"
import Container from "../components/Cont/Container"
import { Link } from "gatsby"
import { responsive } from "../assets/responsive"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { Drawer } from "@material-ui/core"
import { CartContext } from "../context/cartContext"
import { createSession } from "../api/index"
import { loadStripe } from "@stripe/stripe-js"

const Cont = styled(Container)`
  display: flex;
  position: fixed;
  height: 80px;
  align-items: center;
  background: #f2f2f0;
  z-index: 50;
`

const Logo = styled.img`
  height: 110px;
  flex: 1 0 auto;

  @media only screen and (max-width: ${responsive.tiny}px) {
    height: 5em;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
`
const DrawerLogo = styled.img`
  height: 5em;
  position: absolute;
  top: 0;
  left: 1.5em;
`

const NavButtonList = styled.div`
  display: flex;
  flex: 3 1 auto;
  justify-content: center;
  @media only screen and (max-width: ${responsive.tiny}px) {
    display: none;
  }
`

const Cart = styled(GiShoppingCart)`
  font-size: 30px;
  flex: 1 0 auto;

  @media only screen and (max-width: ${responsive.tiny}px) {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }
`
const BurgerCont = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translate(-100%, -50%);
  @media only screen and (min-width: ${responsive.tiny + 1}px) {
    display: none;
  }
`
const BurgerIcon = styled(GiHamburgerMenu)`
  font-size: 25px;
  &:hover {
    color: red;
  }
`

const Dropdown = styled(Drawer)`
  && {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
`
const DrawerCont = styled.div`
  // flex: 1 0 auto;
  // width: 50px;
  // @media only screen and (min-width: ${responsive.tiny}px) {
  //   display: none;
  // }
`

const Header = styled.div`
  position: relative;
  padding: 20px 0 0 20px;
  height: 56px;
`
const Close = styled(GrClose)`
  position: absolute;
  right: 0;
  transform: translate(-20px, 50%);
  &:hover {
    color: red;
  }
`
const CartNum = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: #40434a;
  position: absolute;
  right: -0.5em;
  top: -0.5em;
  color: white;
  text-align: center;
`

const navBarItems = [
  {
    name: "About",
    slug: "about",
  },
  {
    name: "Menu",
    slug: "menu",
  },
  {
    name: "FAQ",
    slug: "faq",
  },
]

const stripePromise = loadStripe(
  "pk_test_51IsX2dFEzvTEaCftCEpTIpc6lJPcgYlCNh10brd3ptCS0PWaxxSv7WRUB9dFAYmqF1nUn1TNgInDIopuMAa9HIV600Q0tbV5ME"
)

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const { cart } = useContext(CartContext)

  const handleCreateCheckout = async event => {
    if (cart.length > 0) {
      const stripe = await stripePromise

      const response = await createSession(cart)

      const session = await response.data

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      })

      if (result.error) {
        console.log(result.error.message)
      }
    }
  }

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <Cont>
      <DrawerCont>
        <BurgerCont>
          <BurgerIcon onClick={handleDrawerOpen} />
        </BurgerCont>
        <Dropdown anchor="top" open={openDrawer}>
          <Header>
            <Link to="/">
              <DrawerLogo src={logo} alt="logo" />
            </Link>
            <Close onClick={handleDrawerOpen} />
          </Header>
          <div style={{ padding: "21px 0 56px 0", textAlign: "center" }}>
            {navBarItems.map(item => {
              return (
                <NavButton name={item.name} key={item.slug} slug={item.slug} />
              )
            })}
          </div>
        </Dropdown>
      </DrawerCont>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <NavButtonList>
        {navBarItems.map(item => {
          return <NavButton name={item.name} key={item.slug} slug={item.slug} />
        })}
      </NavButtonList>
      <div
        style={{
          position: "relative",
        }}
      >
        {cart.length > 0 && <CartNum>{cart.length}</CartNum>}
        <Cart onClick={handleCreateCheckout} />
      </div>
    </Cont>
  )
}

export default Navbar
