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
