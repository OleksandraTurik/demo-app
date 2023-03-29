import styled from 'styled-components';

export const Form = styled.form`
  background-color: #1d283a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 424px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 48px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;

export const Logo = styled.img``;

export const Title = styled.h4`
  font-size: 56px;
  color: white;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
export const Container = styled.div`
  min-height: 100vh;
  background-color: #1d283a;
`;

export const Description = styled.p`
  color: white;
  width: 466px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Firework = styled.img`
  position: absolute;
  top: -20px;
  right: -105px;
`;

export const P = styled.p`
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
