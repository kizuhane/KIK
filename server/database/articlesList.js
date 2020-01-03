const ArticlesListDepartments = [
  {
    departmentName: "KIK",
    ArticlesList: [
      {
        type: "section",
        name: "Android",
        icon:
          "M122 204V320C122 328 119.333 334.667 114 340C108.667 345.333 102 348 94 348C86 348 79 345.333 73 340C67 334.667 64 328 64 320V204C64 196.667 67 190.333 73 185C79 179.667 86 177 94 177C101.333 177 107.667 179.667 113 185C119 190.333 122 196.667 122 204ZM132 362V182H380V362C380 370 377 377 371 383C365 388.333 358 391 350 391H330V452C330 464 325.333 472.333 316 477C306.667 481.667 297.333 481.667 288 477C279.333 472.333 275 464 275 452V391H237V452C237 463.333 232.333 471.333 223 476C214.333 481.333 205.333 481.667 196 477C186.667 472.333 182 464 182 452V391H162C154 391 147 388.333 141 383C135 377 132 370 132 362ZM380 172H131C131 164 132 156 134 148C136 139.333 138.667 131.667 142 125C146 117.667 150.667 110.667 156 104C161.333 97.3333 167.333 91.6667 174 87C180.667 81.6667 187.667 77 195 73L176 38C174 35.3333 174.667 33.3333 178 32L182 34L202 70C238 54 274 54 310 70L330 34C331.333 31.3333 333 31 335 33C336.333 34.3333 336.667 36 336 38L317 73C336.333 83 351.667 97 363 115C374.333 132.333 380 151.333 380 172ZM207 124C209 122 210 119.667 210 117C210 114.333 209 112 207 110C205 107.333 202.333 106 199 106C196.333 106 194 107.333 192 110C190 112 189 114.333 189 117C189 119.667 190 122 192 124C194 126 196.333 127 199 127C202.333 127 205 126 207 124ZM320 124C322 122 323 119.667 323 117C323 114.333 322 112 320 110C318 107.333 315.667 106 313 106C310.333 106 307.667 107.333 305 110C303 112 302 114.333 302 117C302 119 302.333 121 303 123C304.333 124.333 305.667 125.333 307 126C309 126.667 311 127 313 127C315.667 127 318 126 320 124ZM418 177C423.333 177 428 178.333 432 181C436.667 183 440.333 186.333 443 191C446.333 195 448 199.333 448 204V320C448 328 445 334.667 439 340C433 345.333 426 348 418 348C410.667 348 404 345.333 398 340C392.667 334.667 390 328 390 320V204C390 196.667 392.667 190.333 398 185C404 179.667 410.667 177 418 177Z",
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
              { id: 329, type: "lesson", name: "test lesson 3" },
              { id: 324, type: "lesson", name: "test lesson 4" }
            ]
          },
          { id: 330, type: "lesson", name: "Wprowadzenie 1" },
          {
            type: "course",
            name: "Test course 2",
            lessons: [
              { id: 334, type: "lesson", name: "test lesson 5" },
              { id: 331, type: "lesson", name: "test lesson 6" },
              { id: 332, type: "lesson", name: "test lesson 7" },
              { id: 328, type: "lesson", name: "test lesson 8" }
            ]
          }
        ]
      },
      {
        type: "section",
        name: "Java",
        icon:
          "M343 313C290.333 327 230 331 162 325C124 321.667 106.333 316 109 308C109.667 306 112.667 303.667 118 301C131.333 294.333 144.667 289.667 158 287C171.333 283.667 181.667 282 189 282H199C199 282 185.333 286 158 294C138.667 302.667 141.333 308.667 166 312C193.333 315.333 234.333 315 289 311L366 300C357.333 304 349.667 308.333 343 313ZM257 281C246.333 271 237.333 262.333 230 255C222.667 247.667 215.333 239.667 208 231C201.333 222.333 196.333 214.333 193 207C190.333 199.667 189 192.333 189 185C189.667 177 192.333 169.667 197 163C204.333 152.333 216 140.333 232 127C248 113.667 262 102.333 274 93C286.667 83.6667 296.667 70.6667 304 54C311.333 37.3333 312.667 19.3333 308 0C308 0 311.333 5.33333 318 16C332 52.6667 311.667 92.3333 257 135C241.667 147.667 230.333 159.667 223 171C216.333 182.333 214 193 216 203C218 213 221 222 225 230C229 237.333 234.667 246 242 256C249.333 266 254.333 274.333 257 281ZM372 105C350.667 117 333.667 128 321 138C309 147.333 300 155.333 294 162C288.667 168.667 286.333 176 287 184C287.667 191.333 289 197.333 291 202C293.667 206 298 212.333 304 221C306 223 307.333 224.667 308 226C315.333 240 316.333 252.333 311 263C306.333 273.667 299 282.333 289 289L274 299C274.667 298.333 275.667 297.333 277 296C278.333 294.667 280.333 292 283 288C285.667 284 287.667 280 289 276C290.333 272 290.333 267.333 289 262C287.667 256 284.667 250.333 280 245C239.333 197.667 252.667 157.333 320 124C337.333 116 354.667 109.667 372 105ZM366 375C410.667 351.667 429.667 328.333 423 305C419 291.667 409.667 284.333 395 283C392.333 283 389.333 283.333 386 284C382.667 284.667 379 285.667 375 287C377.667 283.667 380.667 281.333 384 280C406 272 423.667 276 437 292C450.333 307.333 448.667 324.333 432 343C418 357.667 395.333 369.333 364 378C364.667 377.333 365.333 376.333 366 375ZM413 437C431 445 427 454.333 401 465C353.667 483.667 284.667 491 194 487C160.667 485 127.333 481.333 94 476C65.3333 471.333 59.6667 463.333 77 452C93.6667 440 113 433.667 135 433C142.333 433 147.333 434 150 436C145.333 436 139.333 436.667 132 438C112 442.667 101.333 448 100 454C100 456 101.667 457.667 105 459C132.333 469.667 180 474.667 248 474C316.667 473.333 366.333 468.333 397 459C406.333 455.667 412.333 452.333 415 449C417.667 445.667 418 443 416 441L413 437ZM189 396C189 396 187.333 398 184 402C182.667 406.667 189 409.667 203 411C237.667 415 273 413.667 309 407C318.333 412.333 328 416.667 338 420C292 440 245.667 444.333 199 433C175 427.667 163.667 420.667 165 412C165.667 406 173.667 400.667 189 396ZM369 493C389.667 489 406.333 484.333 419 479C431.667 474.333 439.333 470.667 442 468L445 464C443.667 483.333 417.667 496.667 367 504C316.333 512 263.333 514 208 510C173.333 508 149.333 503.667 136 497C162.667 502.333 198.667 504.667 244 504C290 504 331.667 500.333 369 493ZM326 353C332 359 339 363.333 347 366C287.667 383.333 233 387 183 377C159 372.333 148 365.667 150 357C151.333 351 160.333 345.333 177 340C176.333 340.667 175.667 341.333 175 342C174.333 342.667 173.333 344 172 346C170.667 348 170 350 170 352C170 353.333 171.333 355 174 357C177.333 358.333 182.333 359.333 189 360C233 364.667 278.667 362.333 326 353Z",
        elements: [
          { id: 100, type: "lesson", name: "Wprowadzenie do Java" },
          {
            type: "course",
            name: "Instalacja",
            lessons: [
              { id: 110, type: "lesson", name: "Instalacja" },
              { id: 111, type: "lesson", name: "Cykl życia komponentu" },
              { id: 112, type: "lesson", name: "Model trójwarstwowy" },
              { id: 113, type: "lesson", name: "Model abstrakcyjny" },
              { id: 114, type: "lesson", name: "Komponenty sieciowe" },
              { id: 115, type: "lesson", name: "Przykłady w użyciu" },
              { id: 116, type: "lesson", name: "Przykładowe Zadania" }
            ]
          },
          {
            type: "course",
            name: "Programowanie komponentowe",
            lessons: [
              { id: 120, type: "lesson", name: "Wprowadzenie do komponentów" },
              { id: 121, type: "lesson", name: "Cykl życia komponentu" },
              { id: 123, type: "lesson", name: "Model trójwarstwowy" },
              { id: 125, type: "lesson", name: "Model abstrakcyjny" },
              { id: 126, type: "lesson", name: "Komponenty sieciowe" },
              { id: 127, type: "lesson", name: "Przykłady w użyciu" },
              { id: 128, type: "lesson", name: "Przykładowe Zadania" }
            ]
          }
        ]
      },
      {
        type: "section",
        name: "HTML",
        icon:
          "M64 32H448L413 428L256 480L99 428L64 32ZM372 160L377 112H136L148 258H315L309 320L256 334L202 320L198 282H151L157 358L256 385H257L354 358L368 209H192L188 160H372Z",
        elements: [
          { id: 200, type: "lesson", name: "Wprowadzenie" },
          { id: 201, type: "lesson", name: "Struktura dokumentu" },
          {
            type: "course",
            name: "DOM",
            lessons: [
              { id: 202, type: "lesson", name: "Wprowadzenie do DOM" },
              { id: 203, type: "lesson", name: "head" },
              { id: 204, type: "lesson", name: "body" }
            ]
          }
        ]
      },
      {
        type: "section",
        name: "Windows Server",
        icon:
          "M32 94L216 68V246H32V94ZM32 418V268H216V444L32 418ZM236 446V268H480V480L236 446ZM236 66L480 32V246H236V66Z",
        elements: [
          { id: 400, type: "lesson", name: "Wprowadzenie" },
          { id: 401, type: "lesson", name: "Struktura dokumentu" },
          {
            type: "course",
            name: "Instalacja",
            lessons: [
              { id: 402, type: "lesson", name: "Instalacja lesson 1" },
              { id: 403, type: "lesson", name: "Instalacja lesson 2" },
              { id: 404, type: "lesson", name: "Instalacja lesson 3" }
            ]
          }
        ]
      },
      {
        type: "section",
        name: "Ochrona Informacji",
        icon:
          "M182.929 219.571V164.714C182.929 124.429 215.786 91.5714 256.071 91.5714C296.357 91.5714 329.214 124.429 329.214 164.714V219.571H182.929ZM420.643 247C420.643 231.857 408.357 219.571 393.214 219.571H384.071V164.714C384.071 94.4286 326.357 36.7143 256.071 36.7143C185.786 36.7143 128.071 94.4286 128.071 164.714V219.571H118.929C103.786 219.571 91.5 231.857 91.5 247V411.571C91.5 426.714 103.786 439 118.929 439H393.214C408.357 439 420.643 426.714 420.643 411.571V247Z",
        elements: [
          { id: 500, type: "lesson", name: "Wprowadzenie" },
          { id: 501, type: "lesson", name: "Znaczenie bezpieczeństwa" },
          {
            type: "course",
            name: "Ochrona Poczty",
            lessons: [
              { id: 502, type: "lesson", name: "test lesson 1" },
              { id: 503, type: "lesson", name: "test lesson 2" }
            ]
          }
        ]
      },
      {
        type: "section",
        name: "test section",
        icon: "",
        elements: [
          { id: 600, type: "lesson", name: "test lesson 1" },
          { id: 601, type: "lesson", name: "test lesson 2" },
          { id: 602, type: "lesson", name: "test lesson 3" },
          { id: 603, type: "lesson", name: "test lesson 4" },
          {
            type: "course",
            name: "Ochrona Poczty",
            lessons: [
              { id: 604, type: "lesson", name: "test lesson 5" },
              { id: 605, type: "lesson", name: "test lesson 6" }
            ]
          }
        ]
      },
      {
        type: "section",
        name: "empty test section",
        icon: "",
        elements: []
      }
    ]
  },
  {
    departmentName: "NEXT",
    ArticlesList: [
      {
        type: "section",
        name: "test section 1",
        icon: "",
        elements: [
          { id: 600, type: "lesson", name: "test lesson 1" },
          { id: 601, type: "lesson", name: "test lesson 2" },
          { id: 602, type: "lesson", name: "test lesson 3" },
          { id: 603, type: "lesson", name: "test lesson 4" },
          {
            type: "course",
            name: "Ochrona Poczty",
            lessons: [
              { id: 604, type: "lesson", name: "test lesson 5" },
              { id: 605, type: "lesson", name: "test lesson 6" }
            ]
          }
        ]
      },
      {
        type: "section",
        name: "test section 2",
        icon: "",
        elements: [
          { id: 700, type: "lesson", name: "test lesson 1" },
          { id: 701, type: "lesson", name: "test lesson 2" },
          { id: 702, type: "lesson", name: "test lesson 3" },
          { id: 703, type: "lesson", name: "test lesson 4" },
          {
            type: "course",
            name: "Ochrona Poczty",
            lessons: [
              { id: 704, type: "lesson", name: "test lesson 5" },
              { id: 705, type: "lesson", name: "test lesson 6" }
            ]
          }
        ]
      }
    ]
  },
  {
    departmentName: "NEW",
    ArticlesList: []
  }
];
module.exports = ArticlesListDepartments;
