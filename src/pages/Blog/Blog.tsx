import { useDocumentTitle } from '@/hooks/useDocTitle';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import Lottie from 'lottie-react';
import BlogAnim from '../../Anim/BlogAnim.json';

const Blog = () => {
    const { t } = useTranslation('');

    useDocumentTitle('INBS Real Estate | Blog');

    const reasonsInvesting = [
        {
            id: 1,
            title: t('RIt1'),
            Desc: t('RId1'),
        },
        {
            id: 2,
            title: t('RIt2'),
            Desc: t('RId2'),
        },
        {
            id: 3,
            title: t('RIt3'),
            Desc: t('RId3'),
        },
        {
            id: 4,
            title: t('RIt4'),
            Desc: t('RId4'),
        },
        {
            id: 5,
            title: t('RIt5'),
            Desc: t('RId5'),
        },
        {
            id: 6,
            title: t('RIt6'),
            Desc: t('RId6'),
        },
        {
            id: 7,
            title: t('RIt7'),
            Desc: t('RId7'),
        },
        {
            id: 8,
            title: t('RIt8'),
            Desc: t('RId8'),
        },
        {
            id: 9,
            title: t('RIt9'),
            Desc: t('RId9'),
        },
    ];

    const reasonsDubai = [
        {
            id: 1,
            title: t('FFt1'),
            Desc: t('FFd1'),
            image: '/Images/Blog/RD/1.jpg',
        },
        {
            id: 2,
            title: t('FFt2'),
            Desc: t('FFd2'),
            image: '/Images/Blog/RD/2.jpg',
        },
        {
            id: 3,
            title: t('FFt3'),
            Desc: t('FFd3'),
            image: '/Images/Blog/RD/3.jpg',
        },
        {
            id: 4,
            title: t('FFt4'),
            Desc: t('FFd4'),
            image: '/Images/Blog/RD/4.jpg',
        },
        {
            id: 5,
            title: t('FFt5'),
            Desc: t('FFd5'),
            image: '/Images/Blog/RD/5.jpg',
        },
        {
            id: 6,
            title: t('FFt6'),
            Desc: t('FFd6'),
            image: '/Images/Blog/RD/6.jpg',
        },
        {
            id: 7,
            title: t('FFt7'),
            Desc: t('FFd7'),
            image: '/Images/Blog/RD/7.jpg',
        },
        {
            id: 8,
            title: t('FFt8'),
            Desc: t('FFd8'),
            image: '/Images/Blog/RD/8.jpg',
        },
        {
            id: 9,
            title: t('FFt9'),
            Desc: t('FFd9'),
            image: '/Images/Blog/RD/9.jpg',
        },
        {
            id: 10,
            title: t('FFt10'),
            Desc: t('FFd10'),
            image: '/Images/Blog/RD/10.jpg',
        },
    ];

    // Animation variants for reusable animations
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } },
    };

    const scaleUp = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    };

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
                        {t('BlogT1')} <span className="text-primary">{t('BlogT2')}</span> {t('BlogT3')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        // className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8"
                        className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8 font-semibold"
                    >
                        {t('BlogD')}
                    </motion.p>

                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}>
                        <ScrollLink
                            to="blog"
                            smooth={true}
                            duration={500}
                            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            offset={-80} // Optional: Adjust scroll position (e.g., for fixed headers)
                        >
                            {t('BlogB')}
                        </ScrollLink>
                    </motion.div>
                </div>
            </section>

            <section id="blog" className="container mx-auto px-4 py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Title */}
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground"
                    >
                        {t('HabibiT')}
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-xl text-foreground max-w-2xl mx-auto mb-8 text-center"
                    >
                        {t('HabibiD')}
                    </motion.p>

                    <Lottie animationData={BlogAnim} className="w-60 mx-auto" />

                    {/* Why Dubai Section */}
                    <section className="my-20">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-3xl font-bold text-primary mb-8 text-center mx-auto"
                        >
                            {t('WhyDubaiT')}
                        </motion.h3>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="bg-card rounded-2xl p-4 md:p-6 shadow-lg max-w-5xl mx-auto space-y-4"
                        >
                            <p className="text-lg text-foreground leading-relaxed text-center">
                                {t('WhyDubaiD')}
                            </p>
                                <motion.img
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={scaleUp}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    src="/Images/Blog/blog1.jpg"
                                    alt="Why Dubai"
                                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                                />
                        </motion.div>
                    </section>

                    {/* 10 Reasons Section */}
                    <section className="mb-20">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-3xl font-bold text-primary mb-12 text-center"
                        >
                            {t('RIt')}
                        </motion.h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
                            {reasonsInvesting.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-primary text-2xl font-bold mb-4">{item.id <= 9 ? `0${item.id}`: item.id}</div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">{t(item.title)}</h4>
                                    <p className="text-muted-foreground">{t(item.Desc)}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* 10 Facts Section */}
                    <section>
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-3xl font-bold text-primary mb-12 text-center"
                        >
                            {t('FFt')}
                        </motion.h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {reasonsDubai.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02 }}
                                    className="group bg-card rounded-xl p-6 shadow-md flex flex-col items-start"
                                >
                                    <div className="text-primary text-2xl font-bold">{item.id <= 9 ? `0${item.id}`: item.id}</div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">{t(item.title)}</h4>
                                    <p className="text-foreground mb-4">{t(item.Desc)}</p>
                                    <motion.img src={item.image} alt={item.title} className="w-full h-60 object-cover rounded-lg" whileHover={{ scale: 1.05 }} />
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default Blog;
