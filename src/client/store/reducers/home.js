import typeToReducer from 'type-to-reducer';

import { HOME_PAGES } from '../actions/types';
import { DEFAULT_ASYNC_STATE } from './constants';

const DEFAULT_STATE = {
  ...DEFAULT_ASYNC_STATE
};

const homeReducer = typeToReducer(
  {
    [HOME_PAGES]: {
      PENDING: () => ({
        ...DEFAULT_STATE,
        isPending: true
      }),
      REJECTED: (state, action) => ({
        ...DEFAULT_STATE,
        isRejected: true,
        isPending: false,
        error: action.payload
      }),
      FULFILLED: (state, action) => ({
        ...DEFAULT_STATE,
        ...state,
        isFulfilled: true,
        isPending: false,
        ...action.payload
      }),
      RESET: () => DEFAULT_STATE
    }
  },
  DEFAULT_STATE
);

export default homeReducer;
