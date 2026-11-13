import { CalendarDays, ExternalLink } from 'lucide-react'
import Section from './Section'
import AccordionList from './AccordionList'
import DateRow from './DateRow'
import activitiesData from '@/data/activities.json'
import { getMonthNumber, getYear } from '@/lib/utils/formatDate'

interface Activity {
    date: string
    title: string
    description?: string
    link?: string
}

const activities = activitiesData as Activity[]

const groups = activities.reduce<Record<string, Activity[]>>((acc, activity) => {
    const year = getYear(activity.date)
    ;(acc[year] ??= []).push(activity)
    return acc
}, {})

const years = Object.keys(groups).sort()

const decades = years.reduce<Record<string, string[]>>((acc, year) => {
    const decade = `${Math.floor(Number(year) / 10) * 10}s`
    ;(acc[decade] ??= []).push(year)
    return acc
}, {})

const formatActivityMonth = (value: string) => {
    const month = getMonthNumber(value)
    return month ? `${month}月` : '—'
}

const yearContent = (year: string) => (
    <ul className="space-y-5 pt-2">
        {groups[year].map((activity) => (
            <DateRow key={`${activity.date}-${activity.title}`} date={formatActivityMonth(activity.date)}>
                <div>
                    <p className="text-foreground">
                        {activity.link ? (
                            <a
                                href={activity.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 hover:text-primary"
                            >
                                {activity.title}
                                <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                        ) : (
                            activity.title
                        )}
                    </p>
                    {activity.description && (
                        <p className="mt-1 text-base text-muted-foreground sm:text-sm">{activity.description}</p>
                    )}
                </div>
            </DateRow>
        ))}
    </ul>
)

const Activities = () => {
    const items = Object.keys(decades)
        .sort()
        .map((decade) => ({
            value: decade,
            trigger: decade,
            content: (
                <AccordionList
                    items={decades[decade].map((year) => ({
                        value: year,
                        trigger: year,
                        content: yearContent(year)
                    }))}
                    triggerClassName="text-sm font-semibold text-foreground hover:no-underline"
                    showCloseButton={false}
                />
            )
        }))

    return (
        <Section icon={CalendarDays} title="Activities">
            <AccordionList
                items={items}
                triggerClassName="text-base font-semibold text-primary hover:no-underline"
                showCloseButton={false}
            />
        </Section>
    )
}

export default Activities
