import { Tooltip as ChakraTooltip, TooltipProps as ChakraTooltipProps } from "@chakra-ui/react"
import * as React from "react"

export interface TooltipProps {
  showArrow?: boolean
  disabled?: boolean
  content: React.ReactNode
  placement?: ChakraTooltipProps["placement"]
  label?: string
  hasArrow?: boolean
  closeDelay?: number
  openDelay?: number
  children: React.ReactNode
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function Tooltip(props, _ref) {
    const {
      showArrow,
      children,
      disabled,
      content,
      placement,
      label,
      hasArrow,
      closeDelay,
      openDelay,
      ...rest
    } = props

    if (disabled) return children

    return (
      <ChakraTooltip
        placement={placement}
        label={content || label}
        hasArrow={showArrow || hasArrow}
        closeDelay={closeDelay}
        openDelay={openDelay}
        {...rest}
      >
        {children}
      </ChakraTooltip>
    )
  },
)
