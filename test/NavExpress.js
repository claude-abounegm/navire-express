"use strict";

const NavExpress = require("../src");
const { expect } = require("chai");

describe("NavExpress", function() {
  it("using middleware", function() {
    const middleware = NavExpress.init(
      [
        { type: "link", title: "Link1", href: "/link1" },
        {
          type: "link",
          title: "Link2",
          href: "/link2",
          show: req => req.user.name !== "foo"
        }
      ],
      { props: { title: "App Title" } }
    );

    const req = { url: "/link2", user: { name: "foo" } };
    const res = {};
    middleware(req, res, e => {
      const { nav } = res;

      expect(nav.props.location).equal("/link2");
      expect(nav.props.title).equal("App Title");
      expect(nav.findByHref("/link1")).to.not.be.false;

      nav.traverse(({ title }) => {
        if (title === "Link2") {
          throw new Error("should not show");
        }
      });
    });
  });
});
