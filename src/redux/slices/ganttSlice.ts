import { api } from '../apiSlice'
import TAGS from '../cacheTags'
import { GanttEvent } from '@/interfaces/GanttEvent'

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        getGanttEvents: build.query<GanttEvent[]>({
            query: (params) => ({
                url: `events/`,
                params,
            }),
            providesTags: [TAGS.ganttEvents],
        }),
    }),
})

export const { useGetGanttEventsQuery } = extendedApi
