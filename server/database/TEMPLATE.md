# Json export schema 

### export json for Template:
- department
> used by HomePage

```json
departments: [
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
]
```
### export json for Template:
 - sidebar
 - professors list 

> used by HomePage sidebar Professor List
```json
ArticlesList: [
  {
    section: "section name",
    elements: [
      { id: 1, type: "lesson", name: "Wprowadzenie" },
      {
        type: "course",
        name: "course name",
        lessons: [
          { id: 2, type: "lesson", name: "lesson name" },
          { id: 3, type: "lesson", name: "lesson name" },
          ...
        ]
      },
      {
        type: "course",
        name: "course name",
        lessons: [
          { id: 9, type: "lesson", name: "lesson name" },
          { id: 10, type: "lesson", name: "lesson name" },
          ...
        ]
      }
    ]
  }
]

```