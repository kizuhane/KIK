const Article = {
  _id: "1",
  author: "Henryk Budzisz",

  section: "Java",
  course: "Programowanie komponentowe",
  lesson: "Wprowadzenie",

  articleBody: [
    { type: "title", data: { text: "Wprowadzenie do komponętów" } },
    {
      type: "section",
      data: {
        text: "Czym jest komponent",
        content: [
          {
            type: "paragraph",
            data: {
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque. Maecenas dignissim ante a elit congue maximus. Fusce imperdiet tortor quis mattis faucibus."
            }
          },
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
          {
            type: "header",
            data: {
              text: "example name header1"
            }
          },
          {
            type: "code",
            data: {
              language: "javascript",
              text:
                '// Start of dummy file\nvar logUpperCase = function(){\n  const _this = this\n\n  this.string = this.string.toUpperCase()\n  return function () {\n    return console.log(_this.string)\n  }\n}\n\nlogUpperCase.call({ string: \'es6 rocks\' })()\n\n//Good looking example comment\nfunction examplefunction(param){\n  var text = "string";\n  for (let i = 0; i <param.lenght; i++) {\n    text += i;\n  }\n  return {\n    "text": text,\n    "boolean": false\n  };\n}'
            }
          }
        ]
      }
    },
    {
      type: "section",
      data: {
        text: "Struktura komponentu",
        content: [
          {
            type: "paragraph",
            data: {
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque. Maecenas dignissim ante a elit congue maximus. Fusce imperdiet tortor quis mattis faucibus."
            }
          },
          {
            type: "header",
            data: {
              text: "example name header1"
            }
          },
          {
            type: "code",
            data: {
              language: "javascript",
              text:
                '// Start of dummy file\nvar logUpperCase = function(){\n  const _this = this\n\n  this.string = this.string.toUpperCase()\n  return function () {\n    return console.log(_this.string)\n  }\n}\n\nlogUpperCase.call({ string: \'es6 rocks\' })()\n\n//Good looking example comment\nfunction examplefunction(param){\n  var text = "string";\n  for (let i = 0; i <param.lenght; i++) {\n    text += i;\n  }\n  return {\n    "text": text,\n    "boolean": false\n  };\n}'
            }
          },
          {
            type: "paragraph",
            data: {
              text:
                'Lorem <mark class="cdx-marker">ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque.'
            }
          },
          { type: "subsection", data: { text: "Subsection 2 name" } },
          {
            type: "paragraph",
            data: {
              text:
                'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.'
            }
          },
          {
            type: "image",
            data: {
              url: "http://placehold.jp/800x600.png",
              description:
                "image caption Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. "
            }
          },
          {
            type: "code",
            data: {
              language: "javascript",
              text:
                '// Start of dummy file\nvar logUpperCase = function(){\n  const _this = this\n\n  this.string = this.string.toUpperCase()\n  return function () {\n    return console.log(_this.string)\n  }\n}\n\nlogUpperCase.call({ string: \'es6 rocks\' })()\n\n//Good looking example comment\nfunction examplefunction(param){\n  var text = "string";\n  for (let i = 0; i <param.lenght; i++) {\n    text += i;\n  }\n  return {\n    "text": text,\n    "boolean": false\n  };\n}'
            }
          }
        ]
      }
    }
  ],
  _info: {
    UrlID: "",
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
