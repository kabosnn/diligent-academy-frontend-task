import HeroCard from "./hero-card";
import { useHeroes } from "./use-heroes";

export default function HeroesList() {
  const { heroes, loading, error, toggleAvailability } = useHeroes();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch heroes.</p>;

  return (
    <>
      <h2>Heroes</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} onToggle={toggleAvailability} />
        ))}
      </ul>
    </>
  );
}


