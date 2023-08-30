import { useGetPartnersQuery } from '@/redux/slices/partnerSlice'
import { Autocomplete, Box, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import { useTransition } from 'react'
import { Partner } from '@/interfaces/Partner'

const PartnerAutocomplete = () => {
    const { query, replace } = useRouter()
    const [_, startTransition] = useTransition()
    const { data: partners } = useGetPartnersQuery()

    const { partnerId } = query

    const getSelectedPartner = (): Partner => partners?.find((c) => c.id === partnerId)

    const onPartnerChange = (partner: Partner) => {
        startTransition(() => {
            replace({ query: { ...query, partnerId: partner?.id || '' } })
        })
    }

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
            onChange={(_, partner: Partner) => onPartnerChange(partner)}
            renderInput={(params) => <TextField {...params} label="Select a Partner" />}
        />
    )
}

export default PartnerAutocomplete
