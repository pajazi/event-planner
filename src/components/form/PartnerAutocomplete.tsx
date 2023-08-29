import { useGetPartnersQuery } from '@/redux/slices/partnerSlice'
import { Autocomplete, Box, TextField } from '@mui/material'
import { useRouter } from 'next/router'

const PartnerAutocomplete = () => {
    const { query, replace } = useRouter()
    const { data: partners } = useGetPartnersQuery()

    const { partnerId } = query

    const getSelectedPartner = () => partners?.find((c) => c.id === partnerId)

    return (
        <Autocomplete
            value={getSelectedPartner() || null}
            disablePortal
            options={partners}
            sx={{ width: 300 }}
            getOptionLabel={(partner) => `${partner.firstname} ${partner.lastname}` || ''}
            renderOption={(props, partner) => (
                <Box key={partner.id} {...props}>
                    {partner.firstname} {partner.lastname}
                </Box>
            )}
            onChange={(_, partner) =>
                replace({ query: { ...query, partnerId: partner?.id || '' } })
            }
            renderInput={(params) => <TextField {...params} label="Select a Partner" />}
        />
    )
}

export default PartnerAutocomplete
