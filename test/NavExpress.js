"use strict";

const NavExpress = require("../src");
const { expect } = require("chai");

describe("NavExpress", function() {
  it("using middleware", function() {
    const middleware = NavExpress.init({ props: { title: "App Title" } }, [
      { type: "link", title: "Link1", href: "/link1" }
    ]);

    const req = {};
    const res = {};
    middleware(req, res, e => {
      const { nav } = res;

      expect(nav.props.title).equal("App Title");
      expect(nav.findByHref("/link1")).to.not.be.false;
    });
  });
});
