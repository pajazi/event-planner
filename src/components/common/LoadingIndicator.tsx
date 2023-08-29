import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

const LoadingIndicator = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress />
        </Box>
    )
}

export default LoadingIndicator
