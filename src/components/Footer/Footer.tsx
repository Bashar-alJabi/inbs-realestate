import { Link } from 'react-router-dom';
import { Mail, Linkedin, Facebook, Instagram, ChevronRight, Phone, MapPin, Clock, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const links = [
        { name: t('Home'), href: '/' },
        { name: t('About'), href: '/about' },
        { name: t('Services'), href: '/services' },
        // { name: t('Listing'), href: '/listing' },
        { name: t('Team'), href: '/team' },
        { name: t('Blog'), href: '/blog' },
        { name: t('Contact'), href: '/contact' },
        { name: t('Careers'), href: '/careers' },
    ];

    return (
        <footer className="bg-footer-background border-t px-6 text-center md:text-left">
            <div className="container mx-auto px-4 pt-12 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Column 1 - Logo & Social */}
                    <div className="space-y-4">
                        <img src="/Images/Logo.png" alt="Company Logo" className="w-40 mx-auto md:mx-0" />
                        <p className=" mt-4">{t('FooterAboutUs')}</p>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="flex flex-col items-start mx-auto md:mx-0">
                        <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:w-12 after:h-0.5 after:bg-[#CCAA20] after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0">
                            {t('QuickLinks')}
                        </h3>
                        <div className="flex flex-col items-center sm:items-start w-full max-w-[250px] sm:max-w-full">
                            <ul className="space-y-2 text-center sm:text-left w-full">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            className="text-foreground w-fit hover:text-foreground/80 transition-colors transform hover:translate-x-2 flex items-center gap-2"
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                            <ChevronRight className="h-4 w-4 -ml-4" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 - Contact Us */}
                    <div className=" flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:w-12 after:h-0.5 after:bg-[#CCAA20] after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0">
                            {t('ReachOut')}
                        </h3>
                        <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                            <a href="tel:+971508866555" className="hover:text-[#5E8C61] transition-colors">
                                <Phone className="h-5 w-5" />
                            </a>
                            <a href="mailto:info@inbs-uae.com" className="hover:text-[#EA4335] transition-colors">
                                <Mail className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/international-network-businessmen-services/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#0A66C2] transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100089453280961"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#1877F2] transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/inbs_business/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E4405F] transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <Globe className="h-5 w-5" />
                                <a
                                    href="https://inbs-uae.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-foreground/80 transition-colors"
                                >
                                    inbs-uae.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <MapPin className="h-5 w-5" />
                                <a
                                    href="https://www.google.com/maps?q=Park+Lane+Tower+-+Business+Bay+-+Dubai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-foreground/80 transition-colors"
                                >
                                    {t('Address')}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4 - Working Hours */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:w-12 after:h-0.5 after:bg-[#CCAA20] after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0">
                            {t('WorkingHours')}
                        </h3>
                        <div className=" text-center sm:text-left">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5" />
                                <p>{t('WH1')}</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <Clock className="h-5 w-5" />
                                <p>{t('WH2')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 5 - Our Services */}
                    {/* <div className="flex flex-col items-center md:items-start mx-auto md:mx-0">
                        <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:w-12 after:h-0.5 after:bg-[#CCAA20] after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0">
                            {t('OurServices')}
                        </h3>
                        <div className="text-left">
                            <p>● {t('Service1')}</p>
                            <p>● {t('Service2')}</p>
                            <p>● {t('Service3')}</p>
                            <p>● {t('Service4')}</p>
                        </div>
                    </div> */}
                </div>

                {/* Copyright Section */}
                <div className="border-t border-foreground/10 mt-12 pt-8 text-center">
                    <p>
                        © {currentYear} {t('AllRightsReservedBy')} INBS.
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <Link to="/privacy-policy" className="text-foreground hover:text-foreground/80 transition-colors">
                            {t('PrivacyPolicy')}
                        </Link>
                        <span>|</span>
                        <Link to="/terms-conditions" className="text-foreground hover:text-foreground/80 transition-colors">
                            {t('Terms&Conditions')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
