import { FC } from 'react';
import { FcMindMap } from 'react-icons/fc';
import { GrUser } from 'react-icons/gr';
import { TextAnimation } from '../../ui';

type Props = {
  isAiMessage: boolean;
  content: string;
  animate: boolean;
};

const MessageItem: FC<Props> = ({ isAiMessage, content, animate }) => {
  return (
    <div
      className="message_container"
      style={{ background: isAiMessage ? 'rgb(247,247,248)' : 'white' }}
    >
      <div className="message_avator_container">
        {isAiMessage ? <FcMindMap /> : <GrUser />}
      </div>
      <p className="message_text">
        {
          // if it is the latest message from AI, make it animation
          isAiMessage && animate ? (
            <TextAnimation
              speed={20} // ms
              text={content}
            />
          ) : (
            content
          )
        }
      </p>
    </div>
  );
};

export default MessageItem;
