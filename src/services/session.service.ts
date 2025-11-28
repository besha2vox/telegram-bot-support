import type { TSession } from '../types/session.type';


const sessions = new Map<number, TSession>()

export function createSession(userId: number, topicId: number): void {
  sessions.set(userId, { userId, topicId })
}

export function updateSession(
  userId: number,
  timeoutOptions: Pick<TSession, 'timeoutId' | 'lastActivity'>,
): void {
  const currentSession = getSessionByUser(userId)
  if (!currentSession) {
    throw new Error('Session not found')
  }
  sessions.set(userId, { ...currentSession, ...timeoutOptions })
}

export function getSessionByUser(userId: number): TSession | undefined {
  return sessions.get(userId)
}

export function getSessionByTopic(topicId: number): TSession | undefined {
  return [...sessions.values()].find((s) => s.topicId === topicId)
}

export function getCurrentSession(
  userId: number,
  topicId?: number,
): TSession | undefined {
  return topicId ? getSessionByTopic(topicId) : getSessionByUser(userId)
}

export function removeSession(userId: number): void {
  sessions.delete(userId)
}
