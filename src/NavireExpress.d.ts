import express from "express";
import Navire from "navire/src/Navire";

declare class NavireExpress {
  static init<PropsType>(
    init?: Navire.Init<PropsType>,
    opts?: Navire.CtorOpts<PropsType>
  ): express.Handler;
}

export = NavireExpress;

declare global {
  namespace Express {
    interface Response {
      navire: Navire;
    }
  }
}
