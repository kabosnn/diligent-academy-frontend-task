export type Hero = {
    id: number;
    name: string;
    available: boolean;
  };
  
export type HeroCardProps = {
    hero: Hero;
    onToggle: (id: number) => void;
  };