import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const CustomButton = styled(Button)`
  && {
    background-color: #539713;
    color: #fff;
    font-size: 16px;
    padding: 10px 16px;
    border-radius: 0;
    &:hover {
      background-color: #539713;
    }
  }
`;
