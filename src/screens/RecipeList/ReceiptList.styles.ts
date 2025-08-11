import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background};
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.medium}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textPrimary};
  font-weight: bold;
`;
