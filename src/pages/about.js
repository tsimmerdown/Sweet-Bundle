import React from "react"
import styled from "styled-components"
import Container from "../components/Cont/Container"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MainLayout from "../templates/MainLayout"
import { Divider } from "@material-ui/core"

const AboutCont = styled(Container)`
  height: 80vh;
  padding: 80px 0 100px;
  display: flex;
  justify-content: center;
`
const Text = styled.p`
  max-width: 780px;
`

const About = ({ data }) => {
  const banner = getImage(data.contentfulAboutPage.topBanner)
  const ying = getImage(data.contentfulAboutPage.ying)
  return (
    <MainLayout>
      <GatsbyImage
        image={banner}
        alt={data.contentfulAboutPage.topBanner.title}
        style={{
          height: "616px",
        }}
      />
      <AboutCont>
        <GatsbyImage
          image={ying}
          alt={data.contentfulAboutPage.ying.title}
          // style={{
          //   height: "630px",
          // }}
        />
        <Divider
          orientation="vertical"
          style={{ margin: "0 20px", background: "black" }}
        />
        <Text>
          <p
            style={{
              fontSize: "80px",
              fontWeight: "600",
              marginBottom: "40px",
            }}
          >
            About me
          </p>
          {data.contentfulAboutPage.aboutText.aboutText}
        </Text>
      </AboutCont>
    </MainLayout>
  )
}

export default About

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
