const Footer = () => {
    return (
        <footer className="bg-secondary border-t border-border text-muted-foreground">
            <div className="mx-auto sm:px-6 py-4">
                <div className="text-center text-xs">
                    &copy; {new Date().getFullYear()} Taichi Kitagawa All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
