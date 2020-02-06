# navire-express

Express plugin for Navire.

## Install

```bash
npm i navire navire-express
```

## Usage

```javascript
const NavExpress = require("navire-express");

router.use(
  NavExpress.init([{ type: "link", title: "Link1", href: "/link1" }], {
    props: { title: "App Title" }
  })
);

// ...

router.get("/link1", (req, res) => {
  // current url
  const { url } = req;

  const { nav } = res;

  const navItem = nav.findByHref(url);
});
```
