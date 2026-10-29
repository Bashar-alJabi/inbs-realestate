import { motion } from 'framer-motion';
import { ChevronRight, CircleCheckBig, House, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js
import Lottie from 'lottie-react';
import Button2Anim from '../../../Anim/Button2Anim.json';

const AboutSec = () => {

    const { t } = useTranslation();

    return (
        <section id='about-sec' className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t('AboutTitle')}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        {t('AboutDesc')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                >
                    {/* Highlight 1 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <House className="w-8 h-8 text-primary-foreground"/>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t('AboutHLt1')}</h3>
                        <p className="text-muted-foreground">
                            {t('AboutHLd1')}
                        </p>
                    </div>

                    {/* Highlight 2 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-primary-foreground"/>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t('AboutHLt2')}</h3>
                        <p className="text-muted-foreground">
                            {t('AboutHLd2')}
                        </p>
                    </div>

                    {/* Highlight 3 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <CircleCheckBig className="w-8 h-8 text-primary-foreground"/>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t('AboutHLt3')}</h3>
                        <p className="text-muted-foreground">
                            {t('AboutHLd3')}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center relative mt-20"
                >
                    <Lottie animationData={Button2Anim} className="w-52 mx-auto absolute bottom-2 left-1/2 -translate-x-1/2" />
                    <Link
                        to="/about"
                        className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors relative z-10"
                    >
                        {t('LearnMoreAboutUs')}
                        <ChevronRight className='w-4 h-4 ml-2'/>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSec;