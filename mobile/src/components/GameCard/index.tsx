import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

export interface GameCardProps {
  _count: {
    ads: number;
  };
  bannerUrl: string;
  id: string;
  title: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

const GameCard = ({ data, ...rest }: Props) => {
  return (
    <S.TouclableContainer {...rest}>
      <S.Cover source={{ uri: data.bannerUrl }}>
        <S.GradientView>
          <S.TextName>{data.title}</S.TextName>
          <S.TextAds>{data._count.ads} anúncios</S.TextAds>
        </S.GradientView>
      </S.Cover>
    </S.TouclableContainer>
  );
};

export default GameCard;
