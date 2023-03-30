import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const CustomInput = styled(TextField)`
  && {
    label {
      color: #fff;
      font-size: 14px;
    }

    label.Mui-focused,
    .MuiInputBase-root {
      color: #fff;
    }

    .MuiInputBase-root,
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
