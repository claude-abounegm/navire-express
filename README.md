# navire-express

Express plugin for Navire.

## Install

```bash
npm i navire navire-express
```

## Usage

```javascript
const NavireExpress = require("navire-express");

router.use(
  NavireExpress.init([{ type: "link", title: "Link1", href: "/link1" }], {
    props: { title: "App Title" }
  })
);

// ...

router.get("/link1", (req, res) => {
  // current url
  const { url } = req;

  const { navire } = res;

  const navItem = navire.findByHref(url);
});
```
