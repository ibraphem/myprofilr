import {Link} from "gatsby"
import * as React from "react"
import styled from "styled-components"
import { Button } from "./styles/Button"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">IBRAHIM</NavLink>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">My Resume</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem (calc(100vw - 1000px)/2);
  z-index: 100;
  position: relative;

`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  


  @media screen and (max-width: 768px){
    display: none
  }

`