import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'motion/react';
import { Link as ScrollLink } from 'react-scroll';

const Lantern = ({ left, delay }: { left: string; delay: number }) => (
    <motion.div
        className="absolute w-8 h-12 bg-yellow-500 rounded-lg shadow-lg"
        style={{ left }}
        animate={{ y: [-400, -200], opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
);
const Light = ({ top, left, delay }: { top: string; left: string; delay: number }) => (
    <motion.div
        className="absolute w-2 h-2 bg-yellow-300 rounded-full"
        style={{ top, left }}
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
    />
);

const RamadanHero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative">
            <div className="relative min-h-dvh w-full flex justify-center items-center">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/Images/Ramadan/RamadanHero.png")',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-black/0" /> 
                    </div>

                <>
                    <Light top="80%" left="23%" delay={0} />
                    <Light top="72%" left="49.8%" delay={0.5} />
                    <Light top="80%" left="76.5%" delay={1} />
                    <Lantern left="25%" delay={2} />
                    <Lantern left="50%" delay={0} />
                    <Lantern left="75%" delay={4} />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7, scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
                        className="absolute bottom-20 sm:bottom-10 right-8 sm:right-10 text-yellow-400 text-3xl"
                    >
                        🌙
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7, scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', delay: 3 }}
                        className="absolute bottom-20 sm:bottom-10 left-8 sm:left-10 text-yellow-300 text-3xl"
                    >
                        🌟
                    </motion.div>
                </>

                {/* Content */}
                <div className="z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    {/* <div className="text-center"> */}
                    {/* Main Tagline */}
                    <h1 className="font-EB text-black text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'easeInOut' }}
                            className="block"
                        >
                            <Trans i18nKey="RamadanHeroTP1" components={{ span: <span className="text-primary" /> }} />
                        </motion.span>
                        <motion.span
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: 'easeInOut' }}
                            className="block"
                        >
                            <Trans i18nKey="RamadanHeroTP2" components={{ span: <span className="text-primary" /> }} />
                        </motion.span>
                    </h1>
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.75, ease: 'easeInOut' }}
                        className="mt-3 text-xl text-black font-semibold"
                    >
                        {t('RamadanHeroD')}
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
                            className="w-12 h-20 flex items-center justify-center border-primary border-2 text-black rounded-full cursor-pointer"
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

export default RamadanHero;
