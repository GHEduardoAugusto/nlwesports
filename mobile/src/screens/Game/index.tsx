import { useEffect, useState } from 'react';

import { TouchableOpacity } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { useStores } from '../../hooks/useStores';

import { Heading, Background, DuoCard, DuoMatch } from '../../components/index';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';

import * as S from './styles';

const Game = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [ads, setAds] = useState<AdsList[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState<DiscordUser[]>(
    []
  );

  const { adsStore } = useStores();
  const navigation = useNavigation();
  const route = useRoute();
  const gameParams = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  const getDiscordUser = async (adsId: string) => {
    openModal();
    try {
      const discordData = await adsStore.getDiscord(adsId);
      setDiscordDuoSelected(discordData);
    } catch (error) {
      console.log('response error:', error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const loadData = async () => {
    try {
      const adsList = await adsStore.getAdslist(gameParams.id);
      setAds(adsList);
    } catch (error) {
      console.log('response error:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Background>
      <S.Container>
        <S.Header>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <S.Logo source={logoImg} />
          <S.Right />
        </S.Header>
        <S.Cover source={{ uri: gameParams.bannerUrl }} resizeMode='cover' />
        <Heading
          title={gameParams.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <S.FlatlistCarrosel
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ads}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          ListEmptyComponent={() => (
            <S.EmptyList>Não há anúncios publicados ainda.</S.EmptyList>
          )}
        />
        <DuoMatch
          visible={modalVisible}
          discord={discordDuoSelected?.discord}
          onClose={closeModal}
        />
      </S.Container>
    </Background>
  );
};

export default observer(Game);
