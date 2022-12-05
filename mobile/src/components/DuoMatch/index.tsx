import { useState } from 'react';
import { Modal, ModalProps, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';
import { THEME } from '../../theme';

import * as S from './styles';
import Heading from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

const DuoMatch = ({ discord, onClose, ...rest }: Props) => {
  const [isCoping, setIsCoping] = useState(false);

  const handleCopyDiscordToClipboard = async () => {
    setIsCoping(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert(
      'Discord Copiado!',
      'Usuário copiado para você colocar no Discord.'
    );
    setIsCoping(false);
  };

  return (
    <Modal animationType='fade' transparent statusBarTranslucent {...rest}>
      <S.Container>
        <S.Content>
          <S.CloseIcon onPress={onClose}>
            <MaterialIcons
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </S.CloseIcon>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight='bold' />

          <Heading
            title="Let's play!"
            subtitle='Agora é só começar a jogar!'
            style={{ alignItems: 'center', marginTop: 24 }}
          />
          <S.Label>Adicione no Discord</S.Label>
          <S.DiscordButton
            onPress={handleCopyDiscordToClipboard}
            disabled={isCoping}
          >
            <S.Discord>
              {isCoping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </S.Discord>
          </S.DiscordButton>
        </S.Content>
      </S.Container>
    </Modal>
  );
};
export default DuoMatch;
