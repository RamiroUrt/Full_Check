import { useState } from "react";

interface Origin {
  x: number;
  y: number;
}

export function useModalOrigin() {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState<Origin | null>(null);

  const openModalFrom = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setOrigin({
        //calculamos origen del boton en la pantalla
      x: rect.left + rect.width / 2, //divimido 2 para obtener el centro
      y: rect.top + rect.height / 2,
    });
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return { isOpen, origin, openModalFrom, closeModal };
}
