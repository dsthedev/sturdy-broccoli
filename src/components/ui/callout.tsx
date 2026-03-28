import * as React from "react"

import { cn } from "@/lib/utils"

function Callout({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="callout"
      className={cn("rounded-lg border p-4", className)}
      {...props}
    />
  )
}

function CalloutTitle({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="callout-title"
      className={cn("font-heading text-2xl font-semibold", className)}
      {...props}
    />
  )
}

function CalloutDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="callout-description"
      className={cn("text-sm", className)}
      {...props}
    />
  )
}

export { Callout, CalloutTitle, CalloutDescription }