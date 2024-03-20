import { useTranslation } from 'react-i18next';

import { TOptions } from 'i18next';

export const useTranslate = () => {
  const { t } = useTranslation();

  const translate = (key: string, options?: TOptions | string) => {
    try {
      if (typeof options === 'string') {
        return t(key, { defaultValue: options });
      }
      return t(key, options || { defaultValue: '' });
    } catch (error) {
      return '';
    }
  };

  return { translate };
};
