import { useDocumentTitle } from '@/hooks/useDocTitle';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';

const Team = () => {

    useDocumentTitle('INBS Real Estate | Our Team');

    const { t } = useTranslation();

    const teamMembers = [
        {
            id: 1,
            name: t('TeamMembers'),
            role: t('OurExperts'),
            image: '/Images/Team/team1.jpg',
        },
        {
            id: 2,
            name: t('JO'),
            role: t('Founder&CEO'),
            image: '/Images/Team/team2.jpg',
        },
        {
            id: 3,
            name: t('TeamMembers'),
            role: t('OurExperts'),
            image: '/Images/Team/team3.jpg',
        },
    ];

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

                {/* Content Hero */}
                <div className="z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeInOut' }}>
                        <h1
                            // className="font-EB text-5xl md:text-6xl font-bold text-primary-foreground mb-4"
                            className="font-EB text-5xl md:text-6xl font-bold text-black mb-4"
                        >
                            <span className="text-primary">{t('HeroTeamT1')}</span> {t('HeroTeamT2')}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            // className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8"
                            className="text-xl text-primary-foreground max-w-2xl mx-auto mb-8 font-semibold"
                        >
                            {t('HeroTeamD')}
                        </motion.p>

                        {/* Team Stats */}
                        {/* <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex justify-center gap-8 flex-wrap"
                        >
                            <div className="bg-primary/20 p-4 rounded-lg backdrop-blur-sm">
                                <div className="text-3xl font-bold text-primary">25+</div>
                                <div className="text-primary-foreground">{t('HeroTeamBox1')}</div>
                            </div>
                            <div className="bg-primary/20 p-4 rounded-lg backdrop-blur-sm">
                                <div className="text-3xl font-bold text-primary">1000+</div>
                                <div className="text-primary-foreground">{t('HeroTeamBox2')}</div>
                            </div>
                        </motion.div> */}

                        {/* CTA */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-12">
                            <ScrollLink
                                to="team-members"
                                smooth={true}
                                duration={500}
                                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                                offset={-120} // Optional: Adjust scroll position (e.g., for fixed headers)
                            >
                                {t('HeroTeamButton')}
                            </ScrollLink>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Teams */}
            <section id="our-services" className="py-16">
            <div id='team-members' className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group bg-card p-6 h-fit rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="relative w-full h-64 rounded-lg overflow-hidden">
                                <img src={member.image} alt={member.name} className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" />
                            </div>
                            <h3 className="text-lg font-semibold text-primary mt-4">{member.name}</h3>
                            <p className="text-muted-foreground">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            </section>
        </main>
    );
};

export default Team;