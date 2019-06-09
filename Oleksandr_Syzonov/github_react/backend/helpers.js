const fs = require("fs");
const { maxBy, filter, reduce, map } = require("ramda");

const IdNotFoundError = new Error("Id was not found");
const InvalidDataError = new Error("Data entered is invalid");
const CannotWriteError = new Error("Cannot write data into file");

const readJsonFromFile = async filename =>
  new Promise((resolve, reject) => {
    fs.readFile(filename, (err, buffer) => {
      if (err) reject(err);
      else resolve(JSON.parse(buffer.toString()));
    });
  });

const rearrangeListToObject = list => {
  let outputObject = {};
  map(x => {
    outputObject[x.id] = x;
    delete outputObject[x.id].id;
  }, list);
  return outputObject;
};
const rearrangeObjectIntoList = obj => {
  let lst = [],
    ind = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      lst[ind] = obj[key];
      lst[ind].id = key;
      ind++;
    }
  }
  return lst;
};

const getBiggestId = file => reduce(maxBy(x => x.id), file[0], file).id;

const writeJsonToFile = async (json_data, filename) =>
  new Promise((resolve, reject) => {
    fs.writeFile(filename, JSON.stringify(json_data), err => {
      if (err) throw err;
      else resolve(true);
    });
  });

class JsonTable {
  constructor(filename, verifier) {
    this.filename = filename;
    this.verifier = verifier;
    this.cached = null;
    this.max_id = null;
  }

  async cacheFile() {
    if (this.cached === null) {
      this.cached = await readJsonFromFile(this.filename);
      this.max_id = getBiggestId(this.cached);
      this.cached = rearrangeListToObject(this.cached);
    }
  }

  idIsInTable(id) {
    return this.cached.hasOwnProperty(id);
  }

  verifyId(id) {
    if (!this.idIsInTable(id)) {
      throw IdNotFoundError;
    }
  }

  async getAll() {
    await this.cacheFile();
    return rearrangeObjectIntoList(this.cached);
  }

  async post(entry) {
    await this.cacheFile();
    if (this.verifier(entry)) {
      console.log(this.max_id);
      this.max_id++;
      this.cached[this.max_id + 1] = entry;
      const written = await writeJsonToFile(
        rearrangeObjectIntoList(this.cached),
        this.filename
      );
      if (!written) {
        throw CannotWriteError;
      } else {
        return entry;
      }
    } else {
      throw InvalidDataError;
    }
  }

  async getById(id) {
    await this.cacheFile();
    if (this.idIsInTable(id)) {
      let result = this.cached[id];
      result.id = id;
      return result;
    } else {
      throw IdNotFoundError;
    }
  }

  async put(entry, id) {
    await this.cacheFile();
    if (this.verifier(entry)) {
      entry.id = parseInt(id);
      this.verifyId(entry.id);
      this.cached[entry.id] = entry;
      delete this.cached[entry.id].id;
      const written = await writeJsonToFile(
        rearrangeObjectIntoList(this.cached),
        this.filename
      );
      if (!written) {
        throw CannotWriteError;
      }
      return entry;
    } else {
      throw InvalidDataError;
    }
  }

  async delete(id) {
    await this.cacheFile();
    this.verifyId(id);
    delete this.cached[id];
    const written = await writeJsonToFile(
      rearrangeObjectIntoList(this.cached),
      this.filename
    );
    if (!written) {
      throw CannotWriteError;
    }
    return {};
  }
}

module.exports = {
  JsonTable: JsonTable,
  IdNotFoundError: IdNotFoundError,
  InvalidDataError: InvalidDataError
};
