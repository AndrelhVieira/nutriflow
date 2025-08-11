import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      textPrimary: string;
      textSecondary: string;
      primary: string;
      accent: string;
      border: string;
    };
    fontSizes: {
      small: number;
      regular: number;
      large: number;
      xlarge: number;
    };
    spacing: {
      small: number;
      medium: number;
      large: number;
    };
  }
}
