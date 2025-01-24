import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <div className="flex justify-center">
                <main className="flex-1 w-full max-w-4xl p-8 rounded-lg">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default LayoutRoot;
