import { SquareTerminal } from 'lucide-react'
import Profile from '@/components/about/Profile'
import Location from '@/components/about/Location'
import Languages from '@/components/about/Languages'
import Links from '@/components/about/Links'
import Certifications from '@/components/about/Certifications'
import Education from '@/components/about/Education'
import Section from '@/components/about/Section'
import Activities from '@/components/about/Activities'
import { Badge } from '@/components/ui/badge'

const AboutPage = () => {
    return (
        <div className="pb-8">
            <Profile />

            <Activities />

            <Location />

            <Languages />

            <Section icon={SquareTerminal} title="Main Editor">
                <Badge variant="default" className="text-sm px-3 py-1">
                    Emacs
                </Badge>
            </Section>

            <Links />

            <Education />
            <Certifications />
        </div>
    )
}

export default AboutPage
