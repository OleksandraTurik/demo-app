import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const CustomInput = styled(TextField)`
  && {
    // Add your custom styles here

    border: 1px solid white;
    border-radius: 4px;
    padding: 8px 12px;
    label {
      color: white;
    }
    // Override the default styles of the label
    label.Mui-focused {
      color: white;
    }
    label.Mui-error {
      color: white;
    }
    .MuiOutlinedInput-root {
      border: 1px solid #1d283a;
      &.Mui-focused fieldset {
        border-color: #1d283a;
      }
      &.Mui-error fieldset {
        border-color: #1d283a;
      }
    }
  }
`;
