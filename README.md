# react-from-scratch
Use `main` as the default branch, not `master`.

## Learning Notes

### Prerequisites

This project expects:

* On the machine, we have `node --version | v12.18.3` somewhere.
* Globally installed is yarn `npm install -g yarn`.
* Locally in the project directory the following command is run `yarn set version 1.22.4`.

And it all runs with a simple `yarn start`.

### Some Details

[Parcel][parcel] and [React][react] are the main dependencies. [React Router][react-router] is in here because I am learning it right now and made a trivial demo.

At the time of this writing (26-08-2020) we have only the following in our Package.json.

*excerpt of package.json*
```json
"dependencies": {
  "babel-types": "^6.26.0",
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


I use [entr][entr]

---

[entr]: http://eradman.com/entrproject/
