# README

Welcome to CS content 2.0.

## File Struture

```md
|- docs
|- pages/
|- |- demo/
|- |- |- file-name.mdx
|- |- program/
|- |- |- module/
|- |- |- |- |-content-name.mdx/
|- styles/
|- |- global.css
```

- For general purposes add your work in `pages/<purpose-folder>/<purpose>.mdx`
- For program specific contents add your work in `pages/<program>/{module+course}/{content}.mdx`
- Content: `section&number-type&order-activityName`
  - Section number : `s1`, `s2`
  - Lecture note: `ln1`, `ln2`
  - Assignments: `a1q` (question 1), `a1s` (solution 1)
  - Text book: `xxx`,`overview`

e.g. `\wv\m11\s1-a1q-basic-html`

READ ONLY files:

- `./styles/global.css` : Only use the prestyled classnames
- `./next.config.js` : configuration for Next app.

- The route should have the format: ``

## How to contribute

### Naming convention

```md
- Full-Stack Web Node Js : wv-node-js
```

### Git flow

- Clone/Pull existing main
- Start in a new branch
- Commit with meaningful message
- Push to the remote branch (not MAIN)
- Make a pull request from your remote branch to remote main

### Deployment flow

- Get the production link
- Create LW activity
- Embed link to the activity

## Read also

- [Intro](./pages/demo/intro-coder-labs.mdx)
