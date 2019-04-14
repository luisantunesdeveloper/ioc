import { IOCInterface } from "../src/ioc";

interface IDb {
  find(collection: string, query: {});
}

class Db implements IDb {
  find(collection: string, query: {}) {}
}

interface IRepo {
  findById(id: string);
}

class FreightRepo implements IRepo {
  db: IDb;
  constructor(db: IDb) {
    this.db = db;
  }

  findById(id: string) {
    return this.db.find("freight", { id });
  }
}

class RateRepo implements IRepo {
  db: IDb;
  freightRepo: IRepo;
  constructor(db: IDb, freightRepo: IRepo) {
    this.db = db;
    this.freightRepo = freightRepo;
  }

  findById(id: string) {
    return this.db.find("freight", { id });
  }
}

export const freights = (ioc: IOCInterface) => {
  ioc.set("IFreightRepo", ioc => new FreightRepo(ioc("IDb")));
  ioc.set("IRateRepo", ioc => new RateRepo(ioc("IDb"), ioc("IFreightRepo")));
};
