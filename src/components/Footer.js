import React from "react"
import styled from "styled-components"
import { Button, InputBase, Typography, Divider } from "@material-ui/core"
import Container from "./Cont/Container"
import { Link } from "gatsby"

import logo from "../assets/images/logo-light.svg"
import { responsive } from "../assets/responsive"

//import { useMediaQuery } from "react-responsive"

const FooterCont = styled(Container)`
  color: white;
  width: 100%;
  background: #40434a;
  height: 400px;
  .emailCont {
    display: flex;
    align-items: center;
    margin: auto;
    width: 80vw;
    height: 25%;
    font-size: 14px;
    border-bottom: 1px solid #ffffff;
    padding: 5vh 0;
  }

  .textCont {
    color: white;
    display: flex;
    align-content: center;
    flex-grow: 1;
  }

  @media only screen and (max-width: ${responsive.medS}px) {
    padding: 10px 0;
    height: auto;
    .emailCont {
      flex-direction: column;
    }
    .textCont {
      width: 100%;
      margin: 20px 0;
    }
  }
`

const BottomCont = styled.div`
  width: 80vw;
  margin: auto;
  display: flex;

  .icon {
    flex: 2 1 auto;
    padding: 3vh 0;
  }
  .pages {
    flex-grow: 1;
    margin: 0 1vw;
  }
  .contactUs {
    flex-grow: 1;
  }

  @media only screen and (max-width: ${responsive.medS}px) {
    padding: 3rem 0 1rem 0;
  }

  @media only screen and (max-width: ${responsive.xsmall}px) {
    flex-direction: column;
    .icon {
      margin: auto;
      padding: 0.5rem 0;
    }
  }
`

const Input = styled(InputBase)`
  && {
    padding: 5px;
    border-radius: 5px 0 0 5px;
  }
`

const StyledButton = styled(Button)`
  && {
    border-radius: 0 5px 5px 0;
    background-color: #f17c98;
    color: white;
    :hover {
      color: black;
    }
  }
`

const Footer = () => {
  //const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile })

  return (
    <FooterCont>
      <div className="emailCont">
        <Typography style={{ flex: "1 1 auto" }}>
          Be the first to hear about news, packages and offers!
        </Typography>
        <div className="textCont">
          <Input
            autoComplete="off"
            id="input"
            placeholder="Email Address..."
            style={{ flexGrow: 1, fontSize: "14px", background: "white" }}
          />
          <StyledButton variant="contained">Sign up</StyledButton>
        </div>
      </div>
      <BottomCont>
        <div className="icon">
          <img src={logo} alt="Logo" style={{ height: "20vh" }} />
        </div>

        <div className="pages">
          <Typography variant="h5" style={{ padding: "2vh 0" }}>
            Pages
          </Typography>
          <Divider
            orientation="horizontal"
            style={{ marginBottom: "2vh", background: "#FFFFFF" }}
          />
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="subtitle1" style={{ padding: "2px" }}>
              About
            </Typography>
          </Link>
          <Link to="/menu" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="subtitle1" style={{ padding: "2px" }}>
              Menu
            </Typography>
          </Link>
          <Link to="/order" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="subtitle1" style={{ padding: "2px" }}>
              Order
            </Typography>
          </Link>
          <Link to="/faq" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="subtitle1" style={{ padding: "2px" }}>
              FAQ
            </Typography>
          </Link>
        </div>
        <div className="contactUs">
          <Typography variant="h5" style={{ padding: "2vh 0" }}>
            Contact Us
          </Typography>
          <Divider
            orientation="horizontal"
            style={{ marginBottom: "2vh", background: "#FFFFFF" }}
          />
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            <strong>Email: </strong>sweetbundle.ying@gmail.com
          </Typography>
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            <strong>Telephone: </strong>(123) 456 7890
          </Typography>
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            Stay informed through
            <br></br> Facebook, Instagram, and Twitter
          </Typography>
        </div>
      </BottomCont>
    </FooterCont>
  )
}

export default Footer
