const Professor = {
  id: 1,
  name: "Henryk",
  surname: " Budzisz",
  titles: "prof. nadzw. dr hab. inż.",
  department: "Katedra Inżynierii Komputerowej",
  contactInfo: {
    address: "ul. Śniadeckich 2, pok. 206A, 75-453 Koszalin",
    mail: "henryk.budzisz@tu.koszalin.pl",
    phone: "48 94 3478 703"
  },
  ORCID: "0000-0003-2732-4323",
  photo: "http://placehold.jp/150x200.png?text=Henryk%20Budzisz",
  heldFunctions: [
    {
      header: "current",
      list: [
        "Członek Rady Wydziału",
        "Członek Rady Naukowej dyscypliny Automatyka, Elektronika i Elektrotechnika"
      ]
    },
    {
      header: "past",
      list: [
        "Dziekan Wydziału w latach 2001-2008",
        "Prodziekan ds. nauki (zastępca dyrektora) w latach 1993-1998",
        "Kierownik Katedry Inżynierii Komputerowej w latach 1989-2019"
      ]
    }
  ],
  ActivitiesList: [
    {
      sectionName: "Aktywność naukowa",
      subsection: [
        {
          name: "Ostatnie publikacje",
          list: [
            "Budzisz H., Evolutional searching for circuit structures, 1998, Electronics Letters, p. 1543-1545",
            "Budzisz H., Searching for TAC filter structures using rule-based system, 1989, IEE Conference Publication, p. 372-375",
            "Budzisz Henryk, Method of Accelerating the Computer Aided Analysis of Electronic Circuits. METODA PRZYSPIESZENIA KOMPUTEROWEJ ANALIZY UKLADOW ELEKTRONICZNYCH W ZAKRESIE PRADU STALEGO., 1977, Arch Elektrotech (Warsaw), p. 621-633",
            "Budzisz Henryk, DC Analysis of Integrated Circuits by a Numerical Method., 1976, Rozpr Elektrotech, p. 205-211"
          ]
        },
        {
          name:
            "Zamknięte przewody doktorskie na Wydziele Elektroniki i Informatyki",
          list: [
            "Ocena przydatności bramek cyfrowych pracujących w trybie prądowym w mieszanych systemach analogowo-cyfrowych. (Piotr Pawłowski)",
            "Wyłącznie tranzystorowy filtr zerowy i jego zastosowanie (Andrzej Kiełbasiński)"
          ]
        },
        {
          name:
            "Recenzowane prace doktorskie na Wydziele Elektroniki i Informatyki",
          list: [
            "Zastosowanie rekurencyjnych, półanalitycznych algorytmów splotowych w symulacjach obwodów elektrycznych (Radosław Łuczak)",
            "Wiarygodna implementacja algorytmów algebry liniowej w układach FPGA zbudowanych w oparciu o bramki prądowe (Natalia Maslennikowa)"
          ]
        }
      ]
    },
    {
      sectionName: "Aktywność dydaktyczna",
      subsection: [
        {
          name: "Ostatnie prace dyplomowe",
          list: [
            "Opracowanie gry z zastosowaniem technologii XNA- cz.2. (Łukasz Młynik)",
            "Opracowanie gry z zastosowaniem technologii XNA- cz.1. (Rafał Grzybek)",
            "Opracowanie modułu do harmonogramowania i wyceny sług. (Karol Korol)",
            "Gra 3D z wykorzystaniem silnika Unitry 3D- cz.2. (Jakub Horodko)",
            "Gra 3D z wykorzystaniem silnika Unitry 3D- cz.1 (Maciej Madaj)",
            "Aplikacja GIS do rejestracji przemieszczania się grupy użytkowników. (Mariusz Połchowski)",
            "Opracowanie systemu informatycznego do badania opinii publicznej przez internet. (Bartosz Lewandowski)",
            "Aplikacja na urządzenie mobilne zapisująca ścieżkę ruchu urządzenia w serwisie internetowym. (Kamil Biernat)",
            "Portal internetowy do prezentacji i sprzedaży systemów telewizji przemysłowej. (Marcin Poniatowski)",
            "  Opracowanie komponentu programowego pełniącego rolę tunera gitarowego. (Łukasz Król)"
          ]
        }
      ]
    },
    {
      sectionName: "Aktywność dydaktyczna",
      list: [
        "24.05.2019 - Gala 30-lecia Wydziału Elektroniki i Informatyki",
        "05.03.2019 - Seminarium naukowe",
        "15.01.2019 - Seminarium naukowe",
        "05.12.2018 - Udział w spotkaniu SPARKcamp #20 Debata!",
        "14.10.2017 - Nagrody JM Rektora za działalność dydaktyczną i organizacyjną - 2017r."
      ]
    },
    {
      sectionName: "Komisje",
      list: ["Komisja Programowa dla kierunku Informatyka"]
    }
  ],
  ArticlesList: [
    {
      section: "Java",
      elements: [
        { id: 1, type: "lesson", name: "Wprowadzenie" },
        {
          type: "course",
          name: "Instalacja",
          lessons: [
            { id: 2, type: "lesson", name: "Instalacja" },
            { id: 3, type: "lesson", name: "Cykl życia komponentu" },
            { id: 4, type: "lesson", name: "Model trójwarstwowy" },
            { id: 5, type: "lesson", name: "Model abstrakcyjny" },
            { id: 6, type: "lesson", name: "Komponenty sieciowe" },
            { id: 7, type: "lesson", name: "Przykłady w użyciu" },
            { id: 8, type: "lesson", name: "Przykładowe Zadania" }
          ]
        },
        {
          type: "course",
          name: "Programowanie komponentowe",
          lessons: [
            { id: 9, type: "lesson", name: "Wprowadzenie" },
            { id: 10, type: "lesson", name: "Cykl życia komponentu" },
            { id: 11, type: "lesson", name: "Model trójwarstwowy" },
            { id: 12, type: "lesson", name: "Model abstrakcyjny" },
            { id: 13, type: "lesson", name: "Komponenty sieciowe" },
            { id: 14, type: "lesson", name: "Przykłady w użyciu" },
            { id: 15, type: "lesson", name: "Przykładowe Zadania" }
          ]
        }
      ]
    },
    {
      section: "HTML",
      elements: [
        { id: 16, type: "lesson", name: "Wprowadzenie" },
        { id: 17, type: "lesson", name: "Struktura dokumentu" },
        {
          type: "course",
          name: "DOM",
          lessons: [
            { id: 18, type: "lesson", name: "Wprowadzenie" },
            { id: 19, type: "lesson", name: "head" },
            { id: 20, type: "lesson", name: "body" }
          ]
        }
      ]
    }
  ]
};

export default Professor;
