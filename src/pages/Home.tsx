import Hero from '../components/organisms/home/Hero';
import ServiceGrid from '../components/organisms/home/ServiceGrid';
import Stats from '../components/organisms/home/Stats';
import EntryCards from '../components/organisms/home/EntryCards';

export default function Home() {
    return (
        <div className="min-h-screen bg-[var(--bg-deep)]">
            <Hero />
            <ServiceGrid />
            <Stats />
            <EntryCards />
        </div>
    );
}

