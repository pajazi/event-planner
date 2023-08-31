import { useRouter } from 'next/router'
import { useTransition } from 'react'
import { Autocomplete, Box, TextField } from '@mui/material'
import { GanttStatus } from '@/utils/consts/ganttStatus'

const StatusAutocomplete = () => {
    const { query, replace } = useRouter()
    const [_, startTransition] = useTransition()
    const statuses = Object.keys(GanttStatus)

    const { status } = query

    const getSelectedStatus = (): string => statuses?.find((s) => s === status)

    const onStatusChange = (status: string = '') => {
        startTransition(() => {
            replace({ query: { ...query, status } })
        })
    }

    return (
        <Autocomplete
            value={getSelectedStatus() || null}
            disablePortal
            options={statuses}
            sx={{ width: 300 }}
            getOptionLabel={(status: string) => status || ''}
            renderOption={(props, status: string) => (
                <Box key={status} {...props}>
                    {status}
                </Box>
            )}
            onChange={(_, status: string) => onStatusChange(status)}
            renderInput={(params) => <TextField {...params} label="Select a Status" />}
        />
    )
}

export default StatusAutocomplete
