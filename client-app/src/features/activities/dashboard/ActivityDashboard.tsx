import React from "react"
import { Grid } from "semantic-ui-react"
import { Activity } from "../../../app/models/activity"
import ActivityDetails from "../details/ActivityDetails"
import ActivityForm from "../form/ActivityForm"
import ActivityList from "./ActivityList"

interface Props {
  activities: Activity[]
  selectedActivity: Activity | undefined
  selectActivity: (id: string) => void
  cancelSelectActivity: () => void
  editMode: boolean
  openForm: (id: string) => void
  closeForm: () => void
  createOrEdit: (activity: Activity) => void
  deleteActivity: (id: string) => void
}

const ActivityDashboard = ({
  activities,
  selectActivity,
  selectedActivity,
  cancelSelectActivity,
  editMode,
  closeForm,
  openForm,
  createOrEdit,
  deleteActivity,
}: Props) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList selectActivity={selectActivity} activities={activities} deleteActivity={deleteActivity} />
      </Grid.Column>
      {selectedActivity && !editMode && (
        <Grid.Column width={6}>
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        </Grid.Column>
      )}
      {editMode && (
        <ActivityForm
          closeForm={closeForm}
          activity={selectedActivity}
          createOrEdit={createOrEdit}
        />
      )}
    </Grid>
  )
}

export default ActivityDashboard
