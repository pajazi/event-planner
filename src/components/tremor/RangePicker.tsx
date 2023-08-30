import { useEffect, useState } from 'react'
import StyledRangePicker from '@/components/tremor/StyledRangePicker'
import { areDatesEqual, getStartOfDay, subtractDays } from '@/utils/date-time-utils'
import PropTypes from 'prop-types'

const RangePicker = ({ onRangeChange, selectedRange }) => {
    const [customRange, setCustomRange] = useState<{ dateStart: Date; dateEnd: Date }>(null)

    const onRangeSelect = ([dateStart, dateEnd]: [Date, Date]) => {
        const range = { dateStart, dateEnd }

        // dateEnd must be greater than current date
        // dateEnd > currentDate
        if (areDatesEqual(dateEnd, getStartOfDay(new Date()))) {
            setCustomRange(null)
            return
        }

        if (dateStart && dateEnd) {
            onRangeChange(range)
        } else {
            // if there is no dateEnd, the user is picking it
            setCustomRange(range)
        }
    }

    const getPickerValue = () => [
        (customRange || selectedRange).dateStart,
        (customRange || selectedRange).dateEnd,
    ]

    useEffect(() => setCustomRange(null), [selectedRange])

    useEffect(() => {
        if (customRange?.dateStart && customRange?.dateEnd) {
            onRangeChange(customRange)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [customRange])

    return (
        <StyledRangePicker
            value={getPickerValue()}
            onValueChange={onRangeSelect}
            minDate={subtractDays(new Date(), 1)}
            enableYearPagination
            enableClear={false}
            placeholder="Custom Date Range"
            enableDropdown={false}
        />
    )
}

RangePicker.propTypes = {
    onRangeChange: PropTypes.func.isRequired,
    selectedRange: PropTypes.object.isRequired,
}

export default RangePicker
