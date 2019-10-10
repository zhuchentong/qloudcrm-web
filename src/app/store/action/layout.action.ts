export class UpdatePathAction {
  public static readonly type = '[Layout] UpdatePath'
  constructor(public path) {}
}

export class UpdateMenuAction {
  public static readonly type = '[Layout] UpdateMenu'
  constructor(public menu) {}
}
