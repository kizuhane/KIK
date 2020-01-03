const articlesDB = [
  {
    departmentName: "KIK",
    Articles: [
      {
        _id: "1",
        author: "Henryk Budzisz",

        section: "Java",
        course: "Programowanie komponentowe",
        lesson: "Wprowadzenie do Java",

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
      },
      {
        _id: "2",
        author: "Henryk Budzisz",

        section: "Java",
        course: "Programowanie komponentowe",
        lesson: "Cykl życia komponentu",

        articleBody: [
          { type: "title", data: { text: "Lesson Name" } },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Lorem <mark>ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque."
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
                  type: "paragraph",
                  data: {
                    text:
                      'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.'
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
                  }
                },
                {
                  type: "header",
                  data: {
                    text: "example name header1"
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
                },
                {
                  type: "note",
                  data: {
                    style: "caution",
                    text:
                      "CAUTION CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia hendrerit velit non consectetur. "
                  }
                },
                {
                  type: "note",
                  data: {
                    style: "warning",
                    text:
                      "WARNING CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia hendrerit velit non consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean a orci vitae nunc dapibus condimentum. Duis ac molestie sapien, blandit consectetur dui. Pellentesque sit amet arcu nisi."
                  }
                },
                {
                  type: "note",
                  data: {
                    style: "info",
                    text:
                      "NOTE CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia hendrerit velit non consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean a orci vitae nunc dapibus condimentum."
                  }
                },
                {
                  type: "delimiter",
                  data: {}
                },
                {
                  type: "header",
                  data: {
                    text: "example name"
                  }
                },
                {
                  type: "list",
                  data: {
                    style: "ordered",
                    items: ["1st <b>line</b>", "2nd <i>line</i>", "3rd line"]
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
                    embed: "https://www.youtube-nocookie.com/embed/hHW1oY26kxQ",
                    description: "lorem ipsum youtube"
                  }
                },
                {
                  type: "table",
                  data: {
                    content: [
                      [
                        "<strong>A</strong>",
                        "<strong>B</strong>",
                        "<strong>C</strong>",
                        "<strong>D</strong>",
                        "<strong>E</strong>"
                      ],
                      ["1a", "1b", "1c", "1d", "1e"],
                      ["2a", "2b", "2c", "2d", "2e"]
                    ]
                  }
                },
                {
                  type: "rawHtml",
                  data: {
                    text: "<button>Click ME</button>"
                  }
                },
                {
                  type: "linkList",
                  data: {
                    items: [
                      {
                        href: "https://www.google.com/",
                        text: "test link google"
                      },
                      {
                        href: "https://stackoverflow.com/",
                        text: "test link stackoverflow"
                      },
                      { href: "https://medium.com/", text: "test link medium" }
                    ]
                  }
                },
                {
                  type: "embed",
                  data: {
                    service: "codesandbox",
                    source: "https://codesandbox.io/s/react-router-basic-bnpsd",
                    embed:
                      "https://codesandbox.io/embed/react-router-basic-bnpsd",
                    description: "lorem ipsum codesandbox"
                  }
                },
                {
                  type: "embed",
                  data: {
                    service: "codepen",
                    source: "https://codepen.io/alichur/pen/OJJNZYO",
                    embed: "https://codepen.io/alichur/embed/preview/OJJNZYO",
                    description: "lorem ipsum codepen"
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
      },
      {
        _id: "3",
        author: "Adam Słowik",

        section: "HTML",
        course: "",
        lesson: "Wprowadzenie",

        articleBody: [
          { type: "title", data: { text: "Wprowadzenie" } },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "subsection",
                  data: { text: "Subsection name 1 Section1" }
                },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Lorem <mark>ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque."
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
                  type: "note",
                  data: {
                    style: "caution",
                    text:
                      "CAUTION CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia hendrerit velit non consectetur. "
                  }
                },
                {
                  type: "list",
                  data: {
                    style: "ordered",
                    items: ["1st <b>line</b>", "2nd <i>line</i>", "3rd line"]
                  }
                },
                {
                  type: "table",
                  data: {
                    content: [
                      [
                        "<strong>A</strong>",
                        "<strong>B</strong>",
                        "<strong>C</strong>",
                        "<strong>D</strong>",
                        "<strong>E</strong>"
                      ],
                      ["1", "1", "1", "1", "1"],
                      ["2", "2", "2", "2", "2"],
                      ["3", "3", "3", "3", "3"],
                      ["4", "4", "4", "4", "4"]
                    ]
                  }
                },
                {
                  type: "embed",
                  data: {
                    service: "codepen",
                    source: "https://codepen.io/alichur/pen/OJJNZYO",
                    embed: "https://codepen.io/alichur/embed/preview/OJJNZYO",
                    description: "lorem ipsum codepen"
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "subsection",
                  data: { text: "Subsection name 1 lorem" }
                },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Lorem <mark>ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque."
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
                  type: "note",
                  data: {
                    style: "caution",
                    text:
                      "CAUTION CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia hendrerit velit non consectetur. "
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
              text: "Section name 3",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 4" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Lorem <mark>ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque."
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
                  type: "note",
                  data: {
                    style: "caution",
                    text:
                      "CAUTION CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia hendrerit velit non consectetur. "
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
          createdDate: "2019-12-01",
          createdBy: "Author1",
          edit: [
            { _id: "1", date: "2019-12-01", by: "Author1" },
            { _id: "2", date: "2019-12-21", by: "Author1" },
            { _id: "3", date: "2019-12-22", by: "Author1" }
          ]
        }
      },
      {
        _id: "4",
        author: "Adam Słowik",

        section: "HTML",
        course: "",
        lesson: "Struktura dokumentu",

        articleBody: [
          { type: "title", data: { text: "Struktura dokumentu" } },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "subsection",
                  data: { text: "Subsection 1 Section 1" }
                },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Lorem <mark>ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque."
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
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "subsection",
                  data: { text: "Subsection name 1 lorem" }
                },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Lorem <mark>ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque."
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
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 3",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 4" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Lorem <mark>ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque."
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
          createdDate: "2019-12-01",
          createdBy: "Author1",
          edit: [
            { _id: "1", date: "2019-12-01", by: "Author1" },
            { _id: "2", date: "2019-12-21", by: "Author1" },
            { _id: "3", date: "2019-12-22", by: "Author1" }
          ]
        }
      },
      {
        _id: "5",
        author: "Adam Słowik",

        section: "HTML",
        course: "DOM",
        lesson: "Wprowadzenie do DOM",

        articleBody: [
          { type: "title", data: { text: "Wprowadzenie" } },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Lorem <mark>ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque."
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
          createdDate: "2019-12-01",
          createdBy: "Author1",
          edit: [
            { _id: "1", date: "2019-12-01", by: "Author1" },
            { _id: "2", date: "2019-12-21", by: "Author1" },
            { _id: "3", date: "2019-12-22", by: "Author1" }
          ]
        }
      },
      {
        _id: "6",
        author: "Adam Słowik",

        section: "HTML",
        course: "DOM",
        lesson: "head",

        articleBody: [
          { type: "title", data: { text: "head" } },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
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
                  type: "paragraph",
                  data: {
                    text:
                      "Lorem <mark>ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque."
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
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
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
                  type: "embed",
                  data: {
                    service: "youtube",
                    source: "https://www.youtube.com/watch?v=hHW1oY26kxQ",
                    embed: "https://www.youtube-nocookie.com/embed/hHW1oY26kxQ",
                    description: "lorem ipsum youtube"
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
              text: "Section name 3",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "header",
                  data: {
                    text: "example name header1"
                  }
                },
                {
                  type: "note",
                  data: {
                    style: "warning",
                    text:
                      "WARNING CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia hendrerit velit non consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean a orci vitae nunc dapibus condimentum. Duis ac molestie sapien, blandit consectetur dui. Pellentesque sit amet arcu nisi."
                  }
                },
                {
                  type: "subsection",
                  data: { text: "Subsection 1 Section 3" }
                },
                {
                  type: "embed",
                  data: {
                    service: "youtube",
                    source: "https://www.youtube.com/watch?v=hHW1oY26kxQ",
                    embed: "https://www.youtube-nocookie.com/embed/hHW1oY26kxQ",
                    description: "lorem ipsum youtube"
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
          createdDate: "2019-12-01",
          createdBy: "Author1",
          edit: [
            { _id: "1", date: "2019-12-01", by: "Author1" },
            { _id: "2", date: "2019-12-21", by: "Author1" },
            { _id: "3", date: "2019-12-22", by: "Author1" }
          ]
        }
      },
      {
        _id: "7",
        author: "Adam Słowik",

        section: "HTML",
        course: "DOM",
        lesson: "body",

        articleBody: [
          { type: "title", data: { text: "body" } },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
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
                      "Lorem <mark>ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor maximus porttitor. Fusce id placerat lectus. Vivamus vehicula nibh</mark> vitae lectus congue, et dictum tellus pulvinar. Etiam convallis quis sapien quis bibendum. Donec posuere tincidunt quam tincidunt pellentesque."
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
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "embed",
                  data: {
                    service: "youtube",
                    source: "https://www.youtube.com/watch?v=hHW1oY26kxQ",
                    embed: "https://www.youtube-nocookie.com/embed/hHW1oY26kxQ",
                    description: "lorem ipsum youtube"
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
          createdDate: "2019-12-01",
          createdBy: "Author1",
          edit: [
            { _id: "1", date: "2019-12-01", by: "Author1" },
            { _id: "2", date: "2019-12-21", by: "Author1" },
            { _id: "3", date: "2019-12-22", by: "Author1" }
          ]
        }
      },
      {
        _id: "8",
        author: "Adam Słowik",

        section: "Windows Server",
        course: "",
        lesson: "Wprowadzenie",

        articleBody: [
          { type: "title", data: { text: "Wprowadzenie do Windows Server" } },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "embed",
                  data: {
                    service: "youtube",
                    source: "https://www.youtube.com/watch?v=hHW1oY26kxQ",
                    embed: "https://www.youtube-nocookie.com/embed/hHW1oY26kxQ",
                    description: "lorem ipsum youtube"
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
          createdDate: "2019-12-01",
          createdBy: "Author1",
          edit: [
            { _id: "1", date: "2019-12-01", by: "Author1" },
            { _id: "2", date: "2019-12-21", by: "Author1" },
            { _id: "3", date: "2019-12-22", by: "Author1" }
          ]
        }
      },
      {
        _id: "9",
        author: "Adam Słowik",

        section: "Windows Server",
        course: "Instalacja",
        lesson: "Struktura",

        articleBody: [
          { type: "title", data: { text: "Struktura Windows Server" } },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "10",
        author: "Piotr Ratuszniak",

        section: "Windows Server",
        course: "Instalacja",
        lesson: "lesson 1",

        articleBody: [
          {
            type: "title",
            data: { text: " Instalacja lesson 1 Windows Server" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "11",
        author: "Piotr Ratuszniak",

        section: "Windows Server",
        course: "Instalacja",
        lesson: "lesson 2",

        articleBody: [
          {
            type: "title",
            data: { text: " Instalacja lesson 2 Windows Server" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "12",
        author: "Piotr Ratuszniak",

        section: "Windows Server",
        course: "Instalacja",
        lesson: "lesson 3",

        articleBody: [
          {
            type: "title",
            data: { text: " Instalacja lesson 3 Windows Server" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "13",
        author: "Piotr Ratuszniak",

        section: "Ochrona Informacji",
        course: "",
        lesson: "Wprowadzenie",

        articleBody: [
          { type: "title", data: { text: " Wprowadzenie Ochrona Informacji" } },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "14",
        author: "Piotr Ratuszniak",

        section: "Ochrona Informacji",
        course: "",
        lesson: "Znaczenie bezpieczeństwa",

        articleBody: [
          {
            type: "title",
            data: { text: " Znaczenie bezpieczeństwa Ochrona Informacji" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "15",
        author: "Piotr Ratuszniak",

        section: "Ochrona Informacji",
        course: "Ochrona Poczty",
        lesson: "test lesson 1",

        articleBody: [
          {
            type: "title",
            data: { text: "Ochrona Informacji - test lesson 1" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "16",
        author: "Włodzimierz Khadzhynov",

        section: "Ochrona Informacji",
        course: "Ochrona Poczty",
        lesson: "test lesson 2",

        articleBody: [
          {
            type: "title",
            data: { text: "Ochrona Informacji - test lesson 2" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "17",
        author: "Włodzimierz Khadzhynov",

        section: "Android",
        course: "",
        lesson: "Wprowadzenie",

        articleBody: [
          {
            type: "title",
            data: { text: "Wprowadzenie" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "18",
        author: "Włodzimierz Khadzhynov",

        section: "Android",
        course: "Instalacja",
        lesson: "Instalacja",

        articleBody: [
          {
            type: "title",
            data: { text: "Instalacja" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "18",
        author: "Włodzimierz Khadzhynov",

        section: "Android",
        course: "Instalacja",
        lesson: "IDE",

        articleBody: [
          {
            type: "title",
            data: { text: "IDE" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      }
    ]
  },
  {
    departmentName: "NEXT",
    Articles: [
      {
        _id: "18",
        author: "Włodzimierz Khadzhynov",

        section: "test section 1",
        course: "",
        lesson: "test lesson 2",

        articleBody: [
          {
            type: "title",
            data: { text: "test lesson 2" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "18",
        author: "Włodzimierz Khadzhynov",

        section: "test section 1",
        course: "",
        lesson: "test lesson 1",

        articleBody: [
          {
            type: "title",
            data: { text: "test lesson 1" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "18",
        author: "Włodzimierz Khadzhynov",

        section: "test section 1",
        course: "",
        lesson: "test lesson 3",

        articleBody: [
          {
            type: "title",
            data: { text: "test lesson 3" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "18",
        author: "Włodzimierz Khadzhynov",

        section: "test section 1",
        course: "",
        lesson: "test lesson 4",

        articleBody: [
          {
            type: "title",
            data: { text: "test lesson 4" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "18",
        author: "Włodzimierz Khadzhynov",

        section: "test section 1",
        course: "Ochrona Poczty",
        lesson: "test lesson 5",

        articleBody: [
          {
            type: "title",
            data: { text: "test lesson 5" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      },
      {
        _id: "18",
        author: "Włodzimierz Khadzhynov",

        section: "test section 1",
        course: "Ochrona Poczty",
        lesson: "test lesson 6",

        articleBody: [
          {
            type: "title",
            data: { text: "test lesson 6" }
          },
          {
            type: "section",
            data: {
              text: "Section name 1",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                { type: "subsection", data: { text: "Subsection name 1" } },
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                }
              ]
            }
          },
          {
            type: "section",
            data: {
              text: "Section name 2",
              content: [
                {
                  type: "paragraph",
                  data: {
                    text:
                      "Given <mark>data can be used</mark> as you want: render with HTML for <code>Web clients</code>, render natively for <code>mobile apps</code>, create markup for <code>Facebook Instant Articles</code> or <code>Google AMP</code>, generate an <code>audio version</code> and so on."
                  }
                },
                {
                  type: "quote",
                  data: {
                    text:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sapien ac bibendum tincidunt. Etiam mi quam, posuere vel massa eu, imperdiet venenatis sem. Nunc ut risus consequat, tempus eros mattis, mattis eros. Curabitur venenatis, nunc vel gravida tempor, mi lorem malesuada metus, et mollis turpis nisi in ante. Donec sed est hendrerit, congue nunc nec, pharetra turpis. Maecenas et tellus eu ligula bibendum facilisis vitae id est. In sit amet tortor magna. Nullam semper finibus lectus, eget rhoncus nisi finibus eget. Nulla fermentum est rhoncus auctor imperdiet. Integer consectetur egestas ante, sagittis tristique ante rutrum sed. Nulla aliquet vestibulum. ",
                    author: "lorem ipsum 1015"
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
      }
    ]
  },
  {
    departmentName: "NEW",
    Articles: []
  }
];

module.exports = articlesDB;
