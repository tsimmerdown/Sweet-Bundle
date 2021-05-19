import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import React from "react"
import { responsive } from "../../assets/responsive"

const Image = styled.div`
  min-width: 15em;
  @media only screen and (max-width: ${responsive.medS}px) {
    min-width: calc(100% / 3);
  }
  @media only screen and (max-width: ${responsive.tiny}px) {
    min-width: calc(100% / 2);
  }
  @media only screen and (max-width: 350px) {
    min-width: 100%;
  }
`

const CarouselItem = ({ image, active, setActive }) => {
  const img = getImage(image)

  return (
    <Image>
      <GatsbyImage
        image={img}
        style={{
          height: "35em",
        }}
      />
    </Image>
  )
}

export default CarouselItem
