export class AddActivityAction {
  public static readonly type = '[Activity] AddActivity'
  constructor(public activity) {}
}

export class DeleteActivityAction {
  public static readonly type = '[Activity] DeleteActivity'
  constructor(public id) {}
}
