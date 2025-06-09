import Profile from '@/components/about/Profile'
import ProjectCarousel from '@/components/home/ProjectCarousel'
import worksData from '@/data/works.json'

const HomePage = () => {
    return (
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <Profile />

            {/* Works Section */}
            <section>
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center text-primary flex items-center justify-center gap-2">
                    Works
                </h2>
                <ProjectCarousel projects={worksData} />
            </section>

            {/* Latest Articles Section */}
            {/* <section className="mx-4 sm:mx-8 lg:mx-16">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center text-primary flex items-center justify-center gap-2">
                    Latest Posts
                </h2>
                <div className="text-center mb-8 text-base sm:text-lg">記事はまだありません。</div>
            </section> */}
        </div>
    )
}

export default HomePage
