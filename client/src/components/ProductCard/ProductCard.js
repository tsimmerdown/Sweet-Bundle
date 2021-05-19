import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { responsive } from "../../assets/responsive"

const CardCont = styled.div`
  height: 500px;
  width: 480px;
  border-radius: 10px;
  position: relative;
  background: ${props => props.color || "black"};
  margin: 8em 1em 0;
  color: black;

  @media only screen and (max-width: ${responsive.large}px) {
    width: 350px;
  }
  @media only screen and (max-width: ${responsive.small}px) {
    width: 480px;
  }
  @media only screen and (max-width: ${responsive.tiny}px) {
    height: 450px;
  }
`

const Typography = styled.p`
  width: 100%;
  position: absolute;
  font-size: ${props => (props.small ? "15px" : "30px")};
  font-weight: ${props => (props.small ? "400" : "500")};
  color: black;

  @media only screen and (max-width: ${responsive.tiny}px) {
    font-size: ${props => (props.small ? "12px" : "24px")};
  }
`

const ProductCard = ({ className, name, startingPrice, slug, img, color }) => {
  const image = getImage(img)
  return (
    <CardCont color={color} className={className}>
      <Link to={`/goodies/${slug}`}>
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
          Prices starting from ${startingPrice}
        </Typography>
      </Link>
    </CardCont>
  )
}

export default ProductCard
