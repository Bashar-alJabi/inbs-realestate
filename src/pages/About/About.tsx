import { motion } from 'framer-motion';
import { CircleCheckBig, House, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import ContactBox from '@/components/ContactBox/ContactBox';
import { useDocumentTitle } from '@/hooks/useDocTitle';

const About = () => {
    
    useDocumentTitle('INBS Real Estate | About Us');

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

                {/* Content */}
                <div className="z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        // className="font-EB text-5xl md:text-6xl font-bold text-primary-foreground mb-4"
                        className="font-EB text-5xl md:text-6xl font-bold text-black mb-4"
                    >
                        {t('HeroAboutT')} <span className="text-primary">{t('RE')}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        // className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8"
                        className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8 font-semibold"
                    >
                        {t('HeroAboutD')}
                    </motion.p>

                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}>
                        <ScrollLink
                            to="our-story"
                            smooth={true}
                            duration={500}
                            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            offset={-80} // Optional: Adjust scroll position (e.g., for fixed headers)
                        >
                            {t('HeroAboutB')}
                        </ScrollLink>
                    </motion.div>
                </div>
            </section>

            <div id="our-story" className="container mx-auto px-4 py-16">
                {/* Title Section */}
                {/* <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        At INBS, we specialize in connecting buyers and sellers with their ideal properties. With years of experience and a deep understanding
                        of the local market, we make real estate transactions seamless and stress-free.
                    </p>
                </motion.section> */}

                {/* Our Story Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">{t('OurStory')}</h2>
                            <p className="text-muted-foreground mb-4">{t('Story1')}</p>
                            <p className="text-muted-foreground">{t('Story2')}</p>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <img src="/Images/About/about1.jpg" alt="Our Story" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.section>

                {/* Our Mission Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:order-2">
                            <h2 className="text-3xl font-bold text-foreground mb-6">{t('OurMission')}</h2>
                            <p className="text-muted-foreground mb-4">{t('Mission1')}</p>
                            <p className="text-muted-foreground">{t('Mission2')}</p>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <img src="/Images/About/about2.jpg" alt="Our Mission" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.section>

                {/* Why Choose Us Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-44"
                >
                    {/* Highlight 1 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <House className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t('AboutHLt1')}</h3>
                        <p className="text-muted-foreground">{t('AboutHLd1')}</p>
                    </div>

                    {/* Highlight 2 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t('AboutHLt2')}</h3>
                        <p className="text-muted-foreground">{t('AboutHLd2')}</p>
                    </div>

                    {/* Highlight 3 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <CircleCheckBig className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t('AboutHLt3')}</h3>
                        <p className="text-muted-foreground">{t('AboutHLd3')}</p>
                    </div>
                </motion.section>

                {/* Contact Section */}
                <ContactBox />
            </div>
        </main>
    );
};

export default About;
