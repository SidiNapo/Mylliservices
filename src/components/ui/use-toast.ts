
import { useToast as useToastHook, toast as toastFunction } from "@/hooks/use-toast";

export const useToast = () => {
  const hookResult = useToastHook();
  
  return {
    ...hookResult,
    toast: (props: any) => {
      return hookResult.toast(props);
    }
  };
};

// Create a wrapped toast function
export const toast = (props: any) => {
  return toastFunction(props);
};
