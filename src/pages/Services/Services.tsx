import { useDocumentTitle } from '@/hooks/useDocTitle';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, HandCoins, Home, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Lottie from 'lottie-react';
import RE from '../../Anim/RE.json';

const Services = () => {
    useDocumentTitle('INBS Real Estate | Our Services');

    const { t } = useTranslation();

    const services = [
        {
            icon: <ShieldCheck className="w-12 h-12 text-primary-foreground" />,
            title: t('Services1T'),
            image: '/Images/Services/services1.jpg',
            description: t('Services1D'),
            features: [t('Services1F1'), t('Services1F2'), t('Services1F3'), t('Services1F4'), t('Services1F5')],
            cta: t('Services1cta'),
        },
        {
            icon: <FileText className="w-12 h-12 text-primary-foreground" />,
            title: t('Services2T'),
            image: '/Images/Services/services2.jpg',
            description: t('Services2D'),
            features: [t('Services2F1'), t('Services2F2'), t('Services2F3'), t('Services2F4'), t('Services2F5')],
            cta: t('Services2cta'),
        },
    ];

    const servicesBox = [
        {
            title: t('ServicesBox1T'),
            icon: <HandCoins className="w-8 h-8 text-primary-foreground" />,
            description: t('ServicesBox1D'),
        },
        {
            title: t('ServicesBox2T'),
            icon: <Home className="w-8 h-8 text-primary-foreground" />,
            description: t('ServicesBox2D'),
        },
        {
            title: t('ServicesBox3T'),
            icon: <Building2 className="w-8 h-8 text-primary-foreground" />,
            description: t('ServicesBox3D'),
        },
    ];

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
                        {t('HeroServicesT1')} <span className="text-primary">{t('HeroServicesT2')}</span> {t('HeroServicesT3')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        // className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8"
                        className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8 font-semibold"
                    >
                        {t('HeroServicesD')}
                    </motion.p>

                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}>
                        <ScrollLink
                            to="our-services"
                            smooth={true}
                            duration={500}
                            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            offset={-80} // Optional: Adjust scroll position (e.g., for fixed headers)
                        >
                            {t('HeroServicesB')}
                        </ScrollLink>
                    </motion.div>
                </div>
            </section>

            {/* Services Content */}
            <section id="our-services" className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="mb-24 last:mb-0"
                        >
                            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12`}>
                                {/* Image Section */}
                                <div className="md:w-1/2">
                                    <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-xl shadow-2xl" />
                                </div>

                                {/* Content Section */}
                                <div className="md:w-1/2 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">{service.icon}</div>
                                        <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                                        <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-center text-foreground">
                                                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                                        >
                                            {service.cta}
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Comprehensive Services Section */}
            <section className="py-16 bg-primary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-2"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">{t('AdditionalServicesT')}</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">{t('AdditionalServicesD')}</p>

                        <Lottie animationData={RE} className="w-44 mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8  text-center">
                        {servicesBox.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-background p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 mx-auto">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
