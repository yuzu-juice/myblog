import React from 'react'
import { ArrowLeft } from 'lucide-react'

interface HeroSectionProps {
    project: {
        image: string
        title: string
        description: string
    }
    onGoBack: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ project, onGoBack }) => {
    return (
        <div className="relative h-96 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform scale-110 transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Back button overlay */}
            <button
                onClick={onGoBack}
                className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-primary transition-colors duration-300 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
            >
                <ArrowLeft className="w-4 h-4" />
                Back
            </button>

            {/* Project title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="container mx-auto">
                    <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
                    <p className="text-xl text-gray-200 max-w-2xl">{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
