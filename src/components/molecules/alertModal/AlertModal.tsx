import * as S from './AlertModal.styles'
import { Icon } from '@iconify/react'
import { Subtitle } from '../../atoms/typography/subtitle/Subtitle'
import { Paragraph } from '../../atoms/typography/paragraph/Paragraph'
import { Button } from '../../atoms/button/button'
import { theme } from '../../designSystem/theme'

export type AlertModalProps = {
  variant: 'success' | 'error' | 'warning' | 'default'
  widthSize: 'medium' | 'large' | 'small'
  message: string
  description?: string
  primaryButtonText: string
  secondaryButtonText?: string
  primaryClick: () => void
  secondaryClick?: () => void
  icon?: string
  disableCloseIcon?: boolean
  isOpen: boolean
  onClose: () => void
  zIndex?: number
}

export const AlertModal = ({
  isOpen,
  onClose,
  disableCloseIcon,
  icon,
  variant,
  widthSize,
  message,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryClick,
  secondaryClick,
  zIndex = 20
}: AlertModalProps) => {
  return (
    <S.Container isOpen={isOpen} onClick={onClose} zIndex={zIndex}>
      <S.ModalContent
        variant={variant}
        widthSize={widthSize}
        onClick={(e: any) => e.stopPropagation()}
        zIndex={zIndex}>
        {disableCloseIcon ? undefined : (
          <Icon onClick={onClose} className="closeIcon" icon="ph:x" />
        )}
        <Icon
          className="icon"
          icon={
            icon
              ? `${icon}`
              : variant === 'success'
              ? 'el:ok-circle'
              : variant === 'error'
              ? 'eva:alert-triangle-outline'
              : variant === 'warning'
              ? 'eva:alert-triangle-outline'
              : ''
          }
        />
        <S.ContentContainer>
          <Subtitle variant="MD" fontWeight="semibold">
            {message}
          </Subtitle>
          {description && <Paragraph variant="LG">{description}</Paragraph>}
        </S.ContentContainer>
        <S.ButtonContainer>
          {secondaryClick && (
            <Button
              onClick={secondaryClick}
              padding={`${theme.spacing.nth2} ${theme.spacing.nth10}`}
              variant="text"
              text={secondaryButtonText}
              color={
                variant === 'success'
                  ? theme.color.alert.nth2
                  : variant === 'error'
                  ? theme.color.alert.nth1
                  : variant === 'warning'
                  ? theme.color.primary.nth2
                  : theme.color.primary.nth1
              }
            />
          )}
          <Button
            onClick={primaryClick}
            variant="filled"
            padding={`${theme.spacing.nth2} ${theme.spacing.nth10}`}
            text={primaryButtonText}
            bg={
              variant === 'success'
                ? theme.color.alert.nth1
                : variant === 'error'
                ? theme.color.alert.nth2
                : variant === 'warning'
                ? theme.color.alert.nth3
                : theme.color.primary.nth1
            }
          />
        </S.ButtonContainer>
      </S.ModalContent>
    </S.Container>
  )
}
