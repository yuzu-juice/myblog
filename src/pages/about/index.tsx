import Languages from '@/components/about/Languages'
import Certifications from '@/components/about/Certifications'
import Education from '@/components/about/Education'
import Profile from '@/components/about/Profile'

const AboutPage = () => {
    return (
        <div>
            <div>
                <Profile />
                <Languages />
                <Certifications />
                <Education />
            </div>
        </div>
    )
}

export default AboutPage
