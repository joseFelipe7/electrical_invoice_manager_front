import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ContentContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const LogoContainer = styled(Box)`
  margin-top: 56px;
`;

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 118px;
  width: 100%;
`;

export const InputContainer = styled(Box)`
  margin: 16px 0px;
`;

export const Subtitle = styled(Typography)`
  font-weight: 700;
  font-size: 0.75rem;
  color: #666666;
  text-align: center;
`;

export const StyledLink = styled.a`
  color: #ed1e79;
  text-decoration: underline;
  cursor: pointer;
`;
