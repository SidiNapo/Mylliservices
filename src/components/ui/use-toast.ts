
import { useToast as useToastHook, toast as toastFunction } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

export const useToast = () => {
  const hookResult = useToastHook();
  const { t } = useLanguage();
  
  // Return the original hook but with translation capability
  return {
    ...hookResult,
    // Add translation capability to the toast function
    toast: (props: any) => {
      const translatedProps = {
        ...props,
        title: props.title && typeof props.title === 'string' ? t(props.title) : props.title,
        description: props.description && typeof props.description === 'string' ? t(props.description) : props.description,
      };
      return hookResult.toast(translatedProps);
    }
  };
};

// Create a wrapped toast function that uses the language context
export const toast = (props: any) => {
  // For direct usage, we can't access the context hook
  // This is a limitation, so we'll just forward the call
  return toastFunction(props);
};
