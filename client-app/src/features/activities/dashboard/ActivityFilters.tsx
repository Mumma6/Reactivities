import React from "react"
import Calendar from "react-calendar"
import { Header, Menu, MenuItem } from "semantic-ui-react"

const ActivityFilters = () => {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%", marginTop: 27 }}>
        <Header attached icon="filter" content="Filters" color="teal" />
        <MenuItem content="All Activities" />
        <MenuItem content="Im going" />
        <MenuItem content="Im hosting" />
      </Menu>
      <Header />
      <Calendar />
    </>
  )
}

export default ActivityFilters
