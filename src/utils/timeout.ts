import { TIMEOUT_FOR_CLOSE_DIALOG } from '@/config';


export function setIdleTimeout<T extends (...args: any[]) => any>(
  func: T,
  ...args: Parameters<T>
): NodeJS.Timeout {
  const timeoutId = setTimeout(async (): Promise<void> => {
    func(...args, timeoutId)
  }, TIMEOUT_FOR_CLOSE_DIALOG)

  return timeoutId
}
