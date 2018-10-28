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
    background: #0e0e0e;
    color: #000;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    text-shadow: -1px 0 #fcde2b, 0 1px #fcde2b, 1px 0 #fcde2b, 0 -1px #fcde2b;

    &:hover {
      background: #1b1a1a;
    }
  }
`;
