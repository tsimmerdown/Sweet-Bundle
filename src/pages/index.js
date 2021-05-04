import React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import MainLayout from "../templates/MainLayout"
import Container from "../components/Cont/Container"
import lander from "../assets/images/Lander.jpg"

import ProductCard from "../components/ProductCard/ProductCard"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import InstaPost from "../components/InstagramPost/InstagramPost"

const LanderCont = styled(Container)`
  display: flex;
  height: 800px;
  justify-content: center;
  flex-direction: column;
  padding-top: 80px;
  background-color: #f2f2f0;
  background-image: url(${lander});
  object-fit: contain;
  background-size: 65vw 900px;
  background-repeat: no-repeat;
  background-position: right center;
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
`

const Typography = styled.p`
  margin-bottom: ${props => (props.small ? "32px" : "40px")};
  font-size: ${props => (props.small ? "20px" : "80px")};
  font-weight: ${props => (props.small ? "400" : "600")};
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
    &:hover {
      color: black;
    }
  }
`

const PhotoContainer = styled.div`
  display: flex;
  overflow: hidden;
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
        <ShopButton>Shop Now</ShopButton>
      </LanderCont>
      <Goodies>
        <StaticImage
          src="../assets/images/dessertRight.png"
          alt="rightDessert"
          style={{
            position: "absolute",
            right: 0,
            top: "-10%",
          }}
          imgStyle={{
            filter: "opacity(0.5)",
          }}
        />
        <StaticImage
          src="../assets/images/dessertLeft.png"
          alt="leftDessert"
          style={{
            position: "absolute",
            left: 0,
            top: "25%",
          }}
          imgStyle={{
            filter: "opacity(0.5)",
          }}
        />
        <Typography style={{ margin: "10vh 0 15vh" }}>
          Popular Goodies
        </Typography>
        <ProductCont>
          {data.allContentfulFeaturedProductCard.nodes.map(card => {
            return (
              <ProductCard
                name={card.productName}
                startingPrice={card.price}
                key={card.id}
                slug={card.slug}
                img={card.image}
              />
            )
          })}
        </ProductCont>
      </Goodies>
      <Instagram>
        <Typography
          style={{
            width: "900px",
            margin: "auto",
            textAlign: "center",
            padding: "10vh 0 15vh",
            lineHeight: "100px",
          }}
        >
          Follow us @sweetbundle.ying
        </Typography>
        <PhotoContainer>
          {data.allInstagramContent.nodes.map(post => {
            return <InstaPost caption={post.caption} img={post.localImage} />
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
        localImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
