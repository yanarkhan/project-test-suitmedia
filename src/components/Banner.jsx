import { useEffect, useRef, useState } from "react";

const Banner = ({
  title = "Ideas",
  subtitle = "Where all our great things begin",
  imageUrl = "/img/banner.jpg",
}) => {
  const backgroundRef = useRef(null);
  const textRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden parallax-container">
      {/* Background Image with Parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 parallax-element"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 90%)",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage: `url(${imageUrl})`,
            transform: `translateY(${offsetY * 0.3}px)`, // <- terbalik dari sebelumnya
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10" />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white parallax-element"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto animate-slide-up">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Banner;
