import { useEffect, useState } from "react";
import { callApi } from "./call-api";
import { Hero } from "./types";

export const useHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const data = await callApi<Hero[]>("heroes");
        setHeroes(data);
        setLoading(false); 
      } catch (err) {
        setError(true);
        setLoading(false); 
      }
    };
    fetchHeroes();
  }, []);

  const toggleAvailability = (id: number) => {
    setHeroes((prevHeroes) =>
      prevHeroes.map((hero) =>
        hero.id === id ? { ...hero, available: !hero.available } : hero
      )
    );
  };

  return { heroes, loading, error, toggleAvailability };
};
