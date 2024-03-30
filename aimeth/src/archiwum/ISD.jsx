import "../styles/styleArchiwum/popUpKontent.css";
import { useEffect, useState } from "react";
import obraz from "../img/isd/archiwum11.png";
import obraz2 from "../img/isd/archiwum6.jpg";
import obraz4 from "../img/isd/archiwum9.png";
import obraz5 from "../img/isd/archiwum8.png";
import obraz6 from "../img/isd/archiwum4.jpg";
import obraz7 from "../img/isd/archiwum7.jpg";
import obraz8 from "../img/isd/archiwum12.png";
import obraz9 from "../img/isd/archiwum5.png";
import obraz10 from "../img/isd/archiwum13.jpg";
import obraz11 from "../img/isd/archiwum10.jpg";
import obraz12 from "../img/isd/archiwum3.png";
import obraz13 from "../img/isd/archiwum1.jpg";
import obraz14 from "../img/isd/archiwum2.jpg";
import Fullscreen from "../components/Fullscreen";
import { MdKeyboardBackspace } from "react-icons/md";
export default function ISD(props) {
  const [sciezka, setSciezka] = useState(null);
  const [jakiProjekt, setJakiProjekt] = useState(<DefaultKontent />);
  const [jakiObraz, setJakiObraz] = useState(obraz);
  const [fullscreen, setFullscreen] = useState(false);
  function DefaultKontent(props) {
    return (
      <>
        <h1>Inteligentne Systemy Diagnostyczne</h1>
        <h2>W ramach tego zagadnienia powstawały następujące projekty</h2>
        <ol>
          <li
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setJakiProjekt(<Linie />);
              setJakiObraz(obraz11);
            }}
          >
            System sterowania wybranej linii technologicznej z uwzględnieniem
            zagadnień inżynierii oprogramowania
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setJakiProjekt(<Lab />);
              setJakiObraz(obraz12);
            }}
          >
            System diagnostyczny stanowiska laboratoryjnego do symulacji
            procesów przemysłowych
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setJakiProjekt(<Stanowiska />);
              setJakiObraz(obraz13);
            }}
          >
            System diagnostyczny stanowiska do badania układów odpornych na
            błędy – moduł izolacji uszkodzeń
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setJakiProjekt(<Koncepcja />);
              setJakiObraz(obraz8);
            }}
          >
            Koncepcja systemu diagnostycznego stanowiska do badania układów
            odpornych na błędy – moduł detekcji uszkodzeń
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setJakiProjekt(<Automatyka />);
              setJakiObraz(obraz14);
            }}
          >
            Stanowisko laboratoryjne do badania systemów automatyki budynkowej
          </li>
        </ol>
      </>
    );
  }

  function Linie() {
    const [fullscreen, setFullscreen] = useState(false);
    const [sciezka, setSciezka] = useState(null);
    useEffect(() => {
      if (fullscreen === false) {
        document.querySelector(".popupClose").style.right = "7vw";
        document.querySelector(".popupClose").style.opacity = "1";
      }
    });
    return (
      <>
        {fullscreen ? (
          <Fullscreen
            zamknij={() => {
              setFullscreen(false);
            }}
            sciezka={sciezka}
          />
        ) : null}
        <MdKeyboardBackspace
          onClick={() => {
            setJakiProjekt(<DefaultKontent />);
            setJakiObraz(obraz);
          }}
          className="goBack2"
        />
        <h1>
          Opracowanie systemu sterowania wybranej linii technologicznej z
          uwzględnieniem zagadnień inżynierii oprogramowania
        </h1>
        <p>Autor: inż. M. Michalec (martyna.michalec95@gmail.com)</p>
        <br />
        <p>Opiekun: dr inż. P. Przystałka</p>
        <br />

        <p>
          Celem projektu było opracowanie systemu sterowania wybranego obiektu
          technologicznego zamodelowanego przy użyciu oprogramowania Factory
          I/O. Proces modelowania uwzględnił zagadnienia inżynierii
          oprogramowania.
        </p>
        <br />
        <br />
        <p>
          W celu realizacji projektu zostało utworzone środowisko pracy
          składające się z części rzeczywistej (sterownik PLC, panel HMI, kasety
          z przyciskami, kolumna sygnalizacyjna) oraz wirtualnej (stacja
          sortująca zamodelowana w środowisku symulacyjnym).
        </p>
        <br />
        <br />
        <p>
          Tworzenie oprogramowania odbywało się zgodnie z metodologią
          zmodyfikowanego modelu kaskadowego. W związku z powyższym zachowano
          kolejność wykonywania poszczególnych etapów: analizy, projektowania,
          implementacji oraz testowania oprogramowania. W pierwszej fazie
          została dokonana analiza koncepcji działania systemu oraz ograniczeń i
          warunków dotyczących jego pracy, które stanowiły ważną część całości
          projektu i miały mocny wpływ na dalszy jego przebieg. Następnie
          wypracowano algorytmy działania systemu oraz zaimplementowano je w
          środowisku programistycznym. W myśl zasad inżynierii oprogramowania
          zwiększono ergonomię pracy poprzez usystematyzowanie nadawania nazw
          blokom oraz zmiennym, jak również narzuceniu konwencji architektury
          projektu. Końcowym etapem pracy były badania weryfikacyjne
          potwierdzające poprawność działania systemu. Zostały przeprowadzone za
          pomocą modułu analizatora wartości logicznych udostępnionego przez
          narzędzie TIA Portal v14.
        </p>
        <br />
        <p>
          Prace nad projektem przyczyniły się do wykształcenia dobrych praktyk
          programistycznych podczas implementacji algorytmu sterującego.
          Realizacja projektu przy użyciu sterownika umożliwiła zapoznanie się z
          warstwą sprzętową systemu sterowania, a środowisko Factory I/O
          pozwoliło na symulację działania obiektu technologicznego.
        </p>
        <a
          target="_blank"
          href="https://sknaimeth.polsl.pl/wp-content/uploads/2017/11/Prezentacja.pdf"
        >
          <p>Prezentacja z projektu(pdf)</p>
        </a>
        <br />
        <div
          className="imgBelt"
          style={{
            height: "40vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(obraz2);
            }}
          >
            <img src={obraz2} alt="Linia" />
          </a>
        </div>
      </>
    );
  }

  function Lab() {
    const [fullscreen, setFullscreen] = useState(false);
    const [sciezka, setSciezka] = useState(null);
    useEffect(() => {
      if (fullscreen === false) {
        document.querySelector(".popupClose").style.right = "7vw";
        document.querySelector(".popupClose").style.opacity = "1";
      }
    });
    return (
      <>
        {fullscreen ? (
          <Fullscreen
            zamknij={() => {
              setFullscreen(false);
            }}
            sciezka={sciezka}
          />
        ) : null}
        <MdKeyboardBackspace
          onClick={() => {
            setJakiProjekt(<DefaultKontent />);
            setJakiObraz(obraz);
          }}
          className="goBack2"
        />
        <h1>
          System diagnostyczny stanowiska laboratoryjnego do symulacji procesów
          przemysłowych
        </h1>
        <p>Autor: inż. Sebastian Lenert</p>
        <br />
        <p>Opiekun: dr inż. Piotr Przystałka</p>
        <br />

        <p>
          Celem projektu jest zdobycie wiedzy z dziedziny diagnostyki procesów
          oraz praktycznych umiejętności w zakresie projektowania nowoczesnych
          systemów diagnostycznych spełniających wymagania idei Przemysłu 4.0.
        </p>
        <br />
        <br />
        <p>Zadania w ramach projektu dotyczą:</p>
        <br />
        <br />
        <ul>
          <li>
            Analizy budowy i zasady działania przykładowego stanowiska do
            symulacji procesów przemysłowych na przykładzie stanowiska PCS firmy
            FESTO.
          </li>
          <li>
            Pogłębienia wiedzy z dziedziny diagnostyki technicznej i procesowej
            oraz sposobów jej implementacji w inteligentnych fabrykach.
          </li>
          <li>
            Stworzenia koncepcji nowoczesnego systemu diagnostycznego
            spełniającego założenia Przemysłu 4.0.
          </li>
          <li>Zgromadzenie danych niezbędnych do utworzenia systemu.</li>
          <li>Utworzenie ekranów diagnostycznych panelu operatora.</li>
          <li>
            Opracowanie projektu i implementacja nowych algorytmów w sterowniku
            PLC.
          </li>

          <li>Opracowanie modułów/bibliotek systemu diagnostycznego.</li>
          <li>Przeprowadzenie badań weryfikacyjnych.</li>
          <li>Analiza wyników oraz sformułowanie wniosków.</li>
        </ul>
        <p>
          Praca dyplomowa będzie realizowana na stanowisku Festo Process Control
          System wyposażonym w sterownik Siemens S7-314C-2 DP. W skład
          stanowiska oprócz zbiorników i łączących je systemów rur wchodzą
          liczne urządzenia wykonawcze oraz pomiarowe takie jak: pompa, zawór
          proporcjonalny, układ grzewczy, czujniki (ultradźwiękowe,
          pojemnościowe, natężenia przepływu, termopara) i wiele innych.
        </p>
        <br />
        <p>
          Stanowisko PCS firmy Festo posiada 4 pętle sprzężenia zwrotnego, które
          składają się z wcześniej wspomnianych elementów wykonawczych oraz
          czujników analogowych i cyfrowych. Umożliwiają nam one regulację:
        </p>
        <ul>
          <li>Temperatury w zbiorniku</li>
          <li>Poziomu wody w zbiorniku</li>
          <li>Natężenia przepływu w zbiorniku</li>
          <li>Ciśnienia powietrza w zbiorniku</li>
        </ul>
        <p>
          Zadaniem jakie stoi przed autorem jest stworzenie na podstawie
          informacji jakie można zebrać z elementów pomiarowych stanowiska –
          kompleksowego systemu diagnostycznego realizującego wyzwania jakie
          stoją przed nowoczesnym przemysłem.
        </p>
        <br />
        <div
          className="imgBelt"
          style={{
            height: "40vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(obraz);
            }}
          >
            <img src={obraz} alt="Linia" />
          </a>
        </div>

        <div
          className="imgBelt"
          style={{
            height: "40vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(obraz4);
            }}
          >
            <img src={obraz4} alt="Linia" />
          </a>
        </div>
        <div
          className="imgBelt"
          style={{
            height: "40vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(obraz5);
            }}
          >
            <img src={obraz5} alt="Linia" />
          </a>
        </div>
      </>
    );
  }
  function Stanowiska() {
    const [fullscreen, setFullscreen] = useState(false);
    const [sciezka, setSciezka] = useState(null);
    useEffect(() => {
      if (fullscreen === false) {
        document.querySelector(".popupClose").style.right = "7vw";
        document.querySelector(".popupClose").style.opacity = "1";
      }
    });
    return (
      <>
        {fullscreen ? (
          <Fullscreen
            zamknij={() => {
              setFullscreen(false);
            }}
            sciezka={sciezka}
          />
        ) : null}
        <MdKeyboardBackspace
          onClick={() => {
            setJakiProjekt(<DefaultKontent />);
            setJakiObraz(obraz);
          }}
          className="goBack2"
        />
        <h1>
          System diagnostyczny stanowiska do badania układów odpornych na błędy
          – moduł izolacji uszkodzeń.
        </h1>
        <p>Autor: inż. B. Siwiński</p>
        <br />
        <p>Opiekun/Promotor: dr hab. inż. P. Przystałka</p>
        <br />

        <p>
          Praca dyplomowa magisterska o tytule ,,System diagnostyczny stanowiska
          do badania układów odpornych na błędy– moduł izolacji uszkodzeń”
          realizuje w swoje treści kroki mające na celu utworzenie modułu
          izolacji uszkodzeń będącego częścią system diagnostycznego oraz jego
          zaimplementowanie na stanowisku do badania układów odpornych na błędy.
        </p>
        <br />
        <br />
        <p>
          Na początek przeanalizowana została literatura w zakresie diagnostyki
          technicznej, w wyniku której zapoznano się z dostępnymi metodami
          izolacji uszkodzeń. Spośród dostępnych modeli bazujących na tych
          metodach wybrano i opisano dwa, reprezentujące różne podejścia:
          bazujące na wiedzy eksperckiej – system informacyjny i bazujące na
          danych historycznych – model z zastosowaniem sieci neuronowych.
          Następnie opracowano założenia i koncepcję modułu izolacji uszkodzeń.
        </p>
        <br />
        <br />
        <p>
          Kolejnym etapem było zebranie danych pomiarowych potrzebnych do
          trenowania sieci neuronowych, utworzenie i ocena obu algorytmów. W
          ramach systemu informacyjnego przeanalizowano przebiegi sygnałów
          diagnostycznego z modułu detekcji i opracowano macierz relacji, na
          podstawie której sformułowane zostały reguły. Izolację uszkodzeń z
          zastosowaniem sieci neuronowych zrealizowano za pomocą pięciu osobnych
          sieci neuronowych (po jednej dla każdego rozróżnianego stanu).
          Przeprowadzone zostały również badania w celu określenia optymalnej
          struktury sieci i wartości progowej funkcji wyjścia sieci neuronowej.
        </p>
        <p>
          Opracowane algorytmy zostały następnie zaimplementowane w środowisku
          MATLAB Simulink, na ekranie SCADA oraz na sterowniku. Implementacje te
          zostały następnie zweryfikowane za pomocą różnych testów w
          poszczególnych stanach układu. Ekran SCADA i program na sterowniku
          testowano równocześnie symulując poszczególne stany układu i
          sprawdzając zmiany na ekranie SCADA. Algorytmy zweryfikowano zbierając
          dane generowane przez moduł izolacji uszkodzeń dla poszczególnych
          stanów z uszkodzeniami. Wyniki badań algorytmów poddane zostały
          analizie, na podstawie której sformułowano wnioski. Na końcu
          przedstawiono kierunki dalszego rozwoju pracy.
        </p>
        <p>
          Wszystkie wyznaczone zadania zostały zrealizowane i opisane w
          raporcie. W wyniku tej pracy powstał moduł izolacji uszkodzeń systemu
          diagnostycznego dla stanowiska.
        </p>
        <br />
        <div
          className="imgBelt"
          style={{
            height: "40vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(obraz6);
            }}
          >
            <img src={obraz6} alt="Linia" />
          </a>
        </div>
      </>
    );
  }

  function Koncepcja() {
    const [fullscreen, setFullscreen] = useState(false);
    const [sciezka, setSciezka] = useState(null);
    useEffect(() => {
      if (fullscreen === false) {
        document.querySelector(".popupClose").style.right = "7vw";
        document.querySelector(".popupClose").style.opacity = "1";
      }
    });
    return (
      <>
        {fullscreen ? (
          <Fullscreen
            zamknij={() => {
              setFullscreen(false);
            }}
            sciezka={sciezka}
          />
        ) : null}
        <MdKeyboardBackspace
          onClick={() => {
            setJakiProjekt(<DefaultKontent />);
            setJakiObraz(obraz);
          }}
          className="goBack2"
        />
        <h1>
          Koncepcja systemu diagnostycznego stanowiska do badania układów
          odpornych na błędy – moduł detekcji uszkodzeń
        </h1>
        <p>Autor: inż. M. Sidowski</p>
        <br />
        <p>Opiekun: dr hab. inż. P. Przystałka</p>
        <br />

        <p>
          Praca dyplomowa magisterska opisuje kroki realizacji utworzenia modułu
          detekcji uszkodzeń wchodzącego w skład systemu diagnostycznego
          stanowiska do badania układów odpornych na błędy. W ramach pracy
          przeprowadzono badania literaturowe, które miały na celu przyswojenie
          wiadomości z dziedziny diagnostyki procesów, ze szczególnym wskazaniem
          na metodykę prowadzenia detekcji uszkodzeń. Wybrano trzy metody
          detekcji uszkodzeń, z których pierwsza polega na kontroli relacji
          między zmiennymi procesowymi, a pozostałe dwie opierają się na
          sztucznych sieciach neuronowych oraz modelach autoregresyjnych z
          zewnętrznym wejściem (ARX).
        </p>
        <br />
        <br />
        <p>
          W następnym kroku zdefiniowany został cykl technologiczny, który był
          podstawą do utworzenia systemu diagnostycznego. Zebrano dane
          zawierające historyczne przebiegi zmiennych procesowych w trakcie
          działania cyklu dla stanowiska w stanie pełnej zdatności oraz w
          różnych stanach z symulowanymi uszkodzeniami. Dane te zostały
          odpowiednio podzielone i przetworzone w celu wykorzystania do
          trenowania modeli neuronowych oraz ARX.
        </p>
        <br />
        <div
          className="imgBelt"
          style={{
            height: "40vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(obraz8);
            }}
          >
            <img src={obraz8} alt="Linia" />
          </a>
        </div>
        <br />
        <p>
          Bazując na wybranych metodach sporządzono szereg testów
          diagnostycznych, które, opierając się na aktualnych i historycznych
          wartościach zmiennych procesowych, obliczają symptomy wystąpienia
          uszkodzenia. Następnie przeprowadzana jest fuzja symptomów, która ma
          na celu ustalenie, czy obiekt badań znajduje się w stanie z
          uszkodzeniem. Powyższa koncepcja została zaimplementowana na
          komputerze klasy PC wchodzącym w skład badanego obiektu przy użyciu
          środowiska MATLAB & Simulink. Równocześnie utworzony został ekran
          SCADA pozwalający na wizualizację procesu oraz podgląd wyników
          otrzymywanych z modułu detekcji uszkodzeń.
        </p>
        <p>
          Ostatecznie przeprowadzone zostały eksperymenty mające na celu
          weryfikację działania modułu detekcji uszkodzeń oraz ekranu SCADA.
          Zostały zebrane zestawy danych dla wyników testów diagnostycznych oraz
          całego modułu detekcji dla stanowiska w stanie pełnej zdatności oraz w
          stanach z symulowanymi uszkodzeniami. Na bazie zebranych danych
          obliczono skuteczność modułu poprzez wyliczenie wskaźnika prawdziwych
          alarmów. wskaźnika fałszywych alarmów oraz opóźnień detekcji.
        </p>
        <p>
          Uzyskane wyniki potwierdzają poprawność przyjętej metodyki. Wyniki
          oraz cały proces tworzenia modułu zostały zebrane w formieraportu, na
          końcu którego przedstawiono wnioski oraz kierunki dalszego rozwoju
          projektu.
        </p>
        <br />
        <div
          className="imgBelt"
          style={{
            height: "40vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(obraz7);
            }}
          >
            <img src={obraz7} alt="Linia" />
          </a>
        </div>
      </>
    );
  }

  function Automatyka() {
    const [fullscreen, setFullscreen] = useState(false);
    const [sciezka, setSciezka] = useState(null);
    useEffect(() => {
      if (fullscreen === false) {
        document.querySelector(".popupClose").style.right = "7vw";
        document.querySelector(".popupClose").style.opacity = "1";
      }
    });
    return (
      <>
        {fullscreen ? (
          <Fullscreen
            zamknij={() => {
              setFullscreen(false);
            }}
            sciezka={sciezka}
          />
        ) : null}
        <MdKeyboardBackspace
          onClick={() => {
            setJakiProjekt(<DefaultKontent />);
            setJakiObraz(obraz);
          }}
          className="goBack2"
        />
        <h1>
          Stanowisko laboratoryjne do badania systemów automatyki budynkowej
        </h1>
        <p>Autor: inż. Wojciech Hańderek</p>
        <br />
        <p>Opiekun: dr inż. Wawrzyniec Panfil</p>
        <br />

        <p>Zadania do wykonania:</p>
        <br />
        <br />
        <ul>
          <li>
            Analiza zasady działania udostępnionego sprzętu laboratoryjnego
          </li>
          <li>Zdefiniowanie założeń projektu w porozumieniu z opiekunem</li>
          <li>
            Konfiguracja i zaprogramowanie sterownika PLC współpracującego ze
            środowiskiem Home IO
          </li>
          <li>
            Utworzenie systemu bezpieczeństwa symulowanego układu automatyki
            budynkowej
          </li>
          <li>
            Opracowanie wizualizacji zmiennych procesowych symulowanego układu
            automatyki
          </li>
          <li>
            Opracowanie planu badań i przeprowadzenie testów weryfikacyjnych
          </li>
          <li>Analiza wyników i sformułowanie wniosków</li>
          <li>Wykonanie dokumentacji techniczno-ruchowej stanowiska</li>
        </ul>

        <p>
          Przedmiotem zrealizowanego projektu inżynierskiego było stanowisko
          laboratoryjne do badania automatyki budynkowej. Celem pracy było
          opracowanie systemu sterowania z wykorzystaniem sterownika logicznego
          S7-1200 oraz środowiska symulacyjnego Home I/O, a także opracowanie
          dokumentacji techniczno-ruchowej stanowiska. System sterowania oparty
          na sterowniku PLC Siemens został zaprogramowany z wykorzystaniem
          oprogramowania TIA Portal. Wizualizacja na panel operatorski została
          zaprojektowana w narzędziu WinCC, będącym częścią programu TIA Portal.
          System bezpieczeństwa symulowanego układu jest zintegrowany z systemem
          sterowania inteligentnym budynkiem. Dokumentacja techniczno-ruchowa
          została wykonana zgodnie z zasadami tworzenia dokumentacji dla szaf
          sterowniczych, a projekt schematu elektrycznego został wykonany w
          oprogramowaniu DesignSparkElectrical. Przeprowadzone badania
          weryfikacyjne potwierdzają działanie systemu sterowania zgodne z
          przyjętymi założeniami.
        </p>
        <br />

        <br />
        <p>
          Bazując na wybranych metodach sporządzono szereg testów
          diagnostycznych, które, opierając się na aktualnych i historycznych
          wartościach zmiennych procesowych, obliczają symptomy wystąpienia
          uszkodzenia. Następnie przeprowadzana jest fuzja symptomów, która ma
          na celu ustalenie, czy obiekt badań znajduje się w stanie z
          uszkodzeniem. Powyższa koncepcja została zaimplementowana na
          komputerze klasy PC wchodzącym w skład badanego obiektu przy użyciu
          środowiska MATLAB & Simulink. Równocześnie utworzony został ekran
          SCADA pozwalający na wizualizację procesu oraz podgląd wyników
          otrzymywanych z modułu detekcji uszkodzeń.
        </p>
        <p>
          Ostatecznie przeprowadzone zostały eksperymenty mające na celu
          weryfikację działania modułu detekcji uszkodzeń oraz ekranu SCADA.
          Zostały zebrane zestawy danych dla wyników testów diagnostycznych oraz
          całego modułu detekcji dla stanowiska w stanie pełnej zdatności oraz w
          stanach z symulowanymi uszkodzeniami. Na bazie zebranych danych
          obliczono skuteczność modułu poprzez wyliczenie wskaźnika prawdziwych
          alarmów. wskaźnika fałszywych alarmów oraz opóźnień detekcji.
        </p>
        <p>
          Uzyskane wyniki potwierdzają poprawność przyjętej metodyki. Wyniki
          oraz cały proces tworzenia modułu zostały zebrane w formieraportu, na
          końcu którego przedstawiono wnioski oraz kierunki dalszego rozwoju
          projektu.
        </p>
        <br />
        <div
          className="imgBelt"
          style={{
            height: "40vh",
          }}
        >
          <a
            onClick={() => {
              setFullscreen(true);
              setSciezka(obraz9);
            }}
          >
            <img src={obraz9} alt="Linia" />
          </a>
        </div>
      </>
    );
  }

  useEffect(() => {
    if (fullscreen === false) {
      document.querySelector(".popupClose").style.right = "7vw";
      document.querySelector(".popupClose").style.opacity = "1";
    }
  });
  useEffect(() => {
    document.querySelector(".PP").style.backgroundImage =
      "url(" + jakiObraz + ")";
  }, [jakiObraz]);
  return (
    <div className="popUpKontent">
      {fullscreen ? (
        <Fullscreen
          zamknij={() => {
            setFullscreen(false);
          }}
          sciezka={sciezka}
        />
      ) : null}
      <div className="LP">{jakiProjekt}</div>
      <div
        className="PP"
        style={{
          backgroundImage: "url(" + obraz + ")",
          backgroundPosition: "50% 0",
        }}
      ></div>
    </div>
  );
}
