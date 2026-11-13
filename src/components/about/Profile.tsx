import profileData from '@/data/profile.json'

const Profile = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
            {/* Profile Header */}
            <section className="text-center md:text-left flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-2 text-primary">{profileData.name}</h1>
            </section>

            {/* Self-introduction */}
            <div className="flex flex-col justify-center">
                <p className="text-lg text-muted-foreground p-2">{profileData.bio.ja}</p>
            </div>
        </div>
    )
}

export default Profile
