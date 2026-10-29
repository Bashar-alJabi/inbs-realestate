import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ModeToggle } from '../Theme/mode-toggle';
import Languages from '../Languages/Languages';
import { Sheet, SheetContent, SheetTrigger, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslation();

    const knownRoutes = ["/", "/about", "/services", "/team", "/blog", "/contact", "/careers"]; // all valid routes here
    const location = useLocation();
    const stickNavbar = !knownRoutes.includes(location.pathname); // If pathname isn't in known routes like privacyPolicy and termsConditions, or it's a 404 page

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: t('Home'), path: '/' },
        { name: t('About'), path: '/about' },
        { name: t('Services'), path: '/services' },
        // { name: t('Listing'), path: '/listing' },
        { name: t('Team'), path: '/team' },
        { name: t('Blog'), path: '/blog' },
        { name: t('Contact'), path: '/contact' },
        { name: t('Careers'), path: '/careers' },
    ];

    return (
        <header className={`fixed top-0 z-30 w-full transition-all duration-300 ${isScrolled ? 'bg-card shadow-lg' : 'bg-transparent'} ${stickNavbar && 'bg-card shadow-lg'}`}>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/Images/Logo.png" alt="logo" className={`${isScrolled ? 'w-24' : 'w-32'} transition-all duration-300`} />
                        </Link>
                    </motion.div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="ml-10 flex items-center space-x-6 lg:space-x-8"
                        >
                            {navItems.map((link, index) => (
                                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        to={link.path}
                                        className={`${isScrolled ? 'text-foreground' : 'text-primary-foreground'} ${stickNavbar && '!text-foreground'} hover:text-primary transition-colors group relative`}
                                        // className={`${isScrolled ? 'text-foreground' : 'text-black'} ${stickNavbar && '!text-foreground'} hover:text-primary transition-colors group relative`}
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary duration-300 group-hover:w-full" />
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </nav>

                    <div className="flex items-center gap-4 relative">
                        <Languages isScrolled={isScrolled} stickNavbar={stickNavbar} />
                        <ModeToggle isScrolled={isScrolled} stickNavbar={stickNavbar} />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="md:hidden group flex justify-end" aria-label="Open menu">
                                <Menu
                                    className={`${
                                        isScrolled ? 'text-foreground' : 'text-primary-foreground'
                                        // isScrolled ? 'text-foreground' : 'text-black'
                                    } ${stickNavbar && '!text-foreground'} w-6 h-6 group-hover:text-primary transition-transform duration-200 group-hover:rotate-90`}
                                />
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-background/95 backdrop-blur-lg border-l">
                                <SheetHeader className="space-y-2">
                                    <SheetTitle className="text-3xl font-bold bg-gradient-to-r from-primary to primary/60 bg-clip-text text-transparent">
                                        INBS <p>Real Estates</p>
                                    </SheetTitle>
                                    <SheetDescription className="text-muted-foreground italic"></SheetDescription>
                                </SheetHeader>
                                <div className="flex flex-col space-y-6 mt-8">
                                    {navItems.map((item, index) => (
                                        <Link
                                            to={item.path}
                                            key={index}
                                            className="text-lg font-medium relative group overflow-hidden w-fit"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">{item.name}</span>
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                                        </Link>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
