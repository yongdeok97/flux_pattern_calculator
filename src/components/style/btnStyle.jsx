import styled from 'styled-components';

const Button = styled.button`
  box-shadow: 3px 2px 0 rgb(91, 89, 89);
  border: 8px solid rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-weight: bold;
  height: 80px;
  width: 100px;
  margin: 3px;
  & > :active {
    border: none;
  }
`;

export const Container = styled.div`
  background-color: rgb(249, 226, 175);
  max-width: 500px;
  box-shadow: rgb(168, 163, 163) 0px 0px 10px;
  margin: 0px auto;
  padding: 20px;
  border-width: 10px;
  border-style: solid;
  border-color: rgba(0, 0, 1, 0.1);
  border-image: initial;
  border-radius: 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NumberBtn = styled(Button)`
  border-radius: 50%;
  background-color: #469dba;
`;

export const OperatorBtn = styled(Button)`
  border-radius: 50%;
  background-color: #6d1477;
  color: white;
`;

export const UtilBtn = styled(Button)`
  border-radius: 50px;
  width: 180px;
  height: 90px;
  background-color: #31186f;
  color: white;
`;
