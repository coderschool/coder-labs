export const COURSE_ID = {
  WEB: "ftw-virgil",
  DS: "da-virgil",
  DEMO: "coder-labs-demo",
};

export const courseDSUnits = [];

export const courseDemoUnits = [
  {
    id: "demo/coder-labs",
    title: "CoderLabs Demo",
    path: "demo/coder-labs",
    courseUnits: [],
  },
  {
    id: "demo/intro-coder-labs",
    title: "Intro to CoderLabs",
    path: "demo/intro-coder-labs",
    courseUnits: [],
  },
  {
    id: "demo/practice",
    title: "CoderLabs Practice",
    path: "demo/practice",
    courseUnits: [],
  },
];

export const courseWebUnits = [
  {
    id: "wv/m11",
    title: "Module 1.1",
    courseUnits: [
      {
        id: "wv/m11/s4",
        title: "Section 4",
        courseUnits: [
          {
            id: "wv/m11/s4-a1s-intro-to-html",
            title: "Assignment 1 - Solution - Intro to HTML",
            path: "wv/m11/s4-a1s-intro-to-html",
          },
          {
            id: "wv/m11/s4-ln1-intro-html",
            title: "Lecture note 1 - Intro to HTML",
            path: "wv/m11/s4-ln1-intro-html",
          },
        ],
      },
      {
        id: "wv/m11/s2",
        title: "Section 2",
        courseUnits: [
          {
            id: "wv/m11/s2-ln1-intro-to-web",
            title: "Lecture note 1 - Intro to Web",
            path: "wv/m11/s2-ln1-intro-to-web",
          },
        ],
      },
      {
        id: "wv/m11/s5",
        title: "Section 5",
        courseUnits: [
          {
            id: "wv/m11/s5-a1s-intro-to-css",
            title: "Assignment 1 - Solution - Intro to CSS",
            path: "wv/m11/s5-a1s-intro-to-css",
          },
          {
            id: "wv/m11/s5-ln1-css-introduction",
            title: "Lecture note 1 - CSS introduction",
            path: "wv/m11/s5-a1s-intro-to-css",
          },
          {
            id: "wv/m11/s5-ln2-css-selectors",
            title: "Lecture note 2 - CSS selectors",
            path: "wv/m11/s5-a1s-intro-to-css",
          },
          {
            id: "wv/m11/s5-ln3-css-concepts",
            title: "Lecture note 3 - CSS concept",
            path: "wv/m11/s5-a1s-intro-to-css",
          },
        ],
      },
      {
        id: "wv/m11/s6",
        title: "Section 6",
        courseUnits: [
          {
            id: "wv/m11/s6-ln1-css-positioning-and-stacking",
            title: "Lecture note 1 - CSS positioning and stacking",
            path: "wv/m11/s6-ln1-css-positioning-and-stacking",
          },
          {
            id: "wv/m11/s6-a1s-css-layout",
            title: "Assignment 1 - Solution - CSS layout",
            path: "wv/m11/s6-a1s-css-layout",
          },
        ],
      },
    ],
  },
  {
    id: "wv/m12",
    title: "Module 1.2",
    courseUnits: [
      {
        id: "wv/m12/s2",
        title: "Section 2",
        courseUnits: [
          {
            id: "wv/m12/s2-a1s-karel",
            title: "Assignment 1 - Solution - Karel",
            path: "wv/m12/s2-a1s-karel",
          },
        ],
      },
    ],
  },
];

export const courses = [
  {
    id: COURSE_ID.WEB,
    title: "Full stack web development - Virgil",
    courseUnits: courseWebUnits,
  },
  {
    id: COURSE_ID.DS,
    title: "DS Virgil",
    courseUnits: courseDSUnits,
  },
  {
    id: COURSE_ID.DEMO,
    title: "CoderLabs Demo",
    courseUnits: courseDemoUnits,
  },
];
