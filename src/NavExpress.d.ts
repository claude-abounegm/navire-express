import express from "express";
import Nav from "navire";

declare class NavExpress {
  static init<PropsType>(
    opts?: Nav.CtorOpts<PropsType>,
    init?: Nav.Init<PropsType>
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
