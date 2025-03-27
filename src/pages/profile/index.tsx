import { Github, Twitter } from 'lucide-react'
import AboutMe from '../../components/profile/AboutMe'
import Skills from '../../components/profile/Skills'
import Certifications from '../../components/profile/Certifications'

const ProfilePage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-20">
            {/* Construction Notice */}
            <div className="w-full bg-yellow-400 py-4 text-center fixed top-0 left-0 z-50 shadow-md">
                <p className="text-2xl font-bold text-gray-800">このサイトは作成中です</p>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Profile Header */}
                <section className="text-center mb-16">
                    <div className="mb-6">
                        <img
                            src="https://avatars.githubusercontent.com/u/121703872?v=4"
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
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-orange-500"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://x.com/yuzu_juice_sec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-orange-500"
                        >
                            <Twitter className="w-6 h-6" />
                        </a>
                    </div>
                </section>

                <AboutMe />
                <Skills />
                <Certifications />
            </div>
        </main>
    )
}

export default ProfilePage
