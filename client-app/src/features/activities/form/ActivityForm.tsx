import { observer } from "mobx-react-lite"
import React, { ChangeEvent, useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { Button, Form, Segment } from "semantic-ui-react"
import Loading from "../../../app/layout/Loading"
import { Activity, ActivityPropNames } from "../../../app/models/activity"
import { useStore } from "../../../app/stores/store"
import { capitilizeFirstChar } from "../../../utils/utils"
import { v4 as uuid } from "uuid"
import { Routes } from "../../../app/Router"

const ActivityForm = () => {
  const { activityStore } = useStore()
  const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore
  const { id } = useParams<{ id: string }>()
  const history = useHistory()

  const [activity, setActivity] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  })

  useEffect(() => {
    if (id) {
      loadActivity(id).then((activity) => setActivity(activity!)) // ! istället för as ...
    }
  }, [id, loadActivity])

  const pushToActivitieDetails = (id: string) => history.push(`/activities/${id}`)

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      const newActivity = {
        ...activity,
        id: uuid()
      }
      createActivity(newActivity).then(() => pushToActivitieDetails(newActivity.id))
    } else {
      updateActivity(activity).then(() => pushToActivitieDetails(activity.id))
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setActivity({ ...activity, [name]: value })
  }

  if (loadingInitial) return <Loading content="Loading activity..." />

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder={capitilizeFirstChar(ActivityPropNames.title)}
          value={activity.title}
          name={ActivityPropNames.title}
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder={capitilizeFirstChar(activity.description)}
          value={activity.description}
          name={ActivityPropNames.description}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder={capitilizeFirstChar(ActivityPropNames.category)}
          value={activity.category}
          name={ActivityPropNames.category}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder={capitilizeFirstChar(ActivityPropNames.date)}
          value={activity.date}
          type="date"
          name={ActivityPropNames.date}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder={capitilizeFirstChar(ActivityPropNames.city)}
          value={activity.city}
          name={ActivityPropNames.city}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder={capitilizeFirstChar(ActivityPropNames.venue)}
          value={activity.venue}
          name={ActivityPropNames.venue}
          onChange={handleInputChange}
        />
        <Button loading={loading} floated="right" positive type="submit" content="submit" />
        <Button as={Link} to={Routes.Activities} floated="right" type="button" content="cancel" />
      </Form>
    </Segment>
  )
}

export default observer(ActivityForm)
