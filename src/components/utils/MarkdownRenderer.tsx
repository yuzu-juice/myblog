import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

interface MarkdownRendererProps {
    content: string
    className?: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
    return (
        <div className={className}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={{
                    h1: ({ children }) => <h1 className="text-2xl font-bold mb-6 text-foreground">{children}</h1>,
                    h2: ({ children }) => (
                        <h2 className="text-xl font-semibold mb-4 mt-8 text-foreground">{children}</h2>
                    ),
                    h3: ({ children }) => <h3 className="text-lg font-medium mb-3 mt-6 text-foreground">{children}</h3>,
                    p: ({ children }) => <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>,
                    br: () => <br />,
                    code: ({ children, className }) => {
                        const isInline = !className
                        return isInline ? (
                            <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">
                                {children}
                            </code>
                        ) : (
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                                <code className="text-sm font-mono">{children}</code>
                            </pre>
                        )
                    },
                    ul: ({ children }) => <ul className="list-disc ml-6 mb-4 space-y-1">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal ml-6 mb-4 space-y-1">{children}</ol>,
                    li: ({ children }) => <li className="text-muted-foreground leading-relaxed">{children}</li>,
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
                            {children}
                        </blockquote>
                    ),
                    a: ({ children, href }) => (
                        <a
                            href={href}
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {children}
                        </a>
                    ),
                    hr: () => <hr className="my-8 border-muted-foreground/20" />
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownRenderer
