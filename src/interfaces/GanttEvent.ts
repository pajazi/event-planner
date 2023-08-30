import { Partner } from '@/interfaces/Partner'

export interface GanttEvent {
    id: string
    jobId: string
    name: string
    dateBuildStart?: string
    dateBuildEnd?: string
    dateStart: string
    dateEnd: string
    start: Date
    end: Date
    status: 'Production' | 'Offer' | 'Closed' | 'Cancelled'
    type: string
    project: string
    progress: number
    isDisabled: boolean
    partner: Partner
}
