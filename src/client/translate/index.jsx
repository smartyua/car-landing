import en from './_en';
import ua from './_ua';
import de from './_de';
import pl from './_pl';
import be from './_be';
import ru from './_ru';

const translate = (name, lang) => {
  const dictionaries = {
    ua,
    be,
    ru,
    pl,
    en,
    de
  };

  const currentDict = dictionaries[lang] || en;
  return currentDict[name] || en[name];
};

export default translate;
