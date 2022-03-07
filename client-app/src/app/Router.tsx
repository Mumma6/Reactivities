import React from "react"
import { Route, useLocation } from "react-router-dom"
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard"
import ActivityDetails from "../features/activities/details/ActivityDetails"
import ActivityForm from "../features/activities/form/ActivityForm"

export enum Routes {
  Home = '/',
  Activities = '/activities',
  CreateActivity = '/createActivity',
  ActivitiesId = '/activities/:id',
  ManageId = '/manage/:id'
}

const Router = () => {
  const location = useLocation()
  return (
    <>
      <Route exact path={Routes.Activities} component={ActivityDashboard} />
      <Route path={Routes.ActivitiesId} component={ActivityDetails} />
      <Route key={location.key} path={[Routes.CreateActivity, Routes.ManageId]} component={ActivityForm} />
    </>
  )
}

export default Router

// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key

  // Adding a key to "reset" the component instead of updating it when a prop change (id)