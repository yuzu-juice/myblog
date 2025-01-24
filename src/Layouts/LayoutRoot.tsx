import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="flex-1 w-full max-w-4xl p-8 rounded-lg">{children}</main>
            <Footer />
        </>
    );
};

export default LayoutRoot;
