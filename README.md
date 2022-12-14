# React Sample App

This is a sample React app, using a fake API server ([json-server](https://github.com/typicode/json-server)).
It is a small app where you can browse through a list of posts, see details of each individual post and add new posts.

Before starting the app, you would have first to install dependencies:

```
yarn install
```

In order to start a dev env app, you would need to add a `.dev.env` file to the root directory.

The `.dev.env` file only needs the `BASE_API_URL` key. If you don't change the port of your fake API server, it will use the default port: `3000`. So the contents of your `.dev.env` file could look like this:

```
BASE_API_URL=http://localhost:3000/
```

To start the server and the app simultaneously run the following command:

```
yarn start
```

And that's it. Enjoy! :D
