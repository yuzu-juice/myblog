import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, '../src/data')
const OUTPUT_FILE = join(DATA_DIR, 'posts.json')

interface QiitaPost {
    id: string
    title: string
    created_at: string
    tags: { name: string }[]
    url: string
}

async function fetchQiitaPosts(): Promise<QiitaPost[]> {
    const response = await fetch('https://qiita.com/api/v2/users/yuzu_juice/items')

    if (!response.ok) {
        const error = await response.json()
        throw new Error(`Qiita API error: ${JSON.stringify(error)}`)
    }

    return response.json()
}

async function main() {
    console.log('Fetching Qiita posts...')

    try {
        const posts = await fetchQiitaPosts()

        if (!existsSync(DATA_DIR)) {
            mkdirSync(DATA_DIR, { recursive: true })
        }

        writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2))
        console.log(`✓ Saved ${posts.length} posts to ${OUTPUT_FILE}`)
    } catch (error) {
        console.error('Failed to fetch Qiita posts:', error)
        process.exit(1)
    }
}

main()
