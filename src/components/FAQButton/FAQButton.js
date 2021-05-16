import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import { MdKeyboardArrowDown } from "react-icons/md"
import { responsive } from "../../assets/responsive"

const AccordionCont = styled(Accordion)`
  && {
    width: 65vw;
    margin: 10px 0;
    box-shadow: none;

    &:before {
      background-color: black;
    }
  }

  @media only screen and (max-width: ${responsive.xsmall}px) {
    && {
      width: 80vw;
    }
  }
`

const Question = styled.p`
  font-size: 35px;
  @media only screen and (max-width: ${responsive.medL}px) {
    font-size: 30px;
  }

  @media only screen and (max-width: ${responsive.medS}px) {
    font-size: 24px;
  }
  @media only screen and (max-width: ${responsive.tiny}px) {
    font-size: 16px;
  }
`

const Answer = styled.p`
  font-size: 24px;
  @media only screen and (max-width: ${responsive.medL}px) {
    font-size: 16px;
  }
  @media only screen and (max-width: ${responsive.tiny}px) {
    font-size: 12px;
  }
`

const FAQButton = ({ question, answer }) => {
  return (
    <AccordionCont>
      <AccordionSummary
        expandIcon={<MdKeyboardArrowDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Question>{`Q: ${question}`}</Question>
      </AccordionSummary>
      <AccordionDetails>
        <Answer>{answer}</Answer>
      </AccordionDetails>
    </AccordionCont>
  )
}

export default FAQButton
