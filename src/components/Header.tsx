import { Link } from 'react-router-dom'

const Header = () => {
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

                        {/* Navigation */}
                        <nav className="flex items-center space-x-6">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'Works', href: '/works' },
                                { label: 'Posts', href: '/posts' },
                                { label: 'About', href: '/about' }
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className="hover:text-primary transition-colors text-sm sm:text-base"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
