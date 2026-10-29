import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/Theme/theme-provider';
import { motion } from 'motion/react';

export function ModeToggle({ isScrolled, stickNavbar }: { isScrolled: boolean,  stickNavbar: boolean }) {
    const { setTheme, theme } = useTheme();

    const cycleTheme = () => {
        if (theme === 'light') setTheme('dark');
        else setTheme('light');
    };

    return (
        <div onClick={cycleTheme} className="focus-visible:ring-0 focus-visible:ring-offset-0 group">
            {theme === 'light' ? (
                <motion.div
                    initial={{ opacity: 0, rotate: 0, scale: 0 }}
                    animate={{ opacity: theme === 'light' ? 1 : 0, rotate: theme === 'light' ? -90 : 360, scale: theme === 'light' ? 1 : 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <Sun className={`cursor-pointer h-6 w-6 group-hover:text-primary ${isScrolled ? 'text-foreground' : 'text-primary-foreground'} ${stickNavbar && '!text-foreground'}`} />
                    {/* <Sun className={`cursor-pointer h-6 w-6 group-hover:text-primary ${isScrolled ? 'text-foreground' : 'text-black'} ${stickNavbar && '!text-foreground'}`} /> */}
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, rotate: 0, scale: 0 }}
                    animate={{ opacity: theme === 'dark' ? 1 : 0, rotate: theme === 'dark' ? 360 : 90, scale: theme === 'dark' ? 1 : 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <Moon className={`cursor-pointer h-6 w-6 group-hover:text-primary ${isScrolled ? 'text-foreground' : 'text-primary-foreground'} ${stickNavbar && '!text-foreground'}`} />
                    {/* <Moon className={`cursor-pointer h-6 w-6 group-hover:text-primary ${isScrolled ? 'text-foreground' : 'text-black'} ${stickNavbar && '!text-foreground'}`} /> */}
                </motion.div>
            )}
        </div>
    );
}
