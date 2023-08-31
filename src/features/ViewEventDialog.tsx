import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { GanttEvent } from '@/interfaces/GanttEvent'

const ViewEventDialog = ({ event, onClose }: { event: GanttEvent }) => {
    return (
        !!event && (
            <Dialog open={!!event} onClose={onClose} maxWidth="sm" fullWidth>
                <DialogTitle>{event?.name}</DialogTitle>
                <DialogContent sx={{ display: 'flex', gap: 3, flexDirection: 'column' }}>
                    <TextField value={event?.name} fullWidth label="Name" sx={{ mt: 2 }} />
                    <TextField value={event?.status} fullWidth label="Status" />
                    <TextField value={event?.partner?.firstname} fullWidth label="Partner Name" />
                    <TextField
                        value={event?.partner?.lastname}
                        fullWidth
                        label="Partner Last Name"
                    />
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
                    <Button variant="contained" onClick={onClose}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        )
    )
}

ViewEventDialog.propTypes = {
    event: PropTypes.object,
    onClose: PropTypes.func,
}

export default ViewEventDialog
