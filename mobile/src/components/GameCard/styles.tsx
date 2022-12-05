import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const TouclableContainer = styled.TouchableOpacity`
  margin-right: 24px;
`;

export const Cover = styled.ImageBackground.attrs({
  width: 240,
  height: 320,
  justifyContent: 'flex-end',
  borderRadius: 8,
  overflow: 'hidden',
})``;

export const GradientView = styled.View`
  width: 230px;
  height: 320px;
  padding: 16px;
  justify-content: 'flex-end';
`;

export const TextName = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.MD}px;
  font-family: ${THEME.FONT_FAMILY.BOLD};
`;

export const TextAds = styled.Text`
  color: ${THEME.COLORS.CAPTION_300};
  font-size: ${THEME.FONT_SIZE.MD}px;
  font-family: ${THEME.FONT_FAMILY.REGULAR};
`;
