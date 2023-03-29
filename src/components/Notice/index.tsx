// Styles
import { WrapperNotice, Span } from './styled';

interface INotice {
  message: string;
}

const Notice = ({ message }: INotice) => {
  if (!message) return null;
  return (
    <WrapperNotice>
      <Span>{message}</Span>
    </WrapperNotice>
  );
};

export default Notice;
