import { ArrowUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { ScrollToTopButton } from "./styles";

export function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adicione um evento de rolagem para mostrar ou ocultar o botão
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Limpe o evento de rolagem ao desmontar o componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollToTopButton
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <ArrowUp size={25} />
    </ScrollToTopButton>
  );
}
