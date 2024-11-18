"use client"

import * as React from "react"
import * as switchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof switchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof switchPrimitive.Root>
>(
  (
    { className, ...props },
    ref
  ) => (
    <switchPrimitive.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
      ref={ref}
    />
  )
)
Switch.displayName = switchPrimitive.Root.displayName

export { Switch }
