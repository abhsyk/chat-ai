import { FC } from 'react';
import { FcMindMap } from 'react-icons/fc';
import { GrUser } from 'react-icons/gr';

type Props = {
  isAiMessage: boolean;
  content: string;
};

const MessageItem: FC<Props> = ({ isAiMessage, content }) => {
  return (
    <div
      className="message_container"
      style={{ background: isAiMessage ? 'rgb(247,247,248)' : 'white' }}
    >
      <div className="message_avator_container">
        {isAiMessage ? <FcMindMap /> : <GrUser />}
      </div>
      <p className="message_text">{content}</p>
    </div>
  );
};

export default MessageItem;
