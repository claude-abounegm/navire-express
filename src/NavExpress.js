"use strict";

const _ = require("lodash");
const Nav = require("navire");

function init(init, opts) {
  return (req, res, next) => {
    if (!_.isPlainObject(res.locals)) {
      res.locals = {};
    }

    try {
      const { props, ...rest } = opts || {};
      const location = req.url;
      const nav = new Nav(init, { props: { ...props, location }, ...rest });

      // this will add [req, res] to any show() called in navire
      nav._showArgs.push(req, res);
      res.locals.nav = nav;
      res.nav = nav;

      next();
    } catch (e) {
      next(e);
    }
  };
}

module.exports = { init };
