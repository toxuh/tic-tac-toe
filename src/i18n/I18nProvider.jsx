import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import getUserLocale from 'get-user-locale';

import enMessages from './translations/en.json';
import ruMessages from './translations/ru.json';

const I18nProvider = ({ children }) => {
  const activeLocale = getUserLocale();

  const messages = useMemo(
    () => (activeLocale.includes('ru') ? ruMessages : enMessages),
    [activeLocale],
  );

  return (
    <IntlProvider locale={activeLocale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(I18nProvider);
