import styled from 'styled-components';

interface IStyled {
  fontSize: string;
}

export const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

export const Form = styled.form`
  background-color: #1d283a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 424px;
  margin: 0 auto;
  padding: 48px;
  min-height: 100vh;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const Title = styled.h1<IStyled>`
  font-size: ${({ fontSize }) => fontSize};
  color: #f1f2f1;
  margin-top: 72px;
  margin-bottom: 48px;
`;

export const TextBlock = styled.p`
  color: #f1f2f1;
  font-size: 12px;
  text-align: center;
`;

export const HiddenBtn = styled.button`
  border: none;
  background-color: #1d283a;
  color: #7faaf0;
  cursor: pointer;
`;
