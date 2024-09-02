interface Hero {
  id: number;
  name: string;
  available: boolean;
}

interface HeroCardProps {
  hero: Hero;
  onToggle: (id: number) => void;
}

export default function HeroCard({ hero, onToggle }: HeroCardProps) {
  const handleClick = () => {
    onToggle(hero.id);
  };

  return (
    <li
      onClick={handleClick}
      style={{
        color: hero.available ? "green" : "red",
        cursor: "pointer",
        listStyle: "none",
        marginRight: "20px",
      }}
    >
      {hero.id}. {hero.name} {hero.available ? '"Available"' : ""}
    </li>
  );
}


