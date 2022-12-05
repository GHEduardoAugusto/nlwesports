import * as S from './styles';

import backgroundImg from '../../assets/background-galaxy.png';

interface Props {
  children: React.ReactNode;
}

const Background = ({ children }: Props) => {
  return (
    <S.Container defaultSource={backgroundImg} source={backgroundImg}>
      {children}
    </S.Container>
  );
};

export default Background;
