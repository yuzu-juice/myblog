import { Link as LinkIcon } from 'lucide-react'
import Section from './Section'
import profileData from '@/data/profile.json'

const links = [
    { label: 'GitHub', href: profileData.social.github },
    { label: 'LinkedIn', href: profileData.social.linkedin },
    { label: 'Note (yuzu_juice)', href: profileData.social.note },
    { label: 'Note (anti_sdgs_)', href: profileData.social.noteAntiSdgs },
    { label: 'Qiita', href: profileData.social.qiita }
].filter((link) => link.href)

const Links = () => {
    return (
        <Section icon={LinkIcon} title="Links">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {links.map(({ label, href }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Links
