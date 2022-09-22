summary: mock data with node js
id: wv-m31-intro-to-express
categories: web-development
tags: web-development
status: Published
authors: Tuan Hoang
Feedback Link: https://www.coderschool.vn

# Intro to ExpressJs

## Express

It's time to build a backend. We'll do so by using a NPM package named [Express](https://expressjs.com/).

### Web Applications

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### APIs

With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

### Performance

Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

## Backend API server overview

An API server will allow us to `Create, Read, Update, Delete(C.R.U.D.)` a `resource/entity/foo` in our database through a `URL`.

| Route Name | URL         | HTTP Verb   | Description                                                           |
| ---------- | ----------- | ----------- | --------------------------------------------------------------------- |
| Index      | `/foos`     | `GET`       | Get **a list** of `foos`                                              |
| Create     | `/foos`     | `POST`      | Create a **new** `foo`                                                |
| Show       | `/foos/:id` | `GET`       | Get **a detailed** `foo`                                              |
| Edit       | `/foos/:id` | `PUT/PATCH` | Update a **property/attribute/params** of a `foo`                     |
| Destroy    | `/foos/:id` | `DELETE`    | Delete/Destroy/Remove **an individual** `foo` from the list of `foos` |

The URLs can also "listen" for `query parameters` and produce **dynamic** `results/output/data`.

Hint: try console.log the req object and checkout `body, params, query`

### Query String Params

We must also handle the following URLs.

| Route Name          | URL                          | HTTP Verb | Description                                                                                                    |
| ------------------- | ---------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| Index               | `/foos`                      | `GET`     | Get some `foos`. Defaulting to `pg=1` & `limit=20`                                                             |
| Search for spam     | `/foos?q=spam`               | `GET`     | Find a foo where it's title/name/description contains `spam`                                                   |
| English Foos        | `/foos?language=en`          | `GET`     | Get some `foos` where the language **property/attribute/params** of the foo is `English`                       |
| English Foos sorted | `/foos?language=en&sort=asc` | `GET`     | Get some `foos` where the language **property/attribute/params** of the foo is `English` & sorted in asc order |

## Middlewares I : App level middlewares

```js
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/news", indexRouter);
```

### Cors

CORS is a node.js package for providing a Connect / Express middleware that can be used to enable CORS with various options
It help us disable CORS error.
Readmore [here](https://github.com/expressjs/cors#:~:text=CORS%20is%20a%20node.js%20package%20for%20providing%20a,with%20various%20options.%20Follow%20me%20%28%40troygoode%29%20on%20Twitter%21)

### Morgan Logger

Logger is a technique in programming to keepin log of how an program running. It contain many errors such as process, success and error.

Morgan is an HTTP request logger middleware for node.js
Create a new morgan logger middleware function using the given format and options. The format argument may be a string of a predefined name (see below for the names), a string of a format string, or a function that will produce a log entry.

The format function will be called with three arguments tokens, req, and res, where tokens is an object with all defined tokens, req is the HTTP request and res is the HTTP response. The function is expected to return a string that will be the log line, or undefined / null to skip logging.
Readmore [here](https://www.npmjs.com/package/morgan)

### Path

In Node.js, the path module is an inbuilt module which deals with path and directories. Every Operating System has its own way of managing paths and the operations related to it.

For examples different OS will have different syntax to navigate in the file system. Path module help Node to adapt on the native OS syntax

- Window: ~\FolderA\FolderB\text.txt
- Linux: ~/FolderA/FolderB/text.txt

Readmore [here](https://javascript.plainenglish.io/path-module-in-node-js-46a244a9e47b)

### Cookie parser

This module help expose the cookies send along with client request. Which may use to help authorization , cache , ...
Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
Readmore [here](http://expressjs.com/en/resources/middleware/cookie-parser.html)

## Express API Routes management

### Scalable

In practices an api server may have multiple endpoints. We tend to group endpoint with the same nature together.
For examples, if we have the same amount of routes for each feature Create, Read, Update, Delete like the exercise.
Then apply that for:

- authors/ : everything related to CRUD authors info
- movies/ : everything related to CRUD movie data
- users/ : everything related to CRUD user info

Since each endpoints listed above serving 1 type of data. It is recommended that we group them in separated file

### File Structure and Index routes

Commonly ruotes folder will contain all endpoints and index will connected to each one and act as a mini router in our backend.

```
|- ruotes/
  |- index.js
  |- users.api.js
  |- authors.api.js
  |- movies.api.js
  |- news.api.js
```

## Execution of Express Generator project

Since we are working with multiple files in our codebase, it is very important that we understand how each line and file relate to eachother. A request from client will always go through its specific route to a result reponsding (success or error)

### Flowchart : Execution

Here is [A flow chart on how express file work](https://drive.google.com/file/d/1DYozhpx0zwEcNKEyKSHvroJduUQ4-9Yb/view?usp=sharing) that may help us to visuallize the process of the files

## Middlewares II : App level middlewares (cont)

### Express `next()`

So we have explore `req` `res` the only thing left in the Express Router callback arguments is `next()`

In short, `next()` is a method, when called, start **executing/calling/running** the next `middlewares` in the line.

```js
const express = require("express");
const app = express();

app.get("/same", function (req, res, next) {
  console.log("before request handler");
  next();
});

app.get("/same", function (req, res, next) {
  console.log("handling request");
  res.sendStatus(200);
  next();
});

app.get("/same", function (req, res, next) {
  console.log("after request handler");
  next();
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
```

- try ` http://localhost:3000/user/123`

```console
before request handler
handling request
after request handler
```

Try comment out the call to next() in the middle handler like this:

```js
app.get("/user/:id", function (req, res, next) {
  console.log("handling request");
  res.sendStatus(200);
  //next();
});
```

```console
before request handler
handling request
```

Notice that the last handler (the one that prints after request handler) does not run. That's because you are no longer telling express to run the next handler.

So it doesn't really matter if your "main" handler (the one that returns 200) was successful or not, if you want the rest of the middlewares to run, you have to call next().

Remember that node is async so it can't know when the first handler's callback has finished. You have to tell it by calling next().

Again here is [A flow chart on how express file work](https://drive.google.com/file/d/1DYozhpx0zwEcNKEyKSHvroJduUQ4-9Yb/view?usp=sharing) that may help us to visuallize the process of the files

### Error handling

The final puzzle in our Express code is Error handling middleware, which help us to handle in the event of error happen in our server code

```js
app.use((err, req, res, next) => {
  console.log("ERROR", err.message);
  return res.send(err.message);
});
```

An error handling middleware of express will have 4 arguments.
Notice the `err` argument, is carrying the `Error` object passed by method before it.

We will once again using this [flow chart on how express file work](https://drive.google.com/file/d/1DYozhpx0zwEcNKEyKSHvroJduUQ4-9Yb/view?usp=sharing) to undestand the logic of **Error handling**

### The magic control Try-catch(err)-next(err)

We doing a task with our server, no one could make sure that it will always success. So in the case of failure , we must be able to identify and handle it. Recall `try-catch` in previous weeks, wrapping tasks inside of `try-catch` help us control when "thing go wrong, do this instead of crashing my precious server".

- An ABCXYZ handler

```js
try {
  //dosomethiing that may be success or fail
} catch (err) {
  //dosomething when it fail and have err object
  next(err); // calling next-in-line-error-handling-middleware
}
```

Which is this middlewares in `app.js`

```js
app.use("/api",ABCXYZ) // see how this middlewares and it handler ABCXYZ run in prior

...
app.use((err, req, res, next) => {
  console.log("ERROR", err.message);
  return res.send(err.message);
});
```

### Throw

So sometime we want to make an error just for fun we could use

```js
throw new Error("error message");
```

and inside a `try-catch` your new error will be catch by the error catch handler.

```js
try {
  //dosomethiing that may be success or fail
  //but too lazy to do anything
  throw new Error("too lazy");
} catch (err) {
  //dosomething when it fail and have err object
  console.log(err.message); // too lazy
  next(err); // calling next-in-line-error-handling-middleware
}
```

## References

Hey there, travelers! if you want to learn everything about Express and RestfulAPI that has not been covered (lots of it), check out the links below to have better understanding of the concepts.

- [Routes](https://en.wikipedia.org/wiki/Routing)
  - Different URL endpoints used to produce different behavior. Usually CRUDing a resource
- [Query String/Parameters](https://en.wikipedia.org/wiki/Query_string)
  - String sent by client to tell the server what it wants
- [req](http://expressjs.com/en/api.html#req)
  - Object passed to handler containing information about the request
- [res](http://expressjs.com/en/api.html#res)
  - Object passed to handler allowing handler to send a response
- [HTTP Verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
  - Predefined verbs used when making REST requests
