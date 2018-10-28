import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 50px;
`;

export const Card = styled.div`
  width: 230px;
  background: #060606;
  border-radius: 3px;
  margin: 10px 10px;

  display: flex;
  flex-direction: column;


  header {
    height: 86px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong{
      font-size: 22px;
      color: #000;
      text-shadow: -1px 0 #fcde2b, 0 1px #fcde2b, 1px 0 #fcde2b, 0 -1px #fcde2b;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;
      color: #fff;
      font-size: 13px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #fcde2b;
        font-style: italic;
      }

      &:nth-child(2n - 1){
        background: #000;
      }
    }
  }

`;
