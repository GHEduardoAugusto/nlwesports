import { makeAutoObservable, action, runInAction } from 'mobx';
import { RootStore } from '.';
import { GameApi } from '../service/api';

export default class GameStore {
  rootStore: RootStore;
  gameList: GameList[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action
  getGamelist = async (): Promise<GameList[]> => {
    const response = await GameApi.getGamelist();
    runInAction(() => {
      this.gameList = response;
    });

    return response;
  };
}
