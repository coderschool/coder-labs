summary: mock data with node js
id: wv-m31-node-practice
categories: web-development
tags: web-development
status: Published
authors: Tuan Hoang
Feedback Link: https://www.coderschool.vn

# NodeJs basic practice

## Exercise 1 : Introduction Node Module

1. Create this file structure

```
|- monday/
  |- outer.js
  |- layer1/
    |- index.js
  |- layer2/
    |- index.js
    |- data.js
  |- layer3/
    |- index.js
```

- in `layer1/index.js` export a module that return `hello world from layer 1 !`
- in `layer2/data.js` export a module that has:
  - 1 object contain 1 key `data`
  - `data` is an array contain 5 objects
  - each of the 5 object contain 2 keys-value pairs : `name:anyName` and `age:anyNumber`
- in `layer2/index.js` import data that previously made.
- in `layer2/index.js` export a module that when called : print to the console this format:
  ```console
  User name is : anyName
  User age is : anyAge
  ```
- in `layer3/index.js` import data from `layer2/data.js`
- in `layer3/index.js` export a module that contain a method that print to the console

  ```console
  User <anyName> is oldest, age <anyAge>
  User <anyName> is youngest, age <anyAge>
  ```

- finally, in `outer.js` import all module and execute in an order that print to the console. You may also have to add in some more command to complete the format
  ```console
  Hello world from layer1 !
  -------
  This is the list of Users :
  User name is <anyName>,
  User age is : <anyAge>
  ========
  User <anyName> is oldest, age <anyAge>
  User <anyName> is youngest, age <anyAge>
  ```

## Exercise 2 : JSON database

In reality, we will not commonly embeded data into our js file like the previous exercise.

We would store our data in a separated `.json` file and import it as needed. This would help other module able to access to the one database , one source of truth.

When reading data from a `.json` file the content should first be parse to a javacript object prior to further javascript operation.

```js
JSON.parse();
```

Vice versa , to write to a `.json` file, a javascript object must first be transformed into a JSON string prior to save.

```js
JSON.stringify();
```

- Examples on different between json vs js

```json
"data":{
  "name":"abc"
}
```

```js
data: {
  name: "abc";
}
```

- Make a `db.json` with the data from `data.js` in previous exercise at `root` of our project structure.
- in your `layer2/index` and `layer3/index` replace the use of `data.js` and change to `db.json` instead

- Hint : to read a file in your machine and retrieve info by Node File System module, we may need to consider which type of function to use **Synchronous** or **Asynchronous**. Also, a `Json` file format need to be turn to `JS` object before usage.

```js
... require("fs")
... fs.read... or fs.readSync...
... callBack???
... const data =  ...? JSON.parse() ???
```

- Test, make sure the outcomes on the console after refactoring code are identical to original
