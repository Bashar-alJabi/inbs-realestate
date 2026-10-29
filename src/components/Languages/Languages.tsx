import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { motion } from 'motion/react';

const Languages = ({ isScrolled, stickNavbar }: { isScrolled: boolean,  stickNavbar: boolean }) => {
    const { t, i18n } = useTranslation();
    const [rotate, setRotate] = useState(0);

    const languages = [
        { name: t('English'), code: 'en' },
        { name: t('Arabic'), code: 'ar' },
    ];

    const handleLanguageChange = (code: string) => {
        setRotate(rotate + 360);
        i18n.changeLanguage(code);
        localStorage.setItem('preferredLanguage', code);

        // document.documentElement.lang = code;
        // document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {/* <Button variant="ghost" size="icon" className="focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent group"> */}
                        <motion.div initial={{ rotate: 360 }} animate={{ rotate }} transition={{ duration: 1, ease: 'easeInOut' }}>
                            <Globe className={`cursor-pointer h-5 w-5 hover:text-primary ${isScrolled ? 'text-foreground' : 'text-primary-foreground'} ${stickNavbar && '!text-foreground'}`} />
                            {/* <Globe className={`cursor-pointer h-5 w-5 hover:text-primary ${isScrolled ? 'text-foreground' : 'text-black'} ${stickNavbar && '!text-foreground'}`} /> */}
                        </motion.div>
                    {/* </Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {languages.map((lang) => (
                        <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="cursor-pointer">
                            {lang.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default Languages;
