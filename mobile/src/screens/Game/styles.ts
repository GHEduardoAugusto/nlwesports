import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../theme';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-content: center;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 32px;
  margin-top: 28px;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 40px;
`;

export const Right = styled.View`
  width: 20px;
  height: 20px;
`;

export const Cover = styled.Image`
  width: 360px;
  height: 160px;
  border-radius: 8px;
  margin-top: 32px;
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
