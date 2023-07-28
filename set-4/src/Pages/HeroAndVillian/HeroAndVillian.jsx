import React, { useState } from "react";

const HeroAndVillian = ({ characters }) => {
  const [showHero, setShowHero] = useState(null);

  const handleHeroClick = () => setShowHero(true);
  const handleVillianClick = () => setShowHero(false);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Supro Heroes And Super Villians</h1>
      <div className="buttons">
        <button
          style={{ marginRight: "10px", padding: "10px", fontSize: "40px" }}
          onClick={handleHeroClick}
        >
          Show Heroes
        </button>
        <button
          style={{ padding: "10px", fontSize: "40px" }}
          onClick={handleVillianClick}
        >
          Show Villian
        </button>
      </div>
      {showHero !== null && (
        <>
          {showHero ? (
            <>
              <ul>
                <h2>Heroes</h2>
                {characters.heroes.map(({ name, powers, costume }) => (
                  <>
                    <h3>{name}</h3>
                    <p>{powers}</p>
                    <p>{costume}</p>
                  </>
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul>
                <h2>Villians</h2>
                {characters.villains.map(({ name, powers, costume }) => (
                  <>
                    <h3>{name}</h3>
                    <p>{powers}</p>
                    <p>{costume}</p>
                  </>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HeroAndVillian;
