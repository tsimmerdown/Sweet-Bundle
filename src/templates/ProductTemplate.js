import React from "react"
import ImageCarousel from "../components/ImageCarousel/ImageCarousel"
import MainLayout from "./MainLayout"
import styled from "styled-components"
import ProductCard from "../components/ProductCard/ProductCard"
import Container from "../components/Cont/Container"
import ProductMenu from "../components/ProductMenu/ProductMenu"

const ProductContainer = styled(Container)``

const TextCont = styled.div`
  padding: 80px;
  width: 1000px;
`
const Typography = styled.p`
  margin-bottom: ${props => (props.small ? "24px" : "40px")};
  font-size: ${props => (props.small ? "20px" : "80px")};
  font-weight: ${props => (props.small ? "400" : "600")};
`
const OtherGoodieCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 120px 0 80px;
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
          <Typography
            small
            style={{
              height: "20em",
            }}
          >
            {pageContext.productDescription}
          </Typography>
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
              <ProductCard
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
