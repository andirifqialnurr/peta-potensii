import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 text-neutral-900 shadow hover:bg-neutral-200",
        primary: "bg-[#3568D7] text-white shadow hover:bg-[#2557c4]",
        success: "bg-green-100 text-green-800 hover:bg-green-200",
        warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        danger: "bg-red-100 text-red-800 hover:bg-red-200",
        info: "bg-blue-100 text-blue-800 hover:bg-blue-200",
        glass: "bg-white/10 text-white backdrop-blur-sm",
        glassDark: "bg-black/10 text-black backdrop-blur-sm",
        outline: "text-foreground bg-white shadow",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  iconLeft?: LucideIcon
  iconRight?: LucideIcon
}

function Badge({ 
  className, 
  variant, 
  size,
  iconLeft: IconLeft,
  iconRight: IconRight,
  children,
  ...props 
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {IconLeft && <IconLeft className="mr-1 h-3 w-3" />}
      {children}
      {IconRight && <IconRight className="ml-1 h-3 w-3" />}
    </div>
  )
}

export { Badge, badgeVariants }
