import { ActivityIndicator } from 'react-native';
import { THEME } from '../../theme';

import * as S from './styles';

const Loading = () => {
  return (
    <S.Container>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </S.Container>
  );
};

export default Loading;
