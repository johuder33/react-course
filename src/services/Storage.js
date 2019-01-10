import { STORAGE_TOKEN_KEY } from "../constants";

class Storage {
  constructor() {
    this.engine = window.localStorage;
  }

  setItem(key, value) {
    return this.engine.setItem(key, value);
  }

  getItem(key) {
    return this.engine.getItem(key);
  }

  isLogged() {
    return this.getItem(STORAGE_TOKEN_KEY);
  }

  clear() {
    return this.engine.clear();
  }
}

const SessionManager = new Storage();

export default SessionManager;
