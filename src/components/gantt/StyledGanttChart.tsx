import 'gantt-task-react/dist/index.css'
import { Gantt } from 'gantt-task-react'
import { Box, useTheme } from '@mui/material'
import { memo } from 'react'
import PropTypes from 'prop-types'
import { GanttEvent } from "@/interfaces/GanttEvent";

const StyledGanttChart = ({ tasks }) => {
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
                tasks={tasks}
                fontFamily={'Roboto'}
                fontSize={'15px'}
                columnWidth={80}
                listCellWidth={'285px'}
                barBackgroundColor={theme.palette.primary.main}
            />
        </Box>
    )
}

StyledGanttChart.propTypes = {
    tasks: PropTypes.array<GanttEvent>.isRequired,
}

export default memo(StyledGanttChart)
