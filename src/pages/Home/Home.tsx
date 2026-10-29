import AboutSec from './Sections/AboutSec';
import { useDocumentTitle } from '@/hooks/useDocTitle';
import ContactBox from '@/components/ContactBox/ContactBox';
import ServicesSec from './Sections/ServicesSec';
import GallerySec from './Sections/GallerySec';
import WhyChooseUsSec from './Sections/WhyChooseUsSec';
import HeroHome from './Sections/HeroHome';
// import RamadanHero from './Sections/RamadanHero';

const Home = () => {

    useDocumentTitle('INBS Real Estate | Dubai Property, Homes & Investments');

    return (
        <>
            <HeroHome />
            {/* <RamadanHero /> */}
            <AboutSec />
            <ServicesSec />
            <GallerySec />
            <WhyChooseUsSec />
            <div className="container mx-auto px-4 pb-28">
                <ContactBox />
            </div>
        </>
    );
};

export default Home;
