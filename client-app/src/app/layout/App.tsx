import React, { useState, useEffect } from "react"
import { Container } from "semantic-ui-react"
import { Activity } from "../models/activity"
import NavBar from "./NavBar"
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"
import { v4 as uuid } from "uuid"
import agent from "../api/agent"
import Loading from "./Loading"

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    agent.Activities.list().then((res) => {
      setActivities(
        res.map((activity) => ({
          ...activity,
          date: activity.date.split("T")[0], // detta skulle kunna vara i utils men vi ska ta bort det snart endå
        }))
      )
      setLoading(false)
    })
  }, [])

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.find((a) => a.id === id))
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  const handleFormOpen = (id?: string) => {
    id ? handleSelectedActivity(id) : handleCancelSelectActivity()
    setEditMode(true)
  }

  const handleFormClose = () => setEditMode(false)

  const handleCreateOrEditActivity = (activity: Activity) => {
    setSubmitting(true)
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter((e) => e.id !== activity.id), activity])
        setSelectedActivity(activity)
        setEditMode(false)
        setSubmitting(false)
      })
    } else {
      activity.id = uuid()
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity])
        setSelectedActivity(activity)
        setEditMode(false)
        setSubmitting(false)
      })
    }
  }

  const handleDeleteActivity = (id: string) => {
    setSubmitting(true)
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter((a) => a.id !== id)])
      setSubmitting(false)
    })
  }

  if (loading) return <Loading content="Loading app" />

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </Container>
    </>
  )
}

export default App
