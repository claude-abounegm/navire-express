"use strict";

const _ = require("lodash");
const Navire = require("navire");

function init(init, opts) {
  return (req, res, next) => {
    if (!_.isPlainObject(res.locals)) {
      res.locals = {};
    }

    try {
      const { props, ...rest } = opts || {};
      const location = req.url;
      const navire = new Navire(init, {
        props: { ...props, location },
        ...rest
      });

      // this will add [req, res] to any show() called in navire
      navire._showArgs.push(req, res);
      res.locals.navire = navire;
      res.navire = navire;

      next();
    } catch (e) {
      next(e);
    }
  };
}

module.exports = { init };
