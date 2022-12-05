import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../theme';

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  align-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 214px;
  height: 120px;
  margin: 74px 0 24px 0;
`;

export const FlatlistCarrosel = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingLeft: 32,
    paddingRight: 64,
  },
})``;

export const EmptyList = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.SM}px;
  font-family: ${THEME.FONT_FAMILY.BOLD};
`;
