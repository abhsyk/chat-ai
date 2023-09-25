import { Content } from '../../interfaces';

export interface SetSelectedConversationIdAction {
  type: string;
  payload: string;
}

export interface AddMessageAction {
  type: string;
  payload: {
    conversationId: string;
    message: Content;
  };
}

export type Action = SetSelectedConversationIdAction;
