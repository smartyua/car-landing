import _ from 'lodash';

const getMetadataValue = ({ item, language = 'ru' }) => {
  const out = _.omit(item, 'metadata');
  return {
    ...out,
    ..._.get(item, `metadata.${language}`)
  };
};

export default getMetadataValue;
