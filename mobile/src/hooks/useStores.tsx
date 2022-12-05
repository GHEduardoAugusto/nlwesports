import React from 'react';
import { MobXProviderContext } from 'mobx-react';

import store from '../store';

export const useStores = (): typeof store => {
  return React.useContext(MobXProviderContext).rootStore;
};
