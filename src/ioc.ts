export interface IOCInterface {
  dependencies: Dependencies;
  set(id: string, Function);
}

export interface Dependencies {
  [key: string]: Function;
}

export class IOC implements IOCInterface {
  dependencies;
  constructor() {
    this.dependencies = {};
  }

  set(id: string, callback: Function): IOCInterface {
    if (!this.dependencies.hasOwnProperty(id)) {
      this.dependencies[id] = callback(this);
    }

    return this;
  }

  get(id: string) {
    return this.dependencies[id];
  }
}
