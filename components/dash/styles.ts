import styled from "styled-components";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  width: 80%;
  min-width: 400px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 64px;
  border-radius: 8px;
  box-shadow: 0px 62px 97px rgb(173 63 1 / 4%),
    0px 13.8485px 21.6662px rgb(177 63 0 / 8%),
    0px 4.12306px 6.4506px rgb(157 56 0 / 12%);
`;

export const SubmitButton = styled(Button)`
  width: 20.4375rem;
  height: 3rem;
  border-radius: 24px !important;
  margin-top: 24px;
  font-weight: 700;
  background: var(--important-info-color);

  transition: background 0.3s ease;

  box-shadow: 0px 2px 16px 0px rgb(255 91 0 / 32%),
    0px 4px 5px 0px rgb(255 91 0 / 7%), 0px -1px 17px 8px rgb(255 91 0 / 2%);

  &:hover {
    background: var(--important-info-shadow);

    box-shadow: 0px 2px 16px 0px rgb(255 91 0 / 32%),
      0px 4px 5px 0px rgb(255 91 0 / 7%), 0px -1px 17px 8px rgb(255 91 0 / 2%);
  }
`;
