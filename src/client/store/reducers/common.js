import typeToReducer from 'type-to-reducer';

import { GET_COMMON_DATA, LANGUAGE_CHANGE } from '../actions/types';
import { DEFAULT_ASYNC_STATE } from './constants';

const DEFAULT_STATE = {
  language: 'en',
  ...DEFAULT_ASYNC_STATE
};

const commonReducer = typeToReducer(
  {
    [LANGUAGE_CHANGE]: (state, action) => ({
      ...state,
      language: action.payload
    }),
    [GET_COMMON_DATA]: {
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
        data: action.payload
      }),
      RESET: () => DEFAULT_STATE
    }
  },
  DEFAULT_STATE
);

export default commonReducer;
