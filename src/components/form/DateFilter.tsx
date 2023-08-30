import { useRouter } from 'next/router'
import { useEffect, useState, useTransition } from 'react'
import { formatDateFilter } from '@/utils/formatters'
import RangePicker from '@/components/tremor/RangePicker'
import { fromUTCString } from '@/utils/date-time-utils'

const DateFilter = () => {
    const { query, push } = useRouter()
    const [_, startTransition] = useTransition()
    const dateStart = query.dateStart
    const dateEnd = query.dateEnd

    const [selectedRange, setSelectedRange] = useState(getSelectedRange())

    function getSelectedRange(): { dateStart: Date; dateEnd: Date } {
        return {
            dateStart: fromUTCString(dateStart),
            dateEnd: fromUTCString(dateEnd),
        }
    }

    const onRangeChange = (range: { dateStart: Date; dateEnd: Date }) => {
        startTransition(() => {
            push({
                query: {
                    ...query,
                    dateStart: formatDateFilter(range.dateStart),
                    dateEnd: formatDateFilter(range.dateEnd),
                },
            })
            setSelectedRange(range)
        })
    }

    useEffect(() => setSelectedRange(getSelectedRange()), [dateStart, dateEnd])

    return <RangePicker selectedRange={selectedRange} onRangeChange={onRangeChange} />
}

export default DateFilter
