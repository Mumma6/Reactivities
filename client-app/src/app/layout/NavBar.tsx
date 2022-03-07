import React from "react"
import { NavLink } from "react-router-dom"
import { Button, Container, Menu } from "semantic-ui-react"
import { Routes } from "../Router"

const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to={Routes.Home} exact header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivites
        </Menu.Item>
        <Menu.Item as={NavLink} to={Routes.Activities} name="Activities" />
        <Menu.Item>
          <Button as={NavLink} to={Routes.CreateActivity} positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar
