import { useEffect, useState } from "react";

export const useCardsColumns = () => {
  const [columns, setColumns] = useState(6);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 756) setColumns(2);
      else if (width <= 980) setColumns(3);
      else if (width <= 1400) setColumns(4);
      else if (width <= 1600) setColumns(6);
      else setColumns(6);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return columns;
};
