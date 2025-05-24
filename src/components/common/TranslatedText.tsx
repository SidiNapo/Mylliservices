
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface TranslatedTextProps {
  textKey: string;
  values?: Record<string, string | number>;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * A component that renders translated text using react-i18next.
 * This helps standardize translation usage throughout the app.
 */
const TranslatedText: React.FC<TranslatedTextProps> = ({
  textKey,
  values,
  className = '',
  as: Component = 'span'
}) => {
  const { t } = useLanguage();
  
  return (
    <Component className={className}>{t(textKey, values)}</Component>
  );
};

export default TranslatedText;
