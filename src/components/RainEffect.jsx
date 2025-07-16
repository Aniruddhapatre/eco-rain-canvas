import { useEffect, useState } from 'react';

const RainEffect = () => {
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    const createRaindrops = () => {
      const drops = [];
      for (let i = 0; i < 100; i++) {
        drops.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: Math.random() * 1 + 0.5,
          animationDelay: Math.random() * 2,
          height: Math.random() * 20 + 10,
          width: Math.random() * 2 + 1,
        });
      }
      setRaindrops(drops);
    };

    createRaindrops();
  }, []);

  return (
    <div className="rain-container">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="raindrop"
          style={{
            left: `${drop.left}%`,
            animationDuration: `${drop.animationDuration}s`,
            animationDelay: `${drop.animationDelay}s`,
            height: `${drop.height}px`,
            width: `${drop.width}px`,
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;