import ServicesHero from '../components/organisms/services/ServicesHero';
import CoreServices from '../components/organisms/services/CoreServices';
import OfficeHours from '../components/organisms/services/OfficeHours';
import StoryVault from '../components/organisms/services/StoryVault';
import Workshops from '../components/organisms/services/Workshops';
import TechRadar from '../components/organisms/services/TechRadar';

export default function Services() {
    return (
        <div className="min-h-screen bg-[var(--bg-deep)]">
            <ServicesHero />
            <CoreServices />
            <OfficeHours />
            <StoryVault />
            <Workshops />
            <TechRadar />
        </div>
    );
}

