import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const GallerySec = () => {

    const { t } = useTranslation();

    const propertyImages = [
        { id: 1, src: '/Images/Gallery/g1.jpg', category: t('Apartments') },
        { id: 3, src: '/Images/Gallery/g3.jpg', category: t('Luxury') },
        { id: 6, src: '/Images/Gallery/g6.jpg', category: t('Villas') },
        { id: 2, src: '/Images/Gallery/g2.jpg', category: t('Towers') },
        { id: 4, src: '/Images/Gallery/g4.jpg', category: t('Villas') },
        { id: 5, src: '/Images/Gallery/g5.jpg', category: t('Apartments') },
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("Gallery")}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("GD")}</p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {propertyImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-lg"
                        >
                            <img
                                src={image.src}
                                alt={`Property ${image.id}`}
                                loading='lazy'
                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Category Badge */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                <span className="text-primary-foreground font-medium">{image.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySec;
