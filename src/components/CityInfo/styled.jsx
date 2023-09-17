import styled from 'styled-components';

export const CityInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  color: white;
  margin-top: 40px;
  padding: 20px 20px 20px 20px;
  border-radius: 20px;
  height: 100%;
  width: 40%;
`;

export const LeftContainer = styled.div`
  div:first-child {
    margin-bottom: 25px;
    h2 {
      font-size: 18px;
    }
  }
  div:nth-child(2) {
    h3:first-child {
      margin-bottom: 3px;
    }
  }
`;

export const RigthContainer = styled.div`
  text-align: right;

  h4 {
    font-size: 40px;
    font-weight: 500;
  }
`;
