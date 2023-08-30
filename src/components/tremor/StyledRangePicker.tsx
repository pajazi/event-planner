import { DateRangePicker } from '@tremor/react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

const StyledRangePicker = ({
    value,
    onValueChange,
    enableDropdown,
    minDate,
    enableYearPagination,
    enableClear,
}) => (
    <Box
        sx={{
            '*': {
                boxSizing: 'border-box',
                borderWidth: '0',
                borderStyle: 'solid',
            },
            button: {
                height: '40px !important',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                lineHeight: 'inherit',
                margin: 0,
                padding: 0,
                textTransform: 'none',
                WebkitAppearance: 'button',
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                cursor: 'pointer',
            },
            '.tremor-DateRangePicker-calendarModal, .tremor-DateRangePicker-button': {
                button: {
                    boxShadow: 'none !important',
                    display: 'flex !important',
                    minWidth: 'fit-content !important',
                    alignItems: 'center !important',
                    '.text-sm': {
                        fontWeight: '500 !important',
                        fontSize: '17px !important',
                        lineHeight: '20px !important',
                        minWidth: 'fit-content !important',
                        mr: 1,
                    },
                },
            },
            '.tremor-DateRangePicker-calendarModal': {
                '.tremor-DateRangePicker-calendarHeader': {
                    height: '40px',
                    py: '0px !important',
                    button: {
                        margin: '0px !important',
                        border: '1px solid rgb(230, 235, 237) !important;',
                    },
                },
                '.tremor-DateRangePicker-calendarBodyWeekdays': {
                    '& > *': {
                        height: '40px !important',
                        display: 'flex !important',
                        alignItems: 'center !important',
                        color: 'rgb(156, 163, 175) !important',
                    },
                },
            },
            '.tremor-DateRangePicker-button': {
                boxShadow: 'none !important',
                button: {
                    border: 'none',
                    '*': { color: 'black !important' },
                },
                '.tremor-DateRangePicker-calendarButton': {
                    // This hides the custom date picker and only shows the options dropdown
                    display: 'flex !important',
                    width: 'auto !important',
                    height: '56px !important',
                    border: '1px solid gray',
                },
                '.tremor-DateRangePicker-dropdownButton': {
                    width: 'auto !important',
                },
            },
            '.absolute': {
                minWidth: 'fit-content !important',
                maxHeight: '300px !important',
            },
        }}
    >
        <DateRangePicker
            value={value}
            onValueChange={onValueChange}
            enableDropdown={enableDropdown}
            minDate={minDate}
            color="pink"
            enableYearPagination={enableYearPagination}
            enableClear={enableClear}
        />
    </Box>
)

StyledRangePicker.propTypes = {
    value: PropTypes.array.isRequired,
    onValueChange: PropTypes.func.isRequired,
    minDate: PropTypes.object,
    enableYearPagination: PropTypes.bool,
    enableClear: PropTypes.bool,
    placeholder: PropTypes.string,
    enableDropdown: PropTypes.bool,
}

export default StyledRangePicker
