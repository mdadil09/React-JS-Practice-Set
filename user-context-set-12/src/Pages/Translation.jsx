import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Translation = () => {
  const { transData, changeLanguage, language } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newLang) => {
    changeLanguage(newLang);
    setIsOpen(true);
  };

  return (
    <div className="container">
      <h2>Language-Context</h2>
      <div className="trans">
        <div className="content">
          {transData && (
            <div className="data">
              <h3>{transData.en.hello}</h3>
              <h3>{transData.en.goodbye}</h3>
              {isOpen === true ? (
                <>
                  {language === "es" ? (
                    <>
                      <p>{transData.es.hello}</p>
                      <p>{transData.es.goodbye}</p>
                    </>
                  ) : (
                    <>
                      <p>{transData.fr.hello}</p>
                      <p>{transData.fr.goodbye}</p>
                    </>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
        <div className="buttons">
          <button onClick={() => handleChange("es")}>Spanish</button>
          <button onClick={() => handleChange("fr")}>French</button>
        </div>
      </div>
    </div>
  );
};

export default Translation;
