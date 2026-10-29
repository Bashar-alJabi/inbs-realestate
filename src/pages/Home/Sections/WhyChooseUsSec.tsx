import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, Trophy, Star, Heart, Clock } from 'lucide-react'; // Icons from Lucide React
import { useTranslation } from 'react-i18next';

const WhyChooseUsSec = () => {

    const { t } = useTranslation();

    const reasons = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary-foreground" />,
            title: t('Reason1T'),
            description: t('Reason1D'),
        },
        {
            icon: <Handshake className="w-8 h-8 text-primary-foreground" />,
            title: t('Reason2T'),
            description: t('Reason2D'),
        },
        {
            icon: <Trophy className="w-8 h-8 text-primary-foreground" />,
            title: t('Reason3T'),
            description: t('Reason3D'),
        },
        {
            icon: <Star className="w-8 h-8 text-primary-foreground" />,
            title: t('Reason4T'),
            description: t('Reason4D'),
        },
        {
            icon: <Heart className="w-8 h-8 text-primary-foreground" />,
            title: t('Reason5T'),
            description: t('Reason5D'),
        },
        {
            icon: <Clock className="w-8 h-8 text-primary-foreground" />,
            title: t('Reason6T'),
            description: t('Reason6D'),
        },
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("WhyChooseUs")}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t("WhyChooseUsD")}
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card/80 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">{reason.icon}</div>
                            <h3 className="text-xl font-semibold text-foreground mb-2 text-center">{reason.title}</h3>
                            <p className="text-muted-foreground text-center">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSec;
