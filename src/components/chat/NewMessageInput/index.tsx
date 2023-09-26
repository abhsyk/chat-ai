import { FC, KeyboardEvent, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import { v4 as uuid } from 'uuid';
import { Message } from '../../../interfaces';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const NewMessageInput: FC = () => {
  const [content, setContent] = useState<string>('');
  const { addMessage, setSelectedConversationId } = useActions();
  const { selectedConversationId } = useTypedSelector(
    (state) => state.dashboards
  );

  const proceedMessage = () => {
    // create message obj
    const message: Message = {
      id: uuid(),
      content,
      isAiMessage: false,
    };
    console.log(message);

    // choose conversation id (if it's a new conv, set a new id)
    const conversationId: string =
      selectedConversationId! === 'new' ? uuid() : selectedConversationId!;

    // append the message to the redux
    addMessage({ conversationId, message });
    // preventing new creation
    setSelectedConversationId(conversationId);

    // send message to the server

    // reset value of the input
    setContent('');
  };

  const handleSendMessage = () => {
    if (content.length > 0) proceedMessage();
  };

  // press the enter key
  const handleEnterPressed = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && content.length > 0) {
      proceedMessage();
    }
  };

  return (
    <div className="new_message_input_container">
      <input
        className="new_message_input"
        placeholder="Send a message..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleEnterPressed}
      />
      <div className="new_message_icon_container" onClick={handleSendMessage}>
        <BsSend color="grey" />
      </div>
    </div>
  );
};

export default NewMessageInput;
