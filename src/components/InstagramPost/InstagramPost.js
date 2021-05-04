import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const InstaCont = styled.div`
  position: relative;
  background: #f4eaea;
  margin: 0 20px;
  overflow: hidden;
`
const HoverText = styled(motion.p)`
  position: absolute;
  bottom: -100px;
  background: rgba(255, 255, 255, 0.6);
  height: 300px;
  border-radius: 20%;
  padding: 20px 10px 0 10px;
  text-overflow: ellipsis;
  backdrop-filter: blur(2px);
`
const InstaPost = ({ caption, img }) => {
  const [hover, setHover] = useState(false)
  const image = getImage(img)

  return (
    <InstaCont
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <GatsbyImage
        image={image}
        style={{
          width: "300px",
          height: "100%",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      {hover && (
        <HoverText
          initial={{
            y: "100px",
          }}
          animate={{
            y: 0,
          }}
          transition={{
            ease: "linear",
            duration: 0.2,
          }}
        >
          {caption}
        </HoverText>
      )}
    </InstaCont>
  )
}

export default InstaPost
