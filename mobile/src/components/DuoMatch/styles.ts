import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${THEME.COLORS.OVERLAY};
`;

export const Content = styled.View`
  width: 300px;
  background-color: ${THEME.COLORS.SHAPE};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 16px;
`;

export const Label = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.MD}px;
  font-family: ${THEME.FONT_FAMILY.SEMI_BOLD};
  margin-bottom: 8px;
`;

export const DiscordButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 231px;
  height: 48px;
  background-color: ${THEME.COLORS.BACKGROUND_900};
  border-radius: 4px;
  margin-bottom: 32px;
`;

export const Discord = styled.Text`
  text-align: center;
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.MD}px;
  font-family: ${THEME.FONT_FAMILY.REGULAR};
`;
