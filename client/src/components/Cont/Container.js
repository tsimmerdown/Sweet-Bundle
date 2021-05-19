import React from "react"
import styled from "styled-components"
import { responsive } from "../../assets/responsive"

const Cont = styled.div`
  width: 100%;
  padding: 0 100px;

  @media only screen and (max-width: ${responsive.xsmall}px) {
    padding: 0 1rem;
  }
`

const Container = ({ children, className }) => {
  return <Cont className={className}>{children}</Cont>
}

export default Container
