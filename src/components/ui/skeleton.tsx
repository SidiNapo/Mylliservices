
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isRTL } = useLanguage();

  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", isRTL ? "rtl" : "", className)}
      {...props}
    />
  )
}

export { Skeleton }
