import MoonshotsList from '../components/organisms/moonshots/MoonshotsList';
import JoinMoonshot from '../components/organisms/moonshots/JoinMoonshot';
import WhereInnovationGoes from '../components/organisms/moonshots/WhereInnovationGoes';

export default function Moonshots() {
    return (
        <div className="min-h-screen bg-[var(--bg-deep)]">
            <MoonshotsList />
            <JoinMoonshot />
            <WhereInnovationGoes />
        </div>
    );
}

