import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center">
            <AlertTriangle className="w-16 h-16 text-primary mb-6" />
            <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
            <p className="text-xl text-foreground mb-2">このページは存在しません。</p>
            <p className="text-lg text-muted-foreground mb-8">残念です。</p>
            <Button
                asChild
                variant="outline"
                className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            >
                <Link to="/">Return to Base</Link>
            </Button>
        </div>
    )
}

export default NotFoundPage
