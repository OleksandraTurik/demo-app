import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const CustomInput = styled(TextField)`
  && {
    label {
      color: white;
      font-size: 14px;
    }
    label.Mui-focused {
      color: white;
    }
    .MuiInputBase-root {
      color: white;
    }
    .MuiInputBase-root {
      border-bottom: 1px solid white;
    }
    .MuiInput-underline:after {
      border-bottom: 1px solid white;
    }
    .MuiOutlinedInput-root {
      &.Mui-error fieldset {
        border-color: red;
      }
    }
  }
`;
