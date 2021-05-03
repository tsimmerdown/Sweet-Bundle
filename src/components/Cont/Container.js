import React from "react"
import styled from "styled-components"

const Cont = styled.div`
  width: 100%;
  padding: 0 100px;
`

const Container = ({ children, className }) => {
  return <Cont className={className}>{children}</Cont>
}

export default Container
