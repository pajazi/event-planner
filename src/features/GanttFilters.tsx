import { Box, Button, Grid } from '@mui/material'
import PartnerAutocomplete from '@/components/form/PartnerAutocomplete'
import { useRouter } from 'next/router'
import DateFilter from '@/components/form/DateFilter'
import Image from 'next/image'

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
