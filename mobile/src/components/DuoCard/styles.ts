import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Container = styled.View`
  flex: 1;
  height: 315px;
  margin-right: 20px;
  background-color: ${THEME.COLORS.SHAPE};
  border-radius: 8px;
  padding: 30px;
`;

export const Label = styled.Text`
  color: ${THEME.COLORS.CAPTION_300};
  font-size: ${THEME.FONT_SIZE.SM}px;
  font-family: ${THEME.FONT_FAMILY.REGULAR};
  margin-bottom: 4px;
`;

export const Value = styled.Text`
  color: ${THEME.COLORS.CAPTION_300};
  font-size: ${THEME.FONT_SIZE.SM}px;
  font-family: ${THEME.FONT_FAMILY.BOLD};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  background-color: ${THEME.COLORS.PRIMARY};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.SM}px;
  font-family: ${THEME.FONT_FAMILY.SEMI_BOLD};
  margin-left: 8px;
`;
