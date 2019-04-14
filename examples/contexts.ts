import { IOC } from "../src/ioc";

export default () => {
  const providers = require("./providers");
  let container = new IOC();
  providers.freights(container);
  providers.harbours(container);
  return container;
};
