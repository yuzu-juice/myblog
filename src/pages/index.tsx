import { Heart, BookOpen, User } from "lucide-react";

const HomePage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-60" />
            <div className="absolute top-40 right-20 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-60" />

            {/* Main content container */}
            <div className="relative max-w-5xl mx-auto px-6 py-12">
                {/* Latest Posts Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center gap-2">
                        <BookOpen className="w-6 h-6 text-orange-500" />
                        最新の記事
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "React Hooksを理解する",
                                description:
                                    "React Hooksの深い理解と効果的な使い方について",
                                color: "from-orange-400",
                            },
                            {
                                title: "モダンCSSガイド",
                                description:
                                    "CSSの最新機能とテクニックについて学ぶ",
                                color: "from-amber-400",
                            },
                            {
                                title: "JavaScript ES2021の新機能",
                                description: "ES2021で導入された新機能の概要",
                                color: "from-orange-400",
                            },
                        ].map((post, index) => (
                            <article
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                            >
                                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${post.color} to-purple-500" />
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {post.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium"
                                >
                                    もっと読む
                                    <Heart className="w-4 h-4" />
                                </a>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HomePage;
