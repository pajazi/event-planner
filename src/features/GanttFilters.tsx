import { Button, Grid } from '@mui/material'
import PartnerAutocomplete from '@/components/form/PartnerAutocomplete'
import { useRouter } from 'next/router'

const GanttFilters = () => {
    const { replace } = useRouter()

    return (
        <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3 }}
        >
            <PartnerAutocomplete />
            <Button
                variant="contained"
                sx={{ height: 40, textTransform: 'none' }}
                onClick={() => replace({ query: '' })}
            >
                Clear Filters
            </Button>
        </Grid>
    )
}

export default GanttFilters
