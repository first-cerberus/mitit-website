import React, { useEffect, useState } from "react";

export default function ScrollMovingText({ text }) {
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffsetX(-window.scrollY * 0.5);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //const text = `ЗСУ СИЛА, ЗВ'ЯЗКІВЦЯМ СЛАВА  𝐀 `.repeat(10);
  const textTransformed = text.repeat(10);
  return (
    <section style={{ backgroundColor: `#6A653A`, padding: "10px", overflow: "hidden", whiteSpace: `nowrap` }}>
      <p
        style={{
          transform: `translateX(${offsetX}px)`,
          transition: "transform 0.1s linear",
          fontSize: "24px",
        }}>
            {textTransformed}
      </p>
    </section>
  );
}
