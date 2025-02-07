import { BookOpen, Heart, Github, Twitter, Award } from "lucide-react";

const ProfilePage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-20">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Profile Header */}
                <section className="text-center mb-16">
                    <div className="mb-6">
                        <img
                            src="/profile-image.jpg"
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
                        />
                    </div>
                    <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-300 text-transparent bg-clip-text">
                        yuzu-juice
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">Engineer</p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://github.com/yuzu-juice"
                            className="text-gray-600 hover:text-orange-500"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://x.com/yuzu_juice_sec"
                            className="text-gray-600 hover:text-orange-500"
                        >
                            <Twitter className="w-6 h-6" />
                        </a>
                    </div>
                </section>

                {/* About Section */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                        <Heart className="w-6 h-6 text-orange-500" />
                        About Me
                    </h2>
                    <div className="prose prose-orange">
                        <p className="text-gray-600 leading-relaxed">
                            フロントエンド開発に情熱を注ぐエンジニアです。
                            React、TypeScript、Next.jsを主に使用しており、
                            UIのクオリティとユーザー体験の向上に特にこだわっています。
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                        <BookOpen className="w-6 h-6 text-orange-500" />
                        Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "React",
                            "TypeScript",
                            "Next.js",
                            "Tailwind CSS",
                            "Node.js",
                            "GraphQL",
                        ].map((skill) => (
                            <div
                                key={skill}
                                className="bg-orange-50 rounded-lg p-3 text-center"
                            >
                                <span className="text-gray-700">{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                        <Award className="w-6 h-6 text-orange-500" />
                        Certifications
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                name: "hoge",
                                date: "2023年取得",
                            },
                            {
                                name: "hoge",
                                date: "2022年取得",
                            },
                            {
                                name: "hoge",
                                date: "2021年取得",
                            },
                        ].map((cert) => (
                            <div
                                key={cert.name}
                                className="flex justify-between items-center p-4 bg-orange-50 rounded-lg"
                            >
                                <span className="text-gray-700 font-medium">
                                    {cert.name}
                                </span>
                                <span className="text-gray-500 text-sm">
                                    {cert.date}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProfilePage;
