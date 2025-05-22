import { Github, Twitter, Linkedin } from 'lucide-react'
import Languages from '@/components/profile/Languages'
import Certifications from '@/components/profile/Certifications'
import Education from '@/components/profile/Education'

const ProfilePage = () => {
    return (
        <div>
            <div>
                {/* Flex container for Profile Header and Self-introduction */}
                <div className="flex flex-col md:flex-row gap-8 m-16">
                    {/* Profile Header */}
                    <section className="text-center md:text-left md:w-1/3 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold mb-2 text-primary">yuzu-juice</h1>
                        <p className="text-2xl text-muted-foreground mb-1">Taichi Kitagawa</p>
                        <p className="text-lg text-muted-foreground mb-6">Engineer</p>
                        <div className="flex justify-center md:justify-start gap-6">
                            <a
                                href="https://github.com/yuzu-juice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary"
                            >
                                <Github className="w-7 h-7" />
                            </a>
                            <a
                                href="https://x.com/yuzu_juice_sec"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary"
                            >
                                <Twitter className="w-7 h-7" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/taichi-kitagawa-777664278/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary"
                            >
                                <Linkedin className="w-7 h-7" />
                            </a>
                        </div>
                    </section>

                    {/* Self-introduction */}
                    <div className="md:w-2/3 flex flex-col justify-center">
                        <p className="text-lg text-muted-foreground p-2">
                            東京を拠点に活動しているエンジニア。
                            <br />
                            セキュリティとクラウド技術が得意。
                        </p>
                        <p className="text-md text-muted-foreground p-2">
                            I'm an engineer based in Tokyo.
                            <br />
                            Specializing in security and cloud technologies.
                        </p>
                    </div>
                </div>

                <Languages />
                <Certifications />
                <Education />
            </div>
        </div>
    )
}

export default ProfilePage
