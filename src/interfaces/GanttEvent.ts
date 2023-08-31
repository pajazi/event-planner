import { Partner } from '@/interfaces/Partner'
import { GanttStatus } from '@/utils/consts/ganttStatus'

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
    status: GanttStatus
    type: string
    project: string
    progress: number
    isDisabled: boolean
    partner: Partner
    dependencies?: string[]
    styles?: { backgroundColor: string }
}
