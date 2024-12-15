/**
 * Common actions
 */
// import api from '../../../lib/api';
// import { GET_COMMON_DATA, LANGUAGE_CHANGE } from './types';

import { LANGUAGE_CHANGE } from './types';

// export const getFacets = () => ({
//   type: GET_COMMON_DATA,
//   payload: api.common.getFacets()
// });

const languageChange = language => ({
  type: LANGUAGE_CHANGE,
  payload: language
});

export default languageChange;
