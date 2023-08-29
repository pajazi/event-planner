import { api } from '../apiSlice'
import TAGS from '../cacheTags'
import { Partner } from '@/interfaces/Partner'

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPartners: build.query<Partner[]>({
            query: (params) => ({
                url: `partners/`,
                params,
            }),
            providesTags: [TAGS.partners],
        }),
    }),
})

export const { useGetPartnersQuery } = extendedApi
