import type React from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const buttonVariants = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  outline: "border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
  ghost: "text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
}

const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variantClasses = buttonVariants[variant]
  const sizeClasses = buttonSizes[size]

  const buttonClasses = twMerge(baseClasses, variantClasses, sizeClasses, className)

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
