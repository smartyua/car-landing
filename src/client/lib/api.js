// import axios from 'axios';
// import _ from 'lodash';

// const endpointUrl = url => process.env.API_URL + url;

// const addAuthHeaders = (options = {}) => {
//   const token = localStorage.getItem('projectUserJWT');
//   return {
//     ...options,
//     headers: {
//       ...options.headers,
//       Authorization: `Bearer ${token}`,
//       'Access-Control-Allow-Origin': 'http://localhost:8080',
//       'Access-Control-Allow-Headers':
//         'Origin, X-Requested-With, Content-Type, Accept'
//     }
//   };
// };

// export default {
//   send: params =>
//     axios
//       .post(endpointUrl('mail'), params, addAuthHeaders())
//       .then(response => response.data)
// };
