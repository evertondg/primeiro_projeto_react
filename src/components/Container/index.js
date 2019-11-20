import styled from 'styled-components';

const Container = styled.div`
  /*  max-width: 600px;*/
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 20px 25px;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export default Container;
