import { HeroCardProps } from "./types";

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


