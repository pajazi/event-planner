import 'gantt-task-react/dist/index.css'
import { Gantt } from 'gantt-task-react'
import { Box, useTheme } from '@mui/material'

const StyledGanttChart = (props) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                '& > div': {
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: '6px',
                    overflow: 'hidden',
                },
            }}
        >
            <Gantt
                {...props}
                fontFamily={'Roboto'}
                fontSize={'15px'}
                columnWidth={80}
                listCellWidth={'300px'}
                barBackgroundColor={theme.palette.primary.main}
            />
        </Box>
    )
}

export default StyledGanttChart
