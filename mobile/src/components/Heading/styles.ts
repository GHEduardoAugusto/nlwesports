import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Container = styled.ImageBackground`
  width: 100%;
  padding: 32px;
`;

export const TextTitle = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.LG}px;
  font-family: ${THEME.FONT_FAMILY.BLACK};
`;

export const TextSubtitle = styled.Text`
  color: ${THEME.COLORS.CAPTION_400};
  font-size: ${THEME.FONT_SIZE.MD}px;
  font-family: ${THEME.FONT_FAMILY.REGULAR};
`;
