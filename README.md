# react-from-scratch
Use `main` as the default branch, not `master`.

## Learning Notes

### Prerequisites

This project expects:

* On the machine, we have `node --version | v12.18.3` somewhere.
* Globally installed is [ yarn ](https://classic.yarnpkg.com/en/docs/install#mac-stable).

And it all runs with a simple `yarn start`.

### Some Details

[Parcel][parcel] and [React][react] are the main dependencies. [React Router][react-router] is in here because I am learning it right now and made a trivial demo.

At the time of this writing (26-08-2020) we have only the following in our Package.json.

*excerpt of package.json*
```json
"dependencies": {
  "react": "^16.13.1",
  "react-dom": "^16.13.1",
  "react-router-dom": "^5.2.0"
},
"devDependencies": {
  "parcel-bundler": "^1.12.4"
```

We have the following file structure:

_not all files shown_
```
| public/
| | index.html
| src/
| | App.js
| package.json
| README.md
```

I use [entr][entr] to watch files. But you can use whatever you'd like.

---

[entr]: http://eradman.com/entrproject/
[parcel]: https://parceljs.org/
[react]: https://reactjs.org/
[react-router]: https://reactrouter.com/web/guides/quick-start

