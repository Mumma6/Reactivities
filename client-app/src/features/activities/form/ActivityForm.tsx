import { observer } from "mobx-react-lite"
import React, { ChangeEvent, useState } from "react"
import { Button, Form, Segment } from "semantic-ui-react"
import { Activity, ActivityPropNames } from "../../../app/models/activity"
import { useStore } from "../../../app/stores/store"
import { capitilizeFirstChar } from "../../../utils/utils"

const ActivityForm = () => {
  const { activityStore } = useStore()
  const { selectedActivity, closeForm, createActivity, updateActivity, loading } = activityStore

  const initalState: Activity = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  }

  const [activity, setActivity] = useState(initalState)

  const handleSubmit = () => {
    activity.id ? updateActivity(activity) : createActivity(activity)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setActivity({ ...activity, [name]: value })
  }

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
        <Button onClick={closeForm} floated="right" type="button" content="cancel" />
      </Form>
    </Segment>
  )
}

export default observer(ActivityForm)
