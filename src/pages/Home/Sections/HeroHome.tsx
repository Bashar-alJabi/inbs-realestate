import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'motion/react';
import { Link as ScrollLink } from 'react-scroll';

const HeroHome = () => {
    const { t } = useTranslation();

    return (
        <section className="relative">
            <div className="relative min-h-dvh w-full flex justify-center items-center">
                {/* Background Image with Overlay */}
                <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                // style={{
                //     backgroundImage: 'url("/Images/Hero.jpg")',
                //     backgroundPosition: 'center',
                // }}
                >
                    <video className="absolute inset-0 w-full h-full object-cover" src="/Images/HeroV.mp4" autoPlay loop muted playsInline></video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-black/15" /> 
                </div>

                {/* Content */}
                <div className="z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    {/* <div className="text-center"> */}
                    {/* Main Tagline */}
                    <h1 className="font-EB text-primary-foreground text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'easeInOut' }}
                            className="block"
                        >
                            <Trans i18nKey="HeroTitleP1" components={{ span: <span className="text-primary" /> }} />
                        </motion.span>
                        <motion.span
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'easeInOut' }}
                            className="block"
                        >
                            {t('HeroTitleP2')}
                        </motion.span>
                    </h1>
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.75, ease: 'easeInOut' }}
                        className="mt-3 text-xl text-primary-foreground font-semibold"
                    >
                        {t('HeroDesc')}
                    </motion.p>

                    {/* CTA Button */}
                    <ScrollLink
                        to="about-sec" // ID of the target section
                        smooth={true} // Enable smooth scrolling
                        duration={500} // Duration of the scroll animation
                        offset={-80} // Optional: Adjust scroll position (e.g., for fixed headers)
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            className="w-12 h-20 flex items-center justify-center border-primary border-2 text-primary-foreground rounded-full cursor-pointer"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ opacity: { duration: 0.75 }, scale: { duration: 0.5 }, ease: 'easeInOut' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.span animate={{ y: [-10, 10, -10] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                                ●
                            </motion.span>
                        </motion.div>
                    </ScrollLink>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;
