import React, { useState } from "react"
import styled from "styled-components"
import CarouselItem from "./CarouselItem"

const CarouselCont = styled.div`
  display: flex;
  overflow: hidden;
`

const ImageCarousel = ({ images }) => {
  const [active, setActive] = useState(false)

  return (
    <CarouselCont>
      {images.map(image => {
        return (
          <CarouselItem image={image} active={active} setActive={setActive} />
        )
      })}
    </CarouselCont>
  )
}

export default ImageCarousel
