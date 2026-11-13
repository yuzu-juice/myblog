import { useState, type ReactNode } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export interface AccordionListItem {
    value: string
    trigger: ReactNode
    content: ReactNode
}

interface AccordionListProps {
    items: AccordionListItem[]
    triggerClassName?: string
}

const AccordionList = ({ items, triggerClassName }: AccordionListProps) => {
    const [openItem, setOpenItem] = useState<string>('')

    return (
        <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
            {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className={triggerClassName}>{item.trigger}</AccordionTrigger>
                    <AccordionContent>
                        {item.content}
                        <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm" onClick={() => setOpenItem('')}>
                                閉じる
                            </Button>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default AccordionList
