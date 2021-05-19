import React from "react"
import styled from "styled-components"
import Container from "../components/Cont/Container"
import { graphql } from "gatsby"
import MainLayout from "../templates/MainLayout"
import background from "../assets/images/faq-header.png"
import FAQButton from "../components/FAQButton/FAQButton"
import { responsive } from "../assets/responsive"

const FAQCont = styled(Container)`
  padding: 80px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${responsive.medL}px) {
  }
`

const Header = styled.div`
  background: #c4c4c4;
  text-align: center;
  padding-top: 80px;
  height: 350px;
  width: 100%;
  font-weight: 600;
  font-size: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${responsive.large}px) {
    font-size: 64px;
  }
  @media only screen and (max-width: ${responsive.medS}px) {
    font-size: 40px;
  }
  @media only screen and (max-width: ${responsive.tiny}px) {
    font-size: 36px;
  }
`

const FAQ = ({ data }) => {
  return (
    <MainLayout>
      <Header style={{ backgroundImage: `url(${background})` }}>
        Frequently Asked Questions
      </Header>
      <FAQCont>
        {data.allContentfulFaqItem.nodes.map(node => {
          return (
            <FAQButton
              question={node.question}
              answer={node.answer}
              key={node.id}
            />
          )
        })}
      </FAQCont>
    </MainLayout>
  )
}

export default FAQ

export const query = graphql`
  {
    allContentfulFaqItem {
      nodes {
        question
        answer
        id
      }
    }
  }
`
