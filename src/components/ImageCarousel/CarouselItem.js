import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const CarouselItem = ({ image, active, setActive }) => {
  const img = getImage(image)

  return (
    <GatsbyImage
      image={img}
      style={{
        height: "480px",
      }}
    />
  )
}

export default CarouselItem
