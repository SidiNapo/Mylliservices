
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { useLanguage } from "@/context/LanguageContext"

const AspectRatio = ({ children, ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>) => {
  const { isRTL } = useLanguage();
  
  return (
    <AspectRatioPrimitive.Root
      {...props}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {children}
    </AspectRatioPrimitive.Root>
  );
};

export { AspectRatio }
