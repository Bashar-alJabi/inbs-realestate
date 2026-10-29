import { motion } from 'framer-motion';
import { Briefcase, HeartHandshake, Users, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import { useDocumentTitle } from '@/hooks/useDocTitle';
import Lottie from 'lottie-react';
import CareersAnim from '../../Anim/CareersAnim.json';

const Careers = () => {
    useDocumentTitle('INBS Real Estate | Careers');

    const { t } = useTranslation();

    // WhatsApp and Email Links
    const whatsappNumber1 = 'https://wa.me/+971508866555';
    // const whatsappNumber2 = 'https://wa.me/+971506596665';
    const emailAddress = 'mailto:jalal.omar2025@gmail.com';

    return (
        <main className="bg-background">
            {/* Hero Section */}
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
                        {t('HeroCareersT1')} <span className="text-primary">{t('HeroCareersT2')}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        // className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8"
                        className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8 font-semibold"
                    >
                        {t('HeroCareersD')}
                    </motion.p>

                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}>
                        <ScrollLink
                            to="open-positions"
                            smooth={true}
                            duration={500}
                            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            offset={-80} // Optional: Adjust scroll position (e.g., for fixed headers)
                        >
                            {t('HeroCareersB')}
                        </ScrollLink>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us Section */}
            <motion.section
                id="open-positions"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 pt-16"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('WhyJoinUs')}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('WhyJoinUsDescription')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Highlight 1 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Briefcase className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t('CareerHLt1')}</h3>
                        <p className="text-muted-foreground">{t('CareerHLd1')}</p>
                    </div>

                    {/* Highlight 2 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <HeartHandshake className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t('CareerHLt2')}</h3>
                        <p className="text-muted-foreground">{t('CareerHLd2')}</p>
                    </div>

                    {/* Highlight 3 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t('CareerHLt3')}</h3>
                        <p className="text-muted-foreground">{t('CareerHLd3')}</p>
                    </div>
                </div>
            </motion.section>

            <Lottie animationData={CareersAnim} className="w-48 mx-auto" />

            {/* Send CV Section */}
            <motion.section
                id="send-cv"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 pb-16"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('SendCV')}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('SendCVDescription')}</p>
                </div>

                {/* Buttons for WhatsApp and Email */}
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {/* WhatsApp Button  */}
                    <a
                        href={whatsappNumber1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-primary-foreground rounded-lg hover:bg-green-600 transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>{t('SendCVWhatsApp1')}</span>
                    </a>

                    {/* Email Button */}
                    <a
                        href={emailAddress}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-primary-foreground rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        <span>{t('SendCVEmail')}</span>
                    </a>
                </div>
            </motion.section>
        </main>
    );
};

export default Careers;
