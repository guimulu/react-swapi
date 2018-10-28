import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;

  button {
    height: 55px;
    padding: 0 20px;
    margin: 10px;
    background: #133243;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #787172;
    }
  }
`;
