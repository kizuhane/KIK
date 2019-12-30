# Json export schema for lessons

### export json for:
 - sidebar
 - professors list 

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