import { useEffect, useState } from 'react';
import { Background, Heading, GameCard } from '../../components/index';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/useStores';
import logoImg from '../../assets/logo-nlw-esports.png';

const Home = () => {
  const navigation = useNavigation();
  const [games, setGames] = useState<GameList[]>([]);
  const { game } = useStores();

  function handleOpenGame({ id, title, bannerUrl }: GameList) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  const loadData = async () => {
    try {
      const data = await game.getGamelist();
      setGames(data);
    } catch (error) {
      console.log('response error:', error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Background>
      <S.SafeAreaContainer>
        <S.Logo source={logoImg} />
        <Heading
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'
        />
        <S.FlatlistCarrosel
          horizontal
          showsHorizontalScrollIndicator={false}
          data={games}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          ListEmptyComponent={() => (
            <S.EmptyList>Não há games publicados ainda.</S.EmptyList>
          )}
        />
      </S.SafeAreaContainer>
    </Background>
  );
};

export default observer(Home);
