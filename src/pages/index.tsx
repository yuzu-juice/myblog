const HomePage = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center">
            {/* Container for centering content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Welcome Section */}
                <section className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        Welcome to My Tech Blog
                    </h2>
                    <p className="text-lg text-gray-600">
                        This is a place where I share my knowledge and insights
                        about the latest in technology, programming, and
                        software development.
                    </p>
                </section>

                {/* Latest Posts Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Latest Posts
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                Understanding React Hooks
                            </h3>
                            <p className="text-gray-600 mb-4">
                                A deep dive into React Hooks and how to use them
                                effectively.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Read more →
                            </a>
                        </article>

                        <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                A Guide to Modern CSS
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Learn about the latest features and techniques
                                in CSS.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Read more →
                            </a>
                        </article>

                        <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                JavaScript ES2021 Features
                            </h3>
                            <p className="text-gray-600 mb-4">
                                An overview of the new features introduced in
                                ES2021.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Read more →
                            </a>
                        </article>
                    </div>
                </section>

                {/* About Me Section */}
                <section className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-600">
                        I'm a software developer with a passion for learning and
                        teaching. Follow my blog to stay updated with the latest
                        trends in tech.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default HomePage;
