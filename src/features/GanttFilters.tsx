import { Box, Button, Grid } from '@mui/material'
import PartnerAutocomplete from '@/components/form/PartnerAutocomplete'
import { useRouter } from 'next/router'
import DateFilter from '@/components/form/DateFilter'
import Image from 'next/image'
import StatusAutocomplete from '@/components/form/StatusAutocomplete'

const GanttFilters = () => {
    const { replace } = useRouter()

    return (
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
                src={'/dataspilot.jpeg'}
                alt={'Logo'}
                width={50}
                height={50}
                sx={{ alignSelf: 'flex-start' }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, ml: 'auto' }}>
                <StatusAutocomplete />
                <PartnerAutocomplete />
                <DateFilter />
                <Button
                    variant="contained"
                    sx={{ height: 40, textTransform: 'none' }}
                    onClick={() => replace({ query: '' })}
                >
                    Clear Filters
                </Button>
            </Box>
        </Grid>
    )
}

export default GanttFilters
