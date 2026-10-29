import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js
import { Home, HandCoins, Building2, ShieldCheck, Search, FileText, ChevronRight } from 'lucide-react'; // Icons from Lucide React
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';
import ButtonAnim from '../../../Anim/ButtonAnim.json';

const ServicesSec = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary-foreground" />,
            title: t('ServicesSecT1'),
            description: t('ServicesSecD1'),
        },
        {
            icon: <Search className="w-8 h-8 text-primary-foreground" />,
            title: t('ServicesSecT2'),
            description: t('ServicesSecD2'),
        },
        {
            icon: <FileText className="w-8 h-8 text-primary-foreground" />,
            title: t('ServicesSecT3'),
            description: t('ServicesSecD3'),
        },
        {
            icon: <HandCoins className="w-8 h-8 text-primary-foreground" />,
            title: t('ServicesSecT4'),
            description: t('ServicesSecD4'),
        },
        {
            icon: <Home className="w-8 h-8 text-primary-foreground" />,
            title: t('ServicesSecT5'),
            description: t('ServicesSecD5'),
        },
        {
            icon: <Building2 className="w-8 h-8 text-primary-foreground" />,
            title: t('ServicesSecT6'),
            description: t('ServicesSecD6'),
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="py-16 bg-background"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                >
                    {t('OurServices')}
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
                >
                    {t('OurServicesDesc')}
                </motion.p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-24 relative "
                >
                    <Lottie animationData={ButtonAnim} className="w-56 mx-auto absolute bottom-2 left-1/2 -translate-x-1/2" />
                    <Link
                        to="/services"
                        className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors relative z-10"
                    >
                        {t('LearnMoreServices')}
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ServicesSec;
