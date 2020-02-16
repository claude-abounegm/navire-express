"use strict";

const NavireExpress = require("../src");
const { expect } = require("chai");

describe("NavireExpress", function() {
  it("using middleware", function() {
    const middleware = NavireExpress.init(
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
      const { navire } = res;

      expect(navire.props.location).equal("/link2");
      expect(navire.props.title).equal("App Title");
      expect(navire.findByHref("/link1")).to.not.be.false;

      navire.traverse(({ title }) => {
        if (title === "Link2") {
          throw new Error("should not show");
        }
      });
    });
  });
});
