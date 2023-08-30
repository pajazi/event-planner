import 'gantt-task-react/dist/index.css'
import StyledGanttChart from '@/components/gantt/StyledGanttChart'
import { Grid } from '@mui/material'
import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { GanttEvent } from '@/interfaces/GanttEvent'
import NoEventsNote from '@/features/NoEventsNote'
import { fromUTCString } from '@/utils/date-time-utils'

const GanttChart = () => {
    const { query } = useRouter()
    const { data } = useGetGanttEventsQuery()

    const { partnerId, dateStart, dateEnd } = query

    // Since we do not have an API, we will filter these results directly on the frontend
    // This would be normally done via backend
    const filterEvent = (event: GanttEvent): boolean =>
        (!partnerId || event.partner.id === partnerId) &&
        (!dateStart || fromUTCString(event.dateStart) >= fromUTCString(dateStart)) &&
        (!dateEnd || fromUTCString(event.dateEnd) <= fromUTCString(dateEnd))

    // Mapping the response to support the Gantt API
    // Reference: https://www.npmjs.com/package/gantt-task-react
    const mapEvent = (event: GanttEvent): GanttEvent => ({
        ...event,
        start: new Date(event.dateStart),
        end: new Date(event.dateEnd),
        name: `${event.name.trim()} (${event.status})`,
        id: event.id,
        type: 'task',
        project: event.status,
        progress: 0,
        isDisabled: true,
    })

    const sortByDate = (event1: GanttEvent, event2: GanttEvent): number =>
        event1.start - event2.start

    const events = useMemo<GanttEvent[]>(
        () => data.filter(filterEvent).map(mapEvent).sort(sortByDate),
        [data, query],
    )

    return (
        <Grid item xs={12}>
            {!!events?.length ? <StyledGanttChart tasks={events} /> : <NoEventsNote />}
        </Grid>
    )
}

export default GanttChart
