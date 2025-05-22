import Header from '@/components/Header'
import Footer from '@/components/Footer'

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br">
            <Header />
            <div className="flex-1 mt-16 sm:mt-12">
                <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">{children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutRoot
