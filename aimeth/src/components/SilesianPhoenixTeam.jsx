import React from "react";

function SilesianPhoenixTeam() {
  return (
    <div className="silesianPhoenixTeam">
      <div className="shadow"></div>
      <h2 className="teamText">
        Poznajcie <b>zespół</b>
        <div className="line"></div>
      </h2>
      <div className="team">
        <div className="first--row">
          <div className="person ">
            <div className="photo Jakub"></div>
            <h2>inż. Jakub Gurgul</h2>
            <div className="line"></div>
            <h3>
              <b>Lider zespołu Silesian Phoenix</b> oraz sekcji
              programistycznej. Zarządza również{" "}
              <b>mediami społecznościowymi</b> oraz dba o właściwy kontakt ze{" "}
              <b>sponsorami</b>.
            </h3>
          </div>
          <div className="person">
            <div className="photo Andrzej"></div>
            <h2>mgr inż. Andrzej Jałowiecki</h2>
            <div className="line"></div>
            <h3>
              <b>Opiekun naukowy projektu</b> , niezastąpiony w kontaktach z
              Uczelnią. Prowadzi{" "}
              <b>szkolenia, wspiera merytorycznie oraz technicznie</b> cały
              zespół.
            </h3>
          </div>
        </div>
        <div className="second--row">
          <div className="person">
            <div className="photo Dominik"></div>
            <h2>Dominik Włodarczyk</h2>
            <div className="line"></div>
            <h3>
              Lider sekcji mechanicznej, odpowiedzialny za układy mechaniczne
              takie jak: układ manipulacyjny, zawieszenia czy pobierania próbek
              gleby.
            </h3>
          </div>
          <div className="person">
            <div className="photo Radek"></div>
            <h2>Radosław Kępa</h2>
            <div className="line"></div>
            <h3>
              Lider sekcji elektronicznej, odpowiedzialny za wszystko co
              zasilane jest prądem wewnątrz łazika czyli pakiety bateryjne,
              czujnik oraz podzespoły obliczeniowe.
            </h3>
          </div>
          <div className="person">
            <div className="photo Urszula"></div>
            <h2>inż. Urszula Cojg</h2>
            <div className="line"></div>
            <h3>
              Lider sekcji naukowej, zajmuje się przygotowaniem misji naukowych
              na zawody. Opracowuje eksperymenty i badania niezbędne do
              wykonania misji.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SilesianPhoenixTeam;
