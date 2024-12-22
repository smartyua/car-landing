import en from './_en';
import ua from './_ua';
import de from './_de';
import pl from './_pl';
import be from './_be';
import ru from './_ru';
import es from './_es';
import fr from './_fr';
import zh from './_zh';

const translate = (name, lang) => {
  const dictionaries = {
    ua,
    be,
    ru,
    pl,
    en,
    es,
    fr,
    zh,
    de
  };

  const currentDict = dictionaries[lang] || en;
  return currentDict[name] || en[name];
};

export default translate;
