class Observable {
  constructor(value) {
    this._value = value;
    this._subs = {};
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
    Object.getOwnPropertySymbols(this._subs).forEach(sym => this._subs[sym](this._value));
  }

  subscribe(callback) {
    const id = Symbol();
    this._subs[id] = callback;
    return () => delete this._subs[id];
  }
}

export default Observable;