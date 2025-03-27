import { useState, useEffect } from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Construction Notice Banner */}
            <div className="w-full bg-yellow-400 py-3 text-center fixed top-0 left-0 z-50 shadow-md">
                <p className="text-2xl font-bold text-gray-800">このサイトは作成中です</p>
            </div>

            <header
                className={`fixed top-12 left-0 right-0 z-40 transition-all duration-300 ${
                    isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
            >
                <style>{`
                    @keyframes lineWidth {
                        0% {
                            width: 0;
                        }
                        45% {
                            width: 100%;
                        }
                        55% {
                            width: 0;
                        }
                        100% {
                            width: 100%;
                        }
                    }
                `}</style>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="/">
                                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 text-transparent bg-clip-text Oswald">
                                    yuzu-juice.dev
                                </h1>
                            </a>
                        </div>

                        {/* Navigation */}
                        <nav className="flex items-center space-x-8">
                            {[
                                { label: 'ホーム', href: '/' },
                                { label: '記事一覧', href: '/posts' },
                                { label: 'プロフィール', href: '/profile' }
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-600 hover:text-orange-500 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-orange-500 after:transition-all after:duration-500 after:ease-out hover:after:w-full"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
