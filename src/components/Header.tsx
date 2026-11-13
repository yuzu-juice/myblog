const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-secondary border-b-2 border-primary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center h-12 sm:h-16">
                    <a href="/" className="inline-block hover:no-underline">
                        <h1 className="text-2xl sm:text-3xl font-bold">yuzu-juice.dev</h1>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
