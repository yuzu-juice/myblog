import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navigationItems = [
        { label: 'Home', href: '/' },
        { label: 'Works', href: '/works' },
        { label: 'Posts', href: '/posts' },
        { label: 'About', href: '/about' }
    ]

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 bg-secondary border-b-2 border-primary">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-12 sm:h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <h1 className="text-2xl sm:text-3xl font-bold">yuzu-juice.dev</h1>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-6">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className="hover:text-primary transition-colors text-sm sm:text-base"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <button className="p-2">
                                    <Menu className="h-6 w-6" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-64">
                                <nav className="flex flex-col space-y-4 mt-8">
                                    {navigationItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            to={item.href}
                                            className="text-lg hover:text-primary transition-colors py-2 text-center"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
