function Configurator({ exterior, interior, wheel, updateOptions }) {
  const exteriorSwatch = [
    { id: 0, name: "Sun Soaked", src: "/swatch/sun_soaked.png" },
    { id: 1, name: "Sea Grass", src: "/swatch/sea_grass.png" },
    { id: 2, name: "Black Pearl", src: "/swatch/black_pearl.png" },
    { id: 3, name: "Red Planet", src: "/swatch/red_planet.png" },
    { id: 4, name: "Stealth Green", src: "/swatch/stealth_green.png" },
    { id: 5, name: "Blue Planet", src: "/swatch/blue_planet.png" },
  ];

  const interiorSwatch = [
    { id: 0, name: "dark", src: "/swatch/interior/dark.png" },
    { id: 1, name: "white", src: "/swatch/interior/light.png" },
  ];

  const wheels = [
    { id: 0, name: "SlipStream Black", src: "/wheels/wheel1.png" },
    { id: 1, name: "Vortex", src: "/wheels/wheel2.png" },
  ];

  return (
    <div>
      {/* Headings */}
      <h1 className="text-2xl md:text-4xl font-semibold text-blue-950">
        Fisker Ocean
      </h1>
      <p className="py-2 text-xl">
        Configure your very own, with the options to choose from 6 exterior, 2
        interior, and 3 wheel options.
      </p>

      {/* Exterior Colors */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">Exterior Color</h3>
        <div className="flex gap-2">
          {exteriorSwatch.map((exteriorOption) => (
            <button
              key={exteriorOption.id}
              onClick={() => updateOptions("exterior", exteriorOption.name)}
              className={`hover:scale-105 transition-transform duration-100 ${
                exteriorOption.name === exterior
                  ? "border-2 border-blue-300 rounded-full"
                  : ""
              }`}
            >
              <img
                src={exteriorOption.src}
                alt={exteriorOption.name}
                className="w-12"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Interior Colors */}
      <div className="my-12">
        <h3 className="font-bold uppercase mb-3">Interior Color</h3>
        <div className="flex gap-2">
          {interiorSwatch.map((color) => (
            <button
              key={color.id}
              onClick={() => updateOptions("interior", color.name)}
              className={`hover:scale-105 transition-transform duration-100 ${
                color.name === interior
                  ? "border-2 border-blue-300 rounded-full"
                  : ""
              }`}
            >
              <img src={color.src} alt={color.name} className="w-12" />
            </button>
          ))}
        </div>
      </div>

      {/* Wheel Options */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">Wheel Options</h3>
        <div className="flex gap-2">
          {wheels.map((wheelOption) => (
            <button
              key={wheelOption.id}
              onClick={() => updateOptions("wheel", wheelOption.name)}
              className={`hover:scale-105 transition-transform duration-100 ${
                wheelOption.name === wheel
                  ? "border-2 border-blue-300 rounded-full"
                  : ""
              }`}
            >
              <img
                src={wheelOption.src}
                alt={wheelOption.name}
                className="w-20"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Configurator;
