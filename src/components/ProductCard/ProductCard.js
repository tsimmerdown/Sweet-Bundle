import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CardCont = styled.div`
  height: 500px;
  width: 480px;
  border-radius: 10px;
  position: relative;
  background: #f4eaea;
  margin: 0 20px;
`

const Typography = styled.p`
  white-space: no-wrap;
  width: 100%;
  position: absolute;
  font-size: ${props => (props.small ? "15px" : "30px")};
  font-weight: ${props => (props.small ? "400" : "500")};
`

const ProductCard = ({ name, startingPrice, slug, img }) => {
  const image = getImage(img)
  return (
    <CardCont>
      <GatsbyImage
        image={image}
        alt={slug}
        style={{
          left: "50%",
          transform: "translate(-50%, 0)",
          top: "-100px",
        }}
        imgStyle={{
          filter: "drop-shadow(8px 10px 4px rgba(0, 0, 0, 0.25))",
        }}
      />

      <Typography small style={{ bottom: "45%", textAlign: "center" }}>
        made to order{" "}
        <span role="img" aria-label="blackcircle">
          ●
        </span>{" "}
        gift-wrapped
      </Typography>
      <Typography style={{ bottom: "20%", textAlign: "center" }}>
        {name}
      </Typography>
      <Typography
        small
        style={{ bottom: "10px", right: "10px", textAlign: "end" }}
      >
        Price starting from ${startingPrice}
      </Typography>
    </CardCont>
  )
}

export default ProductCard
