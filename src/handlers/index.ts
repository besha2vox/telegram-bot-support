import { registerUserConnectSupportHandler } from './user';
import { registerOperatorConnectHandler } from './operator';
import { registerRoutingMessageSupportToUserHandler } from './messege';


export * from './operator'

export default function (): void {
  registerRoutingMessageSupportToUserHandler()
  registerUserConnectSupportHandler()
  registerOperatorConnectHandler()
}
