import ResourcesHero from '../components/organisms/resources/ResourcesHero';
import NewsletterAndFeeds from '../components/organisms/resources/NewsletterAndFeeds';
import UpcomingOpportunities from '../components/organisms/resources/UpcomingOpportunities';

export default function Resources() {
    return (
        <div className="min-h-screen bg-[var(--bg-deep)]">
            <ResourcesHero />
            <NewsletterAndFeeds />
            <UpcomingOpportunities />
        </div>
    );
}

