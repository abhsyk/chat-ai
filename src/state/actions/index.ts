import { Message } from '../../interfaces';

export interface SetSelectedConversationIdAction {
  type: string;
  payload: string;
}

export interface AddMessageAction {
  type: string;
  payload: {
    conversationId: string;
    message: Message;
  };
}

export type Action = SetSelectedConversationIdAction;
