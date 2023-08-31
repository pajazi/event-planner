import 'gantt-task-react/dist/index.css'
import StyledGanttChart from '@/components/gantt/StyledGanttChart'
import { Grid, useTheme } from '@mui/material'
import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { GanttEvent } from '@/interfaces/GanttEvent'
import NoEventsNote from '@/features/NoEventsNote'
import { fromUTCString, getEndOfDay, getStartOfDay } from '@/utils/date-time-utils'
import ViewEventDialog from '@/features/ViewEventDialog'

const GanttChart = () => {
    const theme = useTheme()
    const { query } = useRouter()
    const [viewEvent, setViewEvent] = useState(null)
    const { data } = useGetGanttEventsQuery()

    const { partnerId, dateStart, dateEnd, status } = query

    // This is the base Gantt Event
    const createBaseEvent = (event: GanttEvent): GanttEvent => ({
        ...event,
        start: getStartOfDay(new Date(event.dateStart)),
        end: getEndOfDay(new Date(event.dateEnd)),
        name: `${event.name.trim()} (${event.status})`,
        id: `${event.id}_duration`,
        type: 'task',
        project: event.status,
        progress: 0,
        isDisabled: true,
    })

    // Create Build event for the Gantt Graph
    // If it exists for the base event
    const createBuildEvent = (event: GanttEvent): GanttEvent => ({
        ...createBaseEvent(event),
        start: getStartOfDay(new Date(event.dateBuildStart!)),
        end: getEndOfDay(new Date(event.dateBuildEnd!)),
        name: `${event.name.trim()} (Build)`,
        id: `${event.id}_build`,
        styles: {
            backgroundColor: theme.palette['blue'].main,
        },
    })

    // Since we do not have an API, we will filter these results directly on the frontend
    // This would be normally done via backend
    const filterEvent = (event: GanttEvent): boolean =>
        getEndOfDay(fromUTCString(event.dateEnd)) >= new Date() &&
        (!status || event.status === status) &&
        (!partnerId || event.partner.id === partnerId) &&
        (!dateStart || fromUTCString(event.dateStart) >= fromUTCString(dateStart)) &&
        (!dateEnd || fromUTCString(event.dateEnd) <= fromUTCString(dateEnd))

    // Mapping the response to support the Gantt API
    // Reference: https://www.npmjs.com/package/gantt-task-react
    const mapEvents = (event: GanttEvent): GanttEvent[] => [
        createBaseEvent(event),
        ...(event?.dateBuildStart && event?.dateBuildEnd ? [createBuildEvent(event)] : []),
    ]

    const sortByDate = (event1: GanttEvent, event2: GanttEvent): number =>
        fromUTCString(event1.dateStart) - fromUTCString(event2.dateStart)

    const events = useMemo<GanttEvent[]>(
        () => data.filter(filterEvent).sort(sortByDate).flatMap(mapEvents),
        [data, query],
    )

    return (
        <Grid item xs={12}>
            {!!events?.length ? (
                <>
                    <StyledGanttChart tasks={events} onEventClick={(e) => setViewEvent(e)} />
                    <ViewEventDialog event={viewEvent} onClose={() => setViewEvent(null)} />
                </>
            ) : (
                <NoEventsNote />
            )}
        </Grid>
    )
}

export default GanttChart
