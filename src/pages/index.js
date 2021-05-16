import React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import MainLayout from "../templates/MainLayout"
import Container from "../components/Cont/Container"
import lander from "../assets/images/Lander.jpg"

import ProductCard from "../components/ProductCard/ProductCard"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import InstaPost from "../components/InstagramPost/InstagramPost"
import { responsive } from "../assets/responsive"

const LanderCont = styled(Container)`
  display: flex;
  height: 800px;
  justify-content: center;
  flex-direction: column;
  padding-top: 80px;
  background-color: #f2f2f0;
  background-image: url(${lander});
  object-fit: cover;
  background-size: 65vw 100%;
  background-repeat: no-repeat;
  background-position: right center;
  @media only screen and (max-width: ${responsive.medS}px) {
    background-image: none;
    object-fit: cover;
    background-size: 65vw 100%;
    background-repeat: no-repeat;
    background-position: right center;
  }
`

const Goodies = styled(Container)`
  min-height: 800px;
  position: relative;
`

const Instagram = styled(Container)`
  margin-bottom: 10vh;
`

const ProductCont = styled.div`
  width: 100%;
  display: flex;
  margin: 48px 0 96px 0;

  @media only screen and (max-width: ${responsive.large}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
const FeatureProductCard = styled(ProductCard)`
  @media only screen and (max-width: ${responsive.large}px) {
    margin-top: 8rem;
  }
`

const Typography = styled.p`
  margin-bottom: ${props => (props.small ? "32px" : "40px")};
  font-size: ${props => (props.small ? "20px" : "80px")};
  font-weight: ${props => (props.small ? "400" : "600")};

  @media only screen and (max-width: ${responsive.medL}px) {
    margin-bottom: ${props => (props.small ? "24px" : "36px")};
    font-size: ${props => (props.small ? "16px" : "60px")};
    font-weight: ${props => (props.small ? "400" : "600")};
  }

  @media only screen and (max-width: ${responsive.small}px) {
    margin-bottom: ${props => (props.small ? "16px" : "24px")};
    font-size: ${props => (props.small ? "14px" : "48px")};
    font-weight: ${props => (props.small ? "400" : "600")};
  }

  @media only screen and (max-width: ${responsive.tiny}px) {
    margin-bottom: ${props => (props.small ? "8px" : "16px")};
    font-size: ${props => (props.small ? "12px" : "40px")};
    font-weight: ${props => (props.small ? "400" : "600")};
    word-break: break-word;
  }
`

const ShopButton = styled(Button)`
  height: 64px;
  width: 240px;
  && {
    z-index: 0;
    border-radius: 50px;
    background-color: #f17c98;
    color: white;
    font-size: 24px;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
`
const DessertLeftCont = styled.div`
  position: absolute;
  left: 0;
  top: 25%;
  @media only screen and (max-width: ${responsive.large}px) {
    top: 50%;
  }
`
const DessertRightCont = styled.div`
  position: absolute;
  right: 0;
  top: -10%;
  @media only screen and (max-width: ${responsive.large}px) {
    top: 20%;
  }
`

const Featured = styled(Typography)`
  margin: 10vh 0 15vh 0;

  @media only screen and (max-width: ${responsive.large}px) {
    margin: 5rem 0 0 0;
  }

  @media only screen and (max-width: ${responsive.small}px) {
    text-align: center;
  }
`
const IGTitle = styled(Typography)`
  text-align: center;
  line-height: 100px;
  margin: auto;
  padding: 10vh 0 15vh 0;

  @media only screen and (max-width: ${responsive.medL}px) {
    padding: 5vh 0;
  }
`

const PhotoContainer = styled.div`
  display: flex;
  @media only screen and (max-width: ${responsive.large}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export default function Home({ data }) {
  return (
    <MainLayout>
      <LanderCont>
        <Typography small>freshly made for sharing</Typography>
        <Typography
          style={{
            maxWidth: "850px",
            lineHeight: "100px",
          }}
        >
          A bundle of joy <br /> for every occasion
        </Typography>
        <Link
          to="/menu"
          style={{
            textDecoration: "none",
          }}
        >
          <ShopButton>Shop Now</ShopButton>
        </Link>
      </LanderCont>
      <Goodies>
        <DessertRightCont>
          <StaticImage
            src="../assets/images/dessertRight.png"
            alt="rightDessert"
            imgStyle={{
              filter: "opacity(0.5)",
            }}
          />
        </DessertRightCont>
        <DessertLeftCont>
          <StaticImage
            src="../assets/images/dessertLeft.png"
            alt="leftDessert"
            imgStyle={{
              filter: "opacity(0.5)",
            }}
          />
        </DessertLeftCont>
        <Featured>Popular Goodies</Featured>
        <ProductCont>
          {data.allContentfulFeaturedProductCard.nodes.map(card => {
            return (
              <FeatureProductCard
                name={card.productName}
                startingPrice={card.price}
                key={card.id}
                slug={card.slug}
                img={card.image}
                color={card.color}
              />
            )
          })}
        </ProductCont>
      </Goodies>
      <Instagram>
        <IGTitle>Follow us @sweetbundle .ying</IGTitle>
        <PhotoContainer>
          {data.allInstagramContent.nodes.map(post => {
            return (
              <InstaPost
                caption={post.caption}
                img={post.localImage}
                key={post.id}
              />
            )
          })}
        </PhotoContainer>
      </Instagram>
    </MainLayout>
  )
}

export const query = graphql`
  {
    allContentfulFeaturedProductCard {
      nodes {
        slug
        productName
        price
        id
        color
        image {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            width: 300
          )
        }
      }
    }
    allInstagramContent(limit: 5) {
      nodes {
        caption
        id
        localImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
