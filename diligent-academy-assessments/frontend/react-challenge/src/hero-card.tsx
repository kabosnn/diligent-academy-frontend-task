type Hero = {
    id: number;
    name: string;
    available: boolean;
  };
  
  type HeroCardProps = {
    hero: Hero;
    onToggle: (id: number) => void;
  };

export default function HeroCard({ hero, onToggle }: HeroCardProps) {
  const handleClick = () => {
    onToggle(hero.id);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        color: hero.available ? "green" : "red",
        cursor: "pointer",
        listStyle: "none"
      }}
    >
      {hero.id}. {hero.name} {hero.available ? '"Available"' : ""}
    </div>
  );
}


