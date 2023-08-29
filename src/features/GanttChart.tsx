import 'gantt-task-react/dist/index.css'
import StyledGanttChart from '@/components/gantt/StyledGanttChart'
import { Grid } from '@mui/material'
import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { GanttEvent } from '@/interfaces/GanttEvent'
import NoEventsNote from '@/features/NoEventsNote'

const GanttChart = () => {
    const { query } = useRouter()
    const { data } = useGetGanttEventsQuery()

    const { partnerId, dateStart, dateEnd } = query
    const start = new Date(dateStart?.toString())
    const end = new Date(dateEnd?.toString())

    // Since we do not have an API, we will filter these results directly on the frontend
    const filterEvent = (event: GanttEvent) =>
        (!partnerId || event.partner.id === partnerId) &&
        (!dateStart || event.dateStart >= start) &&
        (!dateEnd || event.dateEnd <= end)

    // Mapping the response to support the Gantt API
    // Reference: https://www.npmjs.com/package/gantt-task-react
    const mapEvent = (event: GanttEvent) => ({
        ...event,
        start: new Date(event.dateStart),
        end: new Date(event.dateEnd),
        name: `${event.name.trim()} (${event.status})`,
        id: event.id,
        type: 'task',
        project: event.status,
        progress: 0,
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    })

    const events = useMemo(() => data.map(mapEvent).filter(filterEvent), [data, query])

    return (
        <Grid item xs={12}>
            {!!events?.length ? <StyledGanttChart tasks={events} /> : <NoEventsNote />}
        </Grid>
    )
}

export default GanttChart
