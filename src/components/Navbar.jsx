import React from 'react'
import styled from 'styled-components'
import { Flex } from '../styles/Flex'

const Container = styled.div`
  height: 50px;
  background-color: ${({theme}) => theme.colors.header};
`

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-around;
`

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Logo = styled.div`
  font-weight: bold;
`

const Menu = styled.ul`
  gap: 1rem;
  display: flex;
  align-items: center;
  margin: 0 1rem;

  @media only screen and (max-width: ${({theme}) => theme.mobile}) {
   display: none;
  }
`

const MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
`

const Button = styled.button`
  padding: 10px 1rem;
  background-color: transparent;
  color: #fff;
  border-radius: 5px;
  outline: none;
  border: 2px solid white;
  cursor: pointer;

  &:hover{
    background-color: #3a6d34;
  }
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Service</MenuItem>
            <MenuItem>Service</MenuItem>
            <MenuItem>Service</MenuItem>
          </Menu>
        </Left>
        <Button>Join Now</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar