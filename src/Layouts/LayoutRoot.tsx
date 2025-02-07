import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-orange-50">
            <Header />
            <div className="flex-1 mt-16 sm:mt-20">
                <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default LayoutRoot;
