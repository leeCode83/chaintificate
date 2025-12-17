"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors={false}
      expand={true}
      closeButton={true}
      position="top-center"
      toastOptions={{
        classNames: {
          success: "bg-green-50 border-green-200 border-l-4 border-l-green-500 text-green-900 shadow-lg",
          error: "bg-red-50 border-red-200 border-l-4 border-l-red-500 text-red-900 shadow-lg",
          warning: "bg-yellow-50 border-yellow-200 border-l-4 border-l-yellow-500 text-yellow-900 shadow-lg",
          info: "bg-blue-50 border-blue-200 border-l-4 border-l-blue-500 text-blue-900 shadow-lg",
          loading: "bg-white border-gray-100 border-l-4 border-l-gray-400 text-gray-900 shadow-lg",
          toast: "border-0 shadow-lg", // Default overrides
          description: "text-gray-600 font-medium",
          actionButton: "bg-gray-900 text-white font-bold",
          cancelButton: "bg-gray-100 text-gray-600 font-bold",
          closeButton: "bg-transparent text-gray-400 hover:text-gray-900 hover:bg-black/5"
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-6 text-white fill-green-500" />,
        info: <InfoIcon className="size-6 text-blue-500" />,
        warning: <TriangleAlertIcon className="size-6 text-yellow-500" />,
        error: <OctagonXIcon className="size-6 text-white fill-red-500" />,
        loading: <Loader2Icon className="size-6 animate-spin text-gray-400" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",

          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
