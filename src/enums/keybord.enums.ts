import { TriggersEnum } from './triggers.enum';


export enum KeyboardDataEnum {
  SUPPORT = TriggersEnum.SUPPORT,
  CONNECT = `${TriggersEnum.CONNECT}{topicId}`,
  CLOSE_DIALOG_BY_TIMEOUT = `${TriggersEnum.CLOSE_DIALOG_BY_TIMEOUT}{topicId}`,
  CLOSE_DIALOG_FORCELY = `${TriggersEnum.CLOSE_DIALOG_FORCELY}{topicId}`,
}

export enum KeyboardTextEnum {
  SUPPORT = 'Support',
  REDIRECT = 'Redirect',
  CONNECT = 'Connect',
  CLOSE_DIALOG_BY_TIMEOUT = 'Close dialog by timeout',
  CLOSE_DIALOG_FORCELY = 'Close dialog forcefully',
}
