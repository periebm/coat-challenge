import styled from 'styled-components';

export const CityInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  color: white;
  margin-top: 40px;
  padding: 20px 20px 20px 20px;
  border-radius: 20px;
  height: 100%;
  width: 40%;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8a1c25;
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

  @media only screen and (max-width: 768px) {
    div:first-child {
      h2 {
        font-size: 15px;
      }
    }
  }
`;

export const RigthContainer = styled.div`
  text-align: right;

  h4 {
    font-size: 40px;
    font-weight: 500;
  }

  @media only screen and (max-width: 768px) {
    h4 {
      font-size: 30px;
    };
  }
`;
