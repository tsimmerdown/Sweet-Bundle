import React from "react"
import ImageCarousel from "../components/ImageCarousel/ImageCarousel"
import MainLayout from "./MainLayout"
import styled from "styled-components"
import ProductCard from "../components/ProductCard/ProductCard"
import Container from "../components/Cont/Container"
import ProductMenu from "../components/ProductMenu/ProductMenu"
import { responsive } from "../assets/responsive"

const ProductContainer = styled(Container)``

const TextCont = styled.div`
  padding: 80px 0;
  max-width: calc(100% * (7 / 14));
  @media only screen and (max-width: ${responsive.medS}px) {
    width: 80vw;
    max-width: none;
  }
`
const Typography = styled.p`
  margin-bottom: ${props => (props.small ? "24px" : "40px")};
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
const OtherGoodieCont = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  @media only screen and (max-width: ${responsive.medL}px) {
    flex-wrap: wrap;
  }
`

const OtherProductCard = styled(ProductCard)`
  @media only screen and (max-width: 975px) {
    width: 480px;
  }
`

const ProductTemplate = props => {
  const { pageContext } = props

  return (
    <MainLayout>
      <ImageCarousel images={pageContext.images} />

      <ProductContainer>
        <TextCont>
          <Typography small>About This Goodie</Typography>
          <Typography>{pageContext.productHeader}</Typography>
          <Typography small>{pageContext.productDescription}</Typography>
        </TextCont>
        <ProductMenu
          options={pageContext.menuOptions}
          name={pageContext.productName}
          type={pageContext.type}
        />
        <Typography style={{ textAlign: "center" }}>
          Check out other Goodies
        </Typography>

        <OtherGoodieCont>
          {pageContext.otherGoodies.map(goodie => {
            return (
              <OtherProductCard
                name={goodie.productName}
                startingPrice={goodie.price}
                key={goodie.id}
                slug={goodie.slug}
                img={goodie.image}
                color={goodie.color}
              />
            )
          })}
        </OtherGoodieCont>
      </ProductContainer>
    </MainLayout>
  )
}

export default ProductTemplate
