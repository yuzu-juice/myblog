import { BookOpen } from "lucide-react";

const Skills = () => {
    return (
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
    );
};

export default Skills;
