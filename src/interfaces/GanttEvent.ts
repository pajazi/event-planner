import { Partner } from '@/interfaces/Partner'

export interface GanttEvent {
    id: string
    jobId: string
    name: string
    dateBuildStart?: string
    dateBuildEnd?: string
    dateStart: string
    dateEnd: string
    status: 'Production' | 'Offer' | 'Closed' | 'Cancelled'
    partner: Partner
}
