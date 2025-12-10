import AboutHero from '../components/organisms/about/AboutHero';
import ProcessSteps from '../components/organisms/about/ProcessSteps';
import Philosophy from '../components/organisms/about/Philosophy';
import WhoWeServe from '../components/organisms/about/WhoWeServe';
import GetStarted from '../components/organisms/about/GetStarted';

export default function About() {
    return (
        <div className="min-h-screen bg-[var(--bg-deep)] pb-20">
            <AboutHero />
            <ProcessSteps />
            <Philosophy />
            <WhoWeServe />
            <GetStarted />
        </div>
    );
}

