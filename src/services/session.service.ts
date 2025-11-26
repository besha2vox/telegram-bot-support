import type { TSession } from '../types/session'

const sessions = new Map<number, TSession>()

export function createSession(userId: number, topicId: number): void {
  sessions.set(userId, { userId, topicId })
}

export function getSessionByUser(userId: number): TSession | undefined {
  return sessions.get(userId)
}

export function getSessionByTopic(topicId: number): TSession | undefined {
  return [...sessions.values()].find((s) => s.topicId === topicId)
}

export function removeSession(userId: number): void {
  sessions.delete(userId)
}
