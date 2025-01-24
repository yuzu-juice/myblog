const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full p-4 text-center bg-white shadow-lg rounded-full">
            <p>&copy; {currentYear} yuzu-juice All rights reserved.</p>
        </footer>
    );
};

export default Footer;
