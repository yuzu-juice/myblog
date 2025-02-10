import { Heart } from "lucide-react";

const AboutMe = () => {
    return (
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
    );
};

export default AboutMe;
