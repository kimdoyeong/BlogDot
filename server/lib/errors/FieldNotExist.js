module.exports = class FieldNotExist extends Error {
  constructor() {
    this.name = "FieldNotExist";
    this.status = 400;
    this.show = true;
  }
};
