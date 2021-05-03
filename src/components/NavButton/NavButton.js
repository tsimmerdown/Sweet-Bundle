import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Button } from "@material-ui/core"

const Rect = styled(motion.div)`
  height: 3px;
  background: black;
`

const transitions = { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.9] }

const ButtonLink = ({ name }) => {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(!hover)
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
      <Button
        onMouseEnter={() => {
          handleHover()
        }}
        onMouseLeave={() => {
          handleHover()
        }}
        onClick={() => {}}
        disableRipple
        style={{ backgroundColor: "transparent" }}
      >
        {name}
      </Button>
      {hover && (
        <Rect
          key={name}
          initial={{
            width: "0",
            right: null,
          }}
          animate={{
            width: "100%",
            right: null,
          }}
          exit={{ width: "0", right: 0 }}
          transition={transitions}
        />
      )}
    </div>
  )
}

export default ButtonLink
