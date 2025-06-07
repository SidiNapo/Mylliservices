
import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

const ManageCookiesButton: React.FC = () => {
  const handleClick = () => {
    // Call the global method to show cookie settings
    if ((window as any).showCookieSettings) {
      (window as any).showCookieSettings();
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      size="sm"
      className="text-mylli-gray hover:text-mylli-primary transition-colors space-x-2"
    >
      <Settings size={16} />
      <span>Gérer les cookies</span>
    </Button>
  );
};

export default ManageCookiesButton;
