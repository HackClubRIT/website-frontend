# Hack Club RIT Website: Frontend

## Running the project
1. To install all modules listed as dependencies in package.json file, run `npm install`

2. To run the project locally, execute the following commands in separated windows of your terminal:

`npm run dev` and
`npm run dev:tailwindcss`

## Directory structure

The two directories in the root of the project are `src` and `static`.
### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js`, `template.html` file and a `routes` directory.

#### src/routes

There are two kinds of routes — *pages*, and *server routes*.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

* A file called `src/routes/newsletter.svelte` corresponds to the `/newsletter` route. 
* A file called `src/routes/events/[slug].svelte` corresponds to the `/events/:slug` route, in which case `params.slug` is available to the route
* The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route.


#### src/node_modules/images

Images added to `src/node_modules/images` can be imported into your code using `import 'images/<filename>'`. They will be given a dynamically generated filename containing a hash, allowing for efficient caching and serving the images on a CDN.

#### src/node_modules/@sapper

This directory is managed by Sapper and generated when building. It contains all the code you import from `@sapper` modules.

### static

The [static](static) directory contains static assets that should be served publicly. Files in this directory will be available directly under the root URL, e.g. an `image.jpg` will be available as `/image.jpg`.

The default [service-worker.js](src/service-worker.js) will preload and cache these files, by retrieving a list of `files` from the generated manifest:

```js
import { files } from '@sapper/service-worker';
```

If you have static files you do not want to cache, you should exclude them from this list after importing it (and before passing it to `cache.addAll`).

Static files are served using [sirv](https://github.com/lukeed/sirv).
