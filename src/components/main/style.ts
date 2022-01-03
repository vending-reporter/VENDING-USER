import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 25px;

  input,
  select {
    border: 0;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  button {
    margin-top: 180px;
    width: 100%;
    height: 40px;
    background-color: #c4c4c4;
    border: 0;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  padding-top: 30px;
  font-size: 24px;
`;

export const InfoBox = styled.div`
  margin-top: 40px;

  input {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    padding: 12px;
    font-size: 12px;
  }
`;

export const SubTitle = styled.h1`
  font-size: 16px;
`;

export const Description = styled.p`
  margin-top: 5px;
  font-size: 10px;
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 13px;

  select {
    margin-top: 15px;
    width: 33%;
    height: 30px;
    padding: 0 10px;
    font-size: 12px;
    cursor: pointer;
  }
`;

export const ContentBox = styled.div`
  position: relative;
  margin-top: 50px;
`;

// export const AddContentBtn = styled.div`
//   position: absolute;
//   right: 0;
//   top: 10px;
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   color: #4b93ff;
//   font-size: 14px;
//   cursor: pointer;

//   p:last-child {
//     font-size: 20px;
//   }
// `;

export const ContentInputBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;

  input {
    padding: 12px;
    font-size: 12px;
  }

  input:first-child {
    width: 70%;
  }

  input:last-child {
    width: 30%;
    height: 40px;
  }
`;
