import { MapPin } from 'lucide-react'
import Section from './Section'
import DateRow from './DateRow'
import locations from '@/data/locations.json'
import { formatMonth } from '@/lib/utils/formatDate'

const Location = () => {
    return (
        <Section icon={MapPin} title="Location">
            <ul className="space-y-2">
                {locations.map((location) => (
                    <DateRow
                        key={location.label}
                        date={`${formatMonth(location.start)} — ${location.end ? formatMonth(location.end) : '現在'}`}
                    >
                        <span className="text-foreground">{location.label}</span>
                    </DateRow>
                ))}
            </ul>
        </Section>
    )
}

export default Location
