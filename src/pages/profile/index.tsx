import { BookOpen, Heart, Github, Twitter, Award } from "lucide-react";
import { useEffect } from "react";

const ProfilePage = () => {
    useEffect(() => {
        // LinkedIn Profile Badge Script
        const script = document.createElement("script");
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    const certificationsByCategory = {
        Google: [
            {
                name: "Associate Data Practitioner Certification",
                date: "Issued Feb 2025 · Expires Feb 2028",
                org: "Google",
            },
            {
                name: "Professional Data Engineer",
                date: "Issued Feb 2025 · Expires Feb 2027",
                org: "Google",
            },
            {
                name: "Professional Cloud DevOps Engineer",
                date: "Issued Jan 2025 · Expires Jan 2027",
                org: "Google",
            },
            {
                name: "Professional Google Workspace Administrator Certification",
                date: "Issued Sep 2024 · Expires Sep 2026",
                org: "Google",
            },
            {
                name: "Professional Cloud Developer",
                date: "Issued Jul 2024 · Expires Jul 2026",
                org: "Google",
            },
            {
                name: "Professional Cloud Architect",
                date: "Issued Feb 2024 · Expires Feb 2026",
                org: "Google Cloud",
            },
            {
                name: "Associate Cloud Engineer",
                date: "Issued Nov 2023 · Expires Nov 2026",
                org: "Google Cloud",
            },
            {
                name: "Professional Cloud Security Engineer",
                date: "Issued Nov 2023 · Expires Nov 2025",
                org: "Google Cloud",
            },
            {
                name: "Cloud Digital Leader",
                date: "Issued Oct 2023 · Expires Oct 2026",
                org: "Google Cloud",
            },
        ],
        AWS: [
            {
                name: "AWS Certified Machine Learning Engineer – Associate",
                date: "Issued Dec 2024 · Expires Dec 2027",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified AI Practitioner",
                date: "Issued Nov 2024 · Expires Nov 2027",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified Data Engineer – Associate",
                date: "Issued Jun 2024 · Expires Jun 2027",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified Advanced Networking – Specialty",
                date: "Issued Mar 2024 · Expires Mar 2027",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified: SAP on AWS – Specialty",
                date: "Issued Feb 2024 · Expires Feb 2027",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified Data Analytics – Specialty",
                date: "Issued Nov 2023 · Expires Nov 2026",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified DevOps Engineer – Professional",
                date: "Issued Oct 2023 · Expires Oct 2026",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified Machine Learning – Specialty",
                date: "Issued Oct 2023 · Expires Oct 2026",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified Solutions Architect – Professional",
                date: "Issued Oct 2023 · Expires Oct 2026",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified Database – Specialty",
                date: "Issued Sep 2023 · Expires Sep 2026",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified Security – Specialty",
                date: "Issued Jun 2023 · Expires Jun 2026",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified Developer – Associate",
                date: "Issued May 2023 · Expires May 2026",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified SysOps Administrator – Associate",
                date: "Issued Apr 2023 · Expires Apr 2026",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified Cloud Practitioner",
                date: "Issued Feb 2023 · Expires May 2026",
                org: "Amazon Web Services",
            },
            {
                name: "AWS Certified Solutions Architect – Associate",
                date: "Issued Feb 2023 · Expires Feb 2026",
                org: "Amazon Web Services",
            },
        ],
        Microsoft: [
            {
                name: "Microsoft Certified: Azure Data Fundamentals",
                date: "Issued Feb 2024",
                org: "Microsoft",
            },
            {
                name: "Microsoft 365 Certified: Fundamentals",
                date: "Issued Nov 2023",
                org: "Microsoft",
            },
            {
                name: "Microsoft Certified: Azure AI Fundamentals",
                date: "Issued Nov 2023",
                org: "Microsoft",
            },
            {
                name: "Microsoft Certified: Cybersecurity Architect Expert",
                date: "Issued Nov 2023 · Expires Nov 2025",
                org: "Microsoft",
            },
            {
                name: "Microsoft Certified: Power Platform Fundamentals",
                date: "Issued Nov 2023",
                org: "Microsoft",
            },
            {
                name: "Microsoft Certified: Azure Fundamentals",
                date: "Issued Oct 2023",
                org: "Microsoft",
            },
            {
                name: "Microsoft Certified: Azure Security Engineer Associate",
                date: "Issued Oct 2023 · Expires Oct 2025",
                org: "Microsoft",
            },
            {
                name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
                date: "Issued Oct 2023",
                org: "Microsoft",
            },
            {
                name: "Microsoft Certified: DevOps Engineer Expert",
                date: "Issued Sep 2023 · Expires Sep 2025",
                org: "Microsoft",
            },
            {
                name: "Microsoft Certified: Azure Administrator Associate",
                date: "Issued Apr 2023 · Expires Apr 2025",
                org: "Microsoft",
            },
        ],
        IPA: [
            { name: "応用情報技術者", date: "Issued Apr 2024", org: "IPA" },
            {
                name: "情報セキュリティマネジメント",
                date: "Issued Sep 2023",
                org: "IPA",
            },
            { name: "基本情報技術者", date: "Issued Apr 2023", org: "IPA" },
            { name: "ITパスポート", date: "Issued Aug 2022", org: "IPA" },
        ],
        JDLA: [
            {
                name: "JDLA Deep Learning for GENERAL 2023 #2",
                date: "Issued May 2023",
                org: "JDLA",
            },
        ],
        Others: [
            {
                name: "メンタルヘルス・マネジメント検定II種",
                date: "Issued Mar 2023",
                org: "大阪商工会議所",
            },
        ],
    };

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
                    {Object.entries(certificationsByCategory).map(
                        ([category, certs]) => (
                            <div key={category} className="mb-8">
                                <h3 className="text-xl font-bold mb-4">
                                    {category}
                                </h3>
                                <div className="space-y-4">
                                    {certs.map((cert) => (
                                        <div
                                            key={cert.name}
                                            className="flex justify-between items-center p-4 bg-orange-50 rounded-lg"
                                        >
                                            <div>
                                                <span className="text-gray-700 font-medium">
                                                    {cert.name}
                                                </span>
                                                <span className="text-gray-500 text-sm ml-2">
                                                    ({cert.org})
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                {cert.date
                                                    .split("·")
                                                    .map((text, i) => (
                                                        <span
                                                            key={i}
                                                            className="block text-xs text-gray-500"
                                                        >
                                                            {text.trim()}
                                                        </span>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </section>
            </div>
        </main>
    );
};

export default ProfilePage;
