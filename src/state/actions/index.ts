import { Conversation, Message } from '@backend/types';

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

export interface SetConversationsAction {
  type: string;
  payload: Conversation[];
}

export interface SetConvesationHistoryAction {
  type: string;
  payload: Conversation;
}

export type Action = SetSelectedConversationIdAction;
