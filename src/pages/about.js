import React from "react"
import styled from "styled-components"
import Container from "../components/Cont/Container"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import MainLayout from "../templates/MainLayout"
import { Divider } from "@material-ui/core"
// import aboutBackground from "../assets/images/aboutBackground.png"
import { responsive } from "../assets/responsive"

const AboutCont = styled(Container)`
  height: 80vh;
  padding: 80px 100px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${responsive.medL}px) {
    flex-direction: column-reverse;
    height: auto;
  }
  @media only screen and (max-width: ${responsive.xsmall}px) {
    padding: 80px 24px 100px;
  }
`
const Text = styled.p`
  max-width: 780px;
  max-height: 640px;
  overflow: auto;
`
const ImageCont = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  @media only screen and (max-width: ${responsive.medL}px) {
    bottom: 0;
    height: 400px;
  }
  @media only screen and (max-width: ${responsive.tiny}px) {
    height: 200px;
    width: 300px;
  }
`

const Divide = styled(Divider)`
  && {
    margin: 0 20px;
    background: black;
  }
  @media only screen and (max-width: ${responsive.medL}px) {
    display: none;
  }
`

const Typography = styled.p`
  margin-bottom: ${props => (props.small ? "12px" : "20px")};
  font-size: ${props => (props.small ? "20px" : "80px")};
  font-weight: ${props => (props.small ? "400" : "600")};

  @media only screen and (max-width: ${responsive.medL}px) {
    font-size: ${props => (props.small ? "16px" : "60px")};
    font-weight: ${props => (props.small ? "400" : "600")};
  }

  @media only screen and (max-width: ${responsive.small}px) {
    font-size: ${props => (props.small ? "14px" : "48px")};
    font-weight: ${props => (props.small ? "400" : "600")};
  }

  @media only screen and (max-width: ${responsive.tiny}px) {
    font-size: ${props => (props.small ? "12px" : "40px")};
    font-weight: ${props => (props.small ? "400" : "600")};
    word-break: break-word;
  }
`

const YingBackground = styled.div`
  position: absolute;
  bottom: 160px;
  left: 0;
  z-index: 2;

  @media only screen and (max-width: ${responsive.medL}px) {
    bottom: -50px;
  }
`

const About = ({ data }) => {
  const banner = getImage(data.contentfulAboutPage.topBanner)
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
        <ImageCont>
          {/* <StaticImage
            src="../assets/images/aboutBackground.png"
            alt="rightDessert"
            width={500}
          /> */}
          <YingBackground>
            <StaticImage
              src="../assets/images/yingBackground.png"
              alt="background"
              quality={95}
              width={480}
              imgStyle={{
                width: "100%",
                height: "100%",
              }}
            />
          </YingBackground>
          <YingBackground>
            <StaticImage
              src="../assets/images/ying.png"
              quality={95}
              alt="ying"
              width={560}
              imgStyle={{
                width: "100%",
                height: "100%",
              }}
            />
          </YingBackground>
        </ImageCont>
        <Divide orientation="vertical" />
        <Text>
          <Typography>About me</Typography>
          <Typography small>
            {data.contentfulAboutPage.aboutText.aboutText}
          </Typography>
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
