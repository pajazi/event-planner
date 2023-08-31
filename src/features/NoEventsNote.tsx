import { Box } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const NoEventsNote = () => (
    <Box
        sx={{
            p: 2,
            pr: 3,
            gap: 1,
            height: 200,
            fontSize: 18,
            display: 'flex',
            background: '#F2F5F6',
            borderRadius: '6px',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <InfoOutlinedIcon /> There are no events for the specified criteria.
    </Box>
)

export default NoEventsNote
