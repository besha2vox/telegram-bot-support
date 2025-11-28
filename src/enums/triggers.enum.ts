export enum TriggersEnum {
  SUPPORT = 'support',
  CONNECT = 'connect:',
  CLOSE_DIALOG_BY_TIMEOUT = 'close_dialog:',
  CLOSE_DIALOG_FORCELY = 'close_dialog_forcefully:',
}

export enum TriggersEnumRegexPatern {
  CONNECT = `${TriggersEnum.CONNECT}(\\d+)`,
  CLOSE_DIALOG_BY_TIMEOUT = `${TriggersEnum.CLOSE_DIALOG_BY_TIMEOUT}(\\d+)`,
  CLOSE_DIALOG_FORCELY = `${TriggersEnum.CLOSE_DIALOG_FORCELY}(\\d+)`,
}
