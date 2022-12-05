import React from 'react';
import { GameController } from 'phosphor-react-native';
import DuoInfo from '../DuoInfo';

import { THEME } from '../../theme';

import * as S from './styles';

interface Props {
  data: AdsList;
  onConnect: () => void;
}

const DuoCard = ({ data, onConnect }: Props) => {
  return (
    <S.Container>
      <DuoInfo label='Nome' value={data.name} />
      <DuoInfo label='Tempo de Jogo' value={`${data.yearsPlaying} anos`} />
      <DuoInfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label='Chamadas de áudio?'
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
      />
      <S.Button onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <S.ButtonTitle>Conectar</S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
};
export default DuoCard;
