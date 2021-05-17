import React, { useState } from "react"
import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"
import { Button } from "@material-ui/core"
import { Link } from "gatsby"

const Rect = styled(animated.div)`
  height: 3px;
  background: black;
`

const transitions = { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.9] }

const ButtonLink = ({ name, slug }) => {
  const [hover, setHover] = useState(false)

  const aniProps = useSpring({
    width: hover ? "100%" : "0%",
    right: "null",
  })

  const handleHover = type => {
    setHover(type)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "40px",
        margin: "0 2vw",
      }}
    >
      <Link to={`/${slug}`} style={{ textDecoration: "none" }}>
        <Button
          onMouseEnter={() => {
            handleHover(true)
          }}
          onMouseLeave={() => {
            handleHover(false)
          }}
          disableRipple
          style={{ backgroundColor: "transparent" }}
        >
          {name}
        </Button>
      </Link>
      {hover && <Rect style={aniProps} />}
    </div>
  )
}

export default ButtonLink
