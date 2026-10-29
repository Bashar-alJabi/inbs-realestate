import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import AboutAnim from '../../Anim/AboutAnim.json';

const ContactBox = () => {
    const { t } = useTranslation();

    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card text-foreground rounded-lg py-16 px-8 text-center shadow-lg relative mt-24"
            >
                {/* Lottie SVG */}
                <Lottie animationData={AboutAnim} className="w-48 mx-auto absolute left-1/2 -translate-x-1/2 -top-40" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('ContactTitle')}</h2>
                <p className="text-lg text-foreground/90 mb-6">{t('ContactDesc')}</p>

                <Link
                    to="/contact"
                    className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-lg rounded-lg shadow-md hover:bg-primary/90 transition-all"
                >
                    {t('ContactButton')}
                </Link>
            </motion.section>
        </>
    );
};

export default ContactBox;
