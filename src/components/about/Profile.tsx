import { Github, Twitter, Linkedin } from 'lucide-react'
import profileData from '@/data/profile.json'

const Profile = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 m-10">
            {/* Profile Header */}
            <section className="text-center md:text-left md:w-2/3 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-2 text-primary">{profileData.name}</h1>
                <p className="text-lg text-muted-foreground mb-6">{profileData.title}</p>
                <div className="flex justify-center md:justify-start gap-6">
                    <a
                        href={profileData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary"
                    >
                        <Github className="w-7 h-7" />
                    </a>
                    <a
                        href={profileData.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary"
                    >
                        <Twitter className="w-7 h-7" />
                    </a>
                    <a
                        href={profileData.social.linkedin}
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
                <p className="text-lg text-muted-foreground p-2">{profileData.bio.ja}</p>
                <p className="text-md text-muted-foreground p-2">{profileData.bio.en}</p>
            </div>
        </div>
    )
}

export default Profile
