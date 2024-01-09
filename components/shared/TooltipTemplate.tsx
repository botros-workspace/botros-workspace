import { PlacementWithLogical, Tooltip } from '@chakra-ui/react'
import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
  children: ReactNode
  label: string
  hasArrow: boolean
  placement: PlacementWithLogical
  shouldWrapChildren: boolean
}

export const TooltipTemplate: FunctionComponent<Props> = ({
  children,
  label,
  hasArrow,
  placement,
  shouldWrapChildren,
}) => {
  return (
    <Tooltip
      borderRadius='xl'
      p={2}
      textColor={'rgb(197,	154	,39,1)'}
      bg={'#161616'}
      label={label}
      hasArrow={hasArrow}
      placement={placement}
      shouldWrapChildren={shouldWrapChildren}
    >
      {children}
    </Tooltip>
  )
}

export default TooltipTemplate
