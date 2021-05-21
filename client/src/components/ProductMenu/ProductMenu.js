import {
  Button,
  Checkbox,
  FormControl,
  ListItem,
  ListItemIcon,
  ListItemText,
  NativeSelect,
} from "@material-ui/core"
import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { responsive } from "../../assets/responsive"
import { CartContext } from "../../context/cartContext"

const SelectMenuCont = styled.div`
  position: ${props => (props.threshold ? "absolute" : "fixed")};
  width: 540px;
  background-color: #e9e8dd;
  top: ${props => (props.threshold ? "600px" : "100px")};
  right: 100px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 5px 5px 8px grey;
  padding-bottom: 7em;
  @media only screen and (max-width: ${responsive.large}px) {
    width: 480px;
  }
  @media only screen and (max-width: ${responsive.medL}px) {
    width: 400px;
  }
  @media only screen and (max-width: ${responsive.medS}px) {
    position: relative;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
    margin-bottom: 80px;
  }
  @media only screen and (max-width: ${responsive.tiny}px) {
    width: 300px;
  }
`
const Typography = styled.p`
  width: 100%;
  position: absolute;
  font-size: ${props => (props.small ? "15px" : "30px")};
  font-weight: ${props => (props.small ? "400" : "500")};

  @media only screen and (max-width: ${responsive.small}px) {
    margin-bottom: ${props => (props.small ? "16px" : "24px")};
    font-size: ${props => (props.small ? "14px" : "24px")};
    font-weight: ${props => (props.small ? "400" : "500")};
  }

  @media only screen and (max-width: ${responsive.tiny}px) {
    margin-bottom: ${props => (props.small ? "8px" : "16px")};
    font-size: ${props => (props.small ? "12px" : "24px")};
    font-weight: ${props => (props.small ? "400" : "500")};
    word-break: break-word;
  }
`
const PriceCont = styled.div`
  display: flex;
  height: 55px;
  margin: 40% 16px 0 16px;
  @media only screen and (max-width: ${responsive.large}px) {
    margin-top: 50%;
  }
  @media only screen and (max-width: ${responsive.medL}px) {
    margin-top: 15em;
  }
`

const PriceOption = styled.div`
  flex: 1 0 auto;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.active ? "#c4c4c4" : "transparent")};
  @media only screen and (max-width: ${responsive.tiny}px) {
    font-size: ${props => (props.small ? "12px" : "24px")};
  }
`
const FlavourSelect = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  align-items: center;
`
const Additions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2em;
`
const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2em;
  width: 100%;
`

const AddButton = styled(Button)`
  && {
    background-color: #40434a;
    color: white;
    width: 50%;
  }
`
const AdditionText = styled(ListItemText)`
  @media only screen and (max-width: ${responsive.tiny}px) {
    font-size: 0.75em;
  }
`
const ListIcon = styled(ListItemIcon)`
  @media only screen and (max-width: ${responsive.tiny}px) {
    && {
      min-width: initial;
    }
  }
`

const ProductMenu = ({ name, options }) => {
  const { addToCart } = useContext(CartContext)

  const [total, setTotal] = useState(0)
  const [threshold, setThreshold] = useState(false)
  const [activeOption, setActiveOption] = useState()

  const [checked, setChecked] = React.useState([0])

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value.name)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value.name)
      setTotal(total + value.price)
    } else {
      newChecked.splice(currentIndex, 1)
      setTotal(total - value.price)
    }

    setChecked(newChecked)
  }

const handleCheckout = () =>{

  addToCart({
    //id
    name: 
  })
}

  useEffect(() => {
    const scrollHandler = e => {
      if (e.target.scrollingElement.scrollTop > 500) {
        setThreshold(true)
      } else {
        setThreshold(false)
      }
    }

    document.addEventListener("scroll", scrollHandler)
    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return (
    <SelectMenuCont threshold={threshold}>
      <Typography small style={{ top: "12%", textAlign: "center" }}>
        made to order{" "}
        <span role="img" aria-label="blackcircle">
          ●
        </span>{" "}
        gift-wrapped
      </Typography>
      <Typography style={{ top: "20%", textAlign: "center" }}>
        {name}
      </Typography>
      <PriceCont>
        {options.priceOptions.options.map(option => {
          return (
            <PriceOption
              active={activeOption === option.id}
              key={option.id}
              onClick={() => {
                setTotal(option.price)
                setActiveOption(option.id)
              }}
              small
            >
              {`${option.amount || ""} ${option.type} - $${option.price}`}
            </PriceOption>
          )
        })}
      </PriceCont>
      {options.flavour && (
        <FlavourSelect>
          <p
            style={{
              marginRight: "5%",
            }}
          >
            Flavour:
          </p>
          <FormControl>
            <NativeSelect
              id="demo-customized-select-native"
              // onChange={handleChange}
            >
              {options.flavour.map(option => {
                return <option>{option}</option>
              })}
            </NativeSelect>
          </FormControl>
        </FlavourSelect>
      )}
      {options.addOnOptions && (
        <Additions>
          <p>Top it up</p>
          <div
            style={{
              flexWrap: "wrap",
              display: "flex",
            }}
          >
            {options.addOnOptions.options.map(option => {
              return (
                <ListItem
                  key={option.name}
                  role={undefined}
                  dense
                  button
                  onClick={handleToggle(option)}
                  style={{ width: "50%" }}
                >
                  <ListIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(option.name) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": option.name }}
                    />
                  </ListIcon>
                  <AdditionText
                    disableTypography
                    id={option.name}
                    primary={`${option.name} - $${option.price}`}
                  />
                </ListItem>
              )
            })}
          </div>
        </Additions>
      )}
      <ButtonCont>
        <AddButton onClick>Add to Cart - ${total}</AddButton>
      </ButtonCont>
    </SelectMenuCont>
  )
}

export default ProductMenu
