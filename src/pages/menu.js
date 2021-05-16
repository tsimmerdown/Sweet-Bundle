import React from "react"
import styled from "styled-components"
import Container from "../components/Cont/Container"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MainLayout from "../templates/MainLayout"
import ProductCard from "../components/ProductCard/ProductCard"
import { responsive } from "../assets/responsive"

const MenuCont = styled(Container)`
  padding-top: 30px;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: ${responsive.medS}px) {
    padding: 30px 0 100px 0;
  }
`
const Header = styled.div`
  color: white;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 90px;
  @media only screen and (max-width: ${responsive.tiny}px) {
    font-size: 56px;
  }
`
const Product = styled(ProductCard)`
  margin-top: 110px;
`
const Menu = ({ data }) => {
  const banner = getImage(data.contentfulAsset)

  return (
    <MainLayout>
      <div style={{ position: "relative" }}>
        <GatsbyImage
          image={banner}
          style={{
            height: "580px",
          }}
        />
        <Header>Our Goodies</Header>
      </div>
      <MenuCont>
        {data.allContentfulProductCard.nodes.map(node => {
          return (
            <Product
              name={node.productName}
              startingPrice={node.price}
              key={node.id}
              slug={node.slug}
              img={node.image}
              color={node.color}
            />
          )
        })}
      </MenuCont>
    </MainLayout>
  )
}

export default Menu

export const query = graphql`
  {
    allContentfulProductCard {
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
    contentfulAsset(title: { eq: "MenuBanner" }) {
      gatsbyImageData
    }
  }
`
