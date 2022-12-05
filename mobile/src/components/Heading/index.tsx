import { ViewProps } from 'react-native';

import * as S from './styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle, ...rest }: Props) => {
  return (
    <S.Container {...rest}>
      <S.TextTitle>{title}</S.TextTitle>
      <S.TextSubtitle>{subtitle}</S.TextSubtitle>
    </S.Container>
  );
};

export default Heading;
