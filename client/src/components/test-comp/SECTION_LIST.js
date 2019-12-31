const sectionList = {
  type: "section",
  name: "Android",
  elements: [
    { id: 300, type: "lesson", name: "Wprowadzenie" },
    {
      type: "course",
      name: "Instalacja",
      lessons: [
        { id: 310, type: "lesson", name: "Instalacja" },
        { id: 311, type: "lesson", name: "IDE" }
      ]
    },
    {
      type: "course",
      name: "Test course",
      lessons: [
        { id: 321, type: "lesson", name: "test lesson 1" },
        { id: 323, type: "lesson", name: "test lesson 2" },
        { id: 323, type: "lesson", name: "test lesson 3" },
        { id: 324, type: "lesson", name: "test lesson 4" }
      ]
    },
    { id: 330, type: "lesson", name: "Wprowadzenie 1" },
    {
      type: "course",
      name: "Test course 2",
      lessons: [
        { id: 330, type: "lesson", name: "test lesson 5" },
        { id: 331, type: "lesson", name: "test lesson 6" },
        { id: 332, type: "lesson", name: "test lesson 7" },
        { id: 323, type: "lesson", name: "test lesson 8" }
      ]
    }
  ]
};

export default sectionList;
