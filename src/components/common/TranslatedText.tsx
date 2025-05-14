
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface TranslatedTextProps {
  textKey: string;
  params?: Record<string, string | number>;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * A component that renders translated text using the language context.
 * This helps standardize translation usage throughout the app.
 */
const TranslatedText: React.FC<TranslatedTextProps> = ({
  textKey,
  params,
  className = '',
  as: Component = 'span'
}) => {
  const { t } = useLanguage();
  
  return (
    <Component className={className}>{t(textKey, params)}</Component>
  );
};

export default TranslatedText;
