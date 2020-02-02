"use strict";

const _ = require("lodash");
const Nav = require("navire");

function middleware() {
  return (req, res, next) => {
    this._showArgs.push(req, res);

    // TODO: Change this later to a centralized
    // app variable. This a temp workaround.
    if (this.props.title) {
      res.locals.appName = this.props.title;
    }

    res.locals.nav = this;
    res.nav = this;

    next();
  };
}

function init(opts, init) {
  return (req, res, next) => {
    if (!_.isPlainObject(res.locals)) {
      res.locals = {};
    }

    try {
      const { props, ...rest } = opts || {};
      const location = req.url;
      const nav = new Nav({ props: { ...props, location }, ...rest }, init);

      if (!nav.express) {
        nav.express = middleware.bind(nav);
      }

      nav.express()(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}

module.exports = { init };
