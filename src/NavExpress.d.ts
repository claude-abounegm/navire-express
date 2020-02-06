import express from "express";
import Nav from "navire/src/Nav";

declare class NavExpress {
  static init<PropsType>(
    init?: Nav.Init<PropsType>,
    opts?: Nav.CtorOpts<PropsType>
  ): express.Handler;
}

export = NavExpress;

declare global {
  namespace Express {
    interface Response {
      nav: Nav;
    }
  }
}
