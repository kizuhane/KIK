# KIK PAGE INFO

## ulr schema
#### for articles
```url
/[department]/:section#[course]/:[lesson]
```
| Params     | descriptions                   |
|------------|--------------------------------|
| department | main                           |
| section    | section of article             |
| course     | hash of course in section page |
| lesson     | lesson page                    |

#### for professors
```url
/[department]/Professors/:[name]
```
| Params       | descriptions                   |
|--------------|--------------------------------|
| department   | main                           |
| Professors   | list of all professors         |
| name         | individual page for professor  |

## Pages List with url

| path                       | descriptions                                |
|----------------------------|---------------------------------------------|
| /                          | home page with oder's departments           |
| /?/                        | landing page                                |
| /?/articles/               | default articles route render land ing page |
| /?/articles/section        | article page                                |
| /?/articles/section/lesson | lesson page                                 |
| /?/Professors              | list of all professors                      |
| /?/About                   | about page                                  |