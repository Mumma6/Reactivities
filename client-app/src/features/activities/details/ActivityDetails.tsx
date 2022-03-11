import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Button, Card, Grid, GridColumn, Image } from "semantic-ui-react"
import Loading from "../../../app/layout/Loading"
import { Routes } from "../../../app/Router"
import { useStore } from "../../../app/stores/store"
import ActivityDetailedChat from "./ActivityDetailedChat"
import ActivityDetailedHeader from "./ActivityDetailedHeader"
import ActivityDetailedInfo from "./ActivityDetailedInfo"
import ActivityDetailedSidebar from "./ActivityDetailedSidebar"

const ActivityDetails = () => {
  const { activityStore } = useStore()
  const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id) {
      loadActivity(id)
    }
  }, [id, loadActivity])


  if (loadingInitial || !activity) return <Loading />

  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </GridColumn>
      <GridColumn width={6}>
        <ActivityDetailedSidebar />
      </GridColumn>
    </Grid>
  )
}

export default observer(ActivityDetails)
