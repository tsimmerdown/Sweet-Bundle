import React from "react"
import styled from "styled-components"
import Container from "../components/Cont/Container"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import MainLayout from "../templates/MainLayout"
import background from "../assets/images/faq-header.png"

const FAQCont = styled(Container)`
  height: 80vh;
  padding: 80px 0 100px;
  display: flex;
  justify-content: center;
`

const Header = styled.div`
  background: #c4c4c4;
  padding-top: 80px;
  height: 350px;
  width: 100%;
  font-weight: 600;
  font-size: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  max-width: 780px;
`

const FAQ = ({ data }) => {
  return (
    <MainLayout>
      <Header style={{ backgroundImage: `url(${background})` }}>
        Frequently Asked Questions
      </Header>

      <FAQCont></FAQCont>
    </MainLayout>
  )
}

export default FAQ

export const query = graphql`
  {
    contentfulAboutPage {
      topBanner {
        gatsbyImageData
        title
      }
      ying {
        gatsbyImageData
        title
      }
      aboutText {
        aboutText
      }
    }
  }
`
