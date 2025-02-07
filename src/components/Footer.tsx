const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 text-transparent bg-clip-text">
                            テックブログ
                        </h3>
                        <p className="text-gray-500">
                            デジタルの最前線を、一記事ずつ探求しています ✨
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                            クイックリンク
                        </h4>
                        <ul className="space-y-2">
                            {[
                                "ホーム",
                                "記事一覧",
                                "プロジェクト",
                                "プロフィール",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-orange-500"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                            ニュースレター購読
                        </h4>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="メールアドレスを入力"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                            <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-lg hover:from-orange-500 hover:to-amber-500 transition-all">
                                購読する
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
