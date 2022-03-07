import React from "react"
import { Container } from "semantic-ui-react"
import NavBar from "./NavBar"
import { observer } from "mobx-react-lite"
import Router, { Routes } from "../Router"
import { Route } from "react-router-dom"
import HomePage from "../../features/home/HomePage"

function App() {
  return (
    <>
      <Route exact path={Routes.Home} component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Router />
            </Container>
          </>
        )}
      />
    </>
  )
}

export default observer(App)
