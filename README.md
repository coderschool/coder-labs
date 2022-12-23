# README

Welcome to CS content 2.0.

- <a href="https://coder-labs.netlify.app/" target="_blank">Production</a>

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
|- src/
|- |- routes
|- |- |- index.js
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

- IMPORTANT:
  - Remember to update path to your page in `routes/index.js` before commit.

## How to contribute?

- <a href="https://www.loom.com/share/0e45f18ccdfa4ada9dabb136d5ddecf8" target="_blank">Required: Issue to Pull Request</a>
- <a href="https://www.youtube.com/watch?v=8lGpZkjnkt4" target="_blank">Beginner: Github Pull Request</a>
- <a href="https://mdxjs.com/docs/troubleshooting-mdx/" target="_blank">MDX Troubleshoot</a>

### Deployment flow

- Get the production link
- Create a LearnWorld activity
- Embed link to the activity with the correct icon

## Read also

- [Intro](./pages/demo/intro-coder-labs.mdx)
