import { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 text-transparent bg-clip-text">
                            テックブログ
                        </h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-8">
                        {["ホーム", "記事一覧", "プロフィール"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-600 hover:text-orange-500 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
