import type { ReactNode } from 'react'

interface DateRowProps {
    date: ReactNode
    children: ReactNode
}

const DateRow = ({ date, children }: DateRowProps) => {
    return (
        <li className="grid grid-cols-[8.5rem_1fr] items-baseline gap-3">
            <span className="whitespace-nowrap text-sm tabular-nums text-muted-foreground">{date}</span>
            {children}
        </li>
    )
}

export default DateRow
