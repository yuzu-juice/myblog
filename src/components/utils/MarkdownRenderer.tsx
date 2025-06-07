import React from 'react'
import ReactMarkdown from 'react-markdown'

interface MarkdownRendererProps {
    content: string
    className?: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
    return (
        <div className={className}>
            <ReactMarkdown
                components={{
                    h1: ({children}) => <h1 className="text-3xl font-bold mb-6 text-foreground">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">{children}</h2>,
                    ul: ({children}) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
                    li: ({children}) => <li className="mb-2 text-muted-foreground">{children}</li>,
                    strong: ({children}) => <strong className="font-bold text-foreground">{children}</strong>,
                    p: ({children}) => <p className="mb-4 text-muted-foreground">{children}</p>
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownRenderer
