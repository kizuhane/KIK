export const departments = [
  {
    fullName: "Katedra Inżynierji Komputerowej",
    url: "KIK",
    descriptions: "Strona z dokumentcją Katedra Inżynierji Komputerowej"
  },
  {
    fullName: "Pokazowa strona testowa o url NEXT",
    url: "NEXT",
    descriptions: "Pokazowa strona testowa"
  },
  {
    fullName: "Pokazowa strona testowa o url NEW",
    url: "NEW",
    descriptions: "Pokazowa strona testowa"
  }
];

export const AvailablePages = departments.map(el => el.url);
