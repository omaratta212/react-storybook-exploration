export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  outlined = 'outlined',
  text = 'text'
}

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
  icon = 'icon'
}

export interface ButtonProps {
  text: string,
  type: ButtonType,
  size: ButtonSize
}
