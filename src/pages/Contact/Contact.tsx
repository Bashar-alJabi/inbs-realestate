import { useDocumentTitle } from '@/hooks/useDocTitle';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    useDocumentTitle('INBS Real Estate | Contact Us');

    const { t } = useTranslation();

    return (
        <main className="bg-background">
            {/* Hero */}
            <section className="relative min-h-dvh w-full flex justify-center items-center">
                {/* Background Image with Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/Images/Hero.jpg")',
                        // backgroundImage: 'url("/Images/Ramadan/RamadanHero.png")',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />  */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/15" /> 
                </div>

                {/* Hero text */}
                <div className="z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        // className="font-EB text-5xl md:text-6xl font-bold text-primary-foreground mb-4"
                        className="font-EB text-5xl md:text-6xl font-bold text-black mb-4"
                    >
                        {t('HeroContactT1')} <span className="text-primary">{t('HeroContactT2')}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        // className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8"
                        className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8 font-semibold"
                    >
                        {t('HeroContactD')}
                    </motion.p>

                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}>
                        <ScrollLink
                            to="our-contacts"
                            smooth={true}
                            duration={500}
                            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            offset={-80} // Optional: Adjust scroll position (e.g., for fixed headers)
                        >
                            {t('ContactButton')}
                        </ScrollLink>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <div id="our-contacts" className="container mx-auto px-4 py-16">
                {/* Contacts Details */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t('ContactDetails')}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Address */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-card/80 p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{t('OurOffice')}</h3>
                            <a
                                href="https://www.google.com/maps?q=Park+Lane+Tower+-+Business+Bay+-+Dubai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-muted-foreground/80 transition-colors"
                            >
                                {t('Address')}
                            </a>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-card/80 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{t('EmailUs')}</h3>
                            <a href="mailto:info@inbs-uae.com" className="text-muted-foreground hover:text-muted-foreground/80 transition-colors">
                                info@inbs-uae.com
                            </a>
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-card/80 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{t('CallUs')}</h3>
                            <a href="tel:+971508866555" className="block text-muted-foreground hover:text-muted-foreground/80 transition-colors">
                                +971 50 886 6555
                            </a>
                            <a href="tel:+9714229222" className="block text-muted-foreground hover:text-muted-foreground/80 transition-colors">
                                042219222
                            </a>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Map Section */}
                <div className="w-full">
                    <iframe
                        width="100%"
                        height="400"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=parklane%20tower+(My%20Business%20Address%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.gps.ie/">gps map</a>
                    </iframe>
                </div>

                {/* Office Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-16">
                    <div className="h-fit bg-card p-2 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                        <div className="relative rounded-lg overflow-hidden w-full h-96">
                            <img
                                src="/Images/Contact/entrance.png"
                                alt="Entrance"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                    <div className="h-fit bg-card p-2 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                        <div className="relative rounded-lg overflow-hidden w-full h-96">
                            <img
                                src="/Images/Contact/door.png"
                                alt="Office Door"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                    <div className="h-fit bg-card p-2 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                        <div className="relative rounded-lg overflow-hidden w-full h-96">
                            <img
                                src="/Images/Contact/office.jpg"
                                alt="office"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
