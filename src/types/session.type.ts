export type TSession = {
  userId: number
  topicId: number
  lastActivity?: number
  timeoutId?: NodeJS.Timeout
}
