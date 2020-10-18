enum ButtonType {
  primary,
  secondary,
  outlined,
  text,
  icon
}

enum ButtonSize {
  small,
  medium,
  large
}

export interface ButtonProps {
  text: string,
  type: ButtonType,
  size: ButtonSize
}
