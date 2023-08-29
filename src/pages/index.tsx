import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import { useGetPartnersQuery } from '@/redux/slices/partnerSlice'
import DefaultLayout from '@/layouts'
import GanttChart from '@/features/GanttChart'
import GanttFilters from '@/features/GanttFilters'
import { Grid } from '@mui/material'
import LoadingIndicator from '@/components/common/LoadingIndicator'

export default function Home() {
    const { isFetching: isFetchingEvents } = useGetGanttEventsQuery()
    const { isFetching: isFetchingPartners } = useGetPartnersQuery()

    const isFetching = isFetchingPartners || isFetchingEvents

    if (isFetching) {
        return <LoadingIndicator />
    }

    return (
        <DefaultLayout>
            <Grid container sx={{ display: 'flex', gap: 2 }}>
                <GanttFilters />
                <GanttChart />
            </Grid>
        </DefaultLayout>
    )
}
