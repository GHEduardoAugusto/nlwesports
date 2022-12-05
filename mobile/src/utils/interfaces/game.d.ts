declare interface GameList {
  id: string;
  title: string;
  _count: {
    ads: number;
  };
  bannerUrl: string;
}

declare interface AdsList {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourStart: string;
  hourEnd: string;
}

declare interface DiscordUser {
  discord: string;
}
