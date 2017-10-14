
export default class RootID {
  constructor (name, typeConstructor) {
    this.user = -1
    this.name = name
    this.type = StructManager.getReference(typeConstructor)
  }
  equals (id) {
    return id !== null && id.user === this.user && id.name === this.name && id.type === this.type
  }
  lessThan (id) {
    return this.user < id.user || (this.user === id.user && (this.name < id.name || (this.name === id.name && this.type < id.type)))
  }
}