const Article = {
  _id: "1",
  author: "Author1",

  topic: "Main Topic Name",
  course: "Course Name",

  content: [
    { type: "title", data: { text: "Lesson Name" } },
    {
      type: "section",
      data: {
        text: "section name",
        content: [
          {
            type: "paragraph",
            data: {
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque. Maecenas dignissim ante a elit congue maximus. Fusce imperdiet tortor quis mattis faucibus."
            }
          },
          { type: "subsection", data: { text: "Subsection name" } },
          {
            type: "paragraph",
            data: {
              text:
                'Lorem <mark class="cdx-marker">ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque.'
            }
          },
          {
            type: "paragraph",
            data: {
              text:
                'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.'
            }
          },
          { type: "subsection", data: { text: "Subsection 2 name" } },
          {
            type: "quote",
            data: {
              text: "Lorem ipsum dolor sit amet,",
              author: "lorem ipsum 1015"
            }
          },
          {
            type: "header",
            data: {
              text: "example name",
              icon: "<svg ...><path ...></path></svg>"
            }
          },
          {
            type: "image",
            data: {
              url: "https://image.url/imagename",
              description: "image caption"
            }
          },
          {
            type: "code",
            data: {
              text:
                '// Start of dummy file\nvar logUpperCase = function(){\n  const _this = this\n\n  this.string = this.string.toUpperCase()\n  return function () {\n    return console.log(_this.string)\n  }\n}\n\nlogUpperCase.call({ string: \'es6 rocks\' })()\n\n//Good looking example comment\nfunction examplefunction(param){\n  var text = "string";\n  for (let i = 0; i <param.lenght; i++) {\n    text += i;\n  }\n  return {\n    "text": text,\n    "boolean": false\n  };\n}'
            }
          },
          { type: "note", data: { style: "caution", text: "caution content" } },
          { type: "note", data: { style: "warning", text: "warning content" } },
          { type: "note", data: { style: "info", text: "note content" } },
          {
            type: "delimiter",
            data: {}
          },
          {
            type: "header",
            data: {
              text: "example name",
              icon: "<svg ...><path ...></path></svg>"
            }
          },
          {
            type: "list",
            data: {
              style: "ordered",
              items: ["1st line", "2nd line", "3rd line"]
            }
          },
          {
            type: "list",
            data: {
              style: "unordered",
              items: ["1st line", "2nd line", "3rd line"]
            }
          },
          {
            type: "embed",
            data: {
              service: "youtube",
              source: "https://www.youtube.com/watch?v=hHW1oY26kxQ",
              embed: "https://www.youtube.com/embed/hHW1oY26kxQ",
              description: "lorem ipsum"
            }
          },
          {
            type: "table",
            data: {
              content: [
                ["A", "B", "C", "D", "E"],
                ["1a", "1b", "1c", "1d", "1e"],
                ["2a", "2b", "2c", "2d", "2e"]
              ]
            }
          }
        ]
      }
    }
  ],
  _info: {
    createdDate: "2019-12-01",
    createdBy: "Author1",
    edit: [
      { _id: "1", date: "2019-12-01", by: "Author1" },
      { _id: "2", date: "2019-12-21", by: "Author1" },
      { _id: "3", date: "2019-12-22", by: "Author1" }
    ]
  }
};

export default Article;
