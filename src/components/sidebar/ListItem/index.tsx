import { FC } from 'react';
import { BsChatLeft } from 'react-icons/bs';
import { CustomButton } from '../../ui';

type Props = {
  title: string;
  onChooseChat?: () => void;
};

const ListItem: FC<Props> = ({ title, onChooseChat }) => {
  return (
    <CustomButton
      mode="listItem"
      icon={BsChatLeft}
      text={title}
      onClick={() => {}}
    />
  );
};

export default ListItem;
