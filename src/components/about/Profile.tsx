import profileData from '@/data/profile.json'

const Profile = () => {
    return (
        <section className="mb-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-primary">{profileData.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{profileData.tagline}</p>
        </section>
    )
}

export default Profile
