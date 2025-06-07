
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = ({ children, ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>) => {
  return (
    <AspectRatioPrimitive.Root
      {...props}
      dir="ltr"
    >
      {children}
    </AspectRatioPrimitive.Root>
  );
};

export { AspectRatio }
