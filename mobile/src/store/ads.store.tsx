import { makeAutoObservable, action, runInAction } from 'mobx';
import { RootStore } from '.';
import { AdsApi } from '../service/api';

export default class GameStore {
  rootStore: RootStore;
  adsList: AdsList[] = [];
  discord: DiscordUser[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action
  getAdslist = async (id: string): Promise<AdsList[]> => {
    const response = await AdsApi.getAdslist(id);
    runInAction(() => {
      this.adsList = response;
    });
    return response;
  };

  @action
  getDiscord = async (adsId: string): Promise<DiscordUser[]> => {
    const response = await AdsApi.getDiscord(adsId);
    runInAction(() => {
      this.discord = response;
    });
    return response;
  };
}
