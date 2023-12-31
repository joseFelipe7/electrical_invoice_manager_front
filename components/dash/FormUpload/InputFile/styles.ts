import { Button, Typography } from "@mui/material";
import styled from "styled-components";

export const VisuallyHiddenInput = styled("input")({
  display: "none",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const ErrorMessage = styled(Typography)`
  font-size: 0.75rem;
`;
