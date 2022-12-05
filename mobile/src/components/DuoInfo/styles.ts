import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Container = styled.View`
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  color: ${THEME.COLORS.CAPTION_300};
  font-size: ${THEME.FONT_SIZE.SM}px;
  font-family: ${THEME.FONT_FAMILY.REGULAR};
  margin-bottom: 4px;
`;

export const Value = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.SM}px;
  font-family: ${THEME.FONT_FAMILY.BOLD};
`;
