
import React from 'react';
import { Language, useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: 'fr', name: t('language.french') },
    { code: 'en', name: t('language.english') },
    { code: 'ar', name: t('language.arabic') },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} gap-2`}>
          <Globe size={18} />
          <span className="hidden sm:inline">{languages.find(l => l.code === language)?.name || 'Language'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isRTL ? "start" : "end"} className={`${isRTL ? "rtl" : ""} bg-white border shadow-lg z-50`}>
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`${language === lang.code ? 'bg-mylli-primary/10 font-medium' : ''} cursor-pointer hover:bg-gray-100`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
