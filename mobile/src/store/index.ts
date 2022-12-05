import GameStore from './game.store';
import AdsStore from './ads.store';

class RootStore {
  game: GameStore;
  adsStore: AdsStore;

  constructor() {
    this.game = new GameStore();
    this.adsStore = new AdsStore();
  }
}

const store = new RootStore();

export { RootStore, GameStore, AdsStore };

export default store;
