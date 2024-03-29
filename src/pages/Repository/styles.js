import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px #eee solid;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #eee;
    padding: 1px;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;
    }

    a {
      text-decoration: none;
      color: #333;

      &:hover {
        color: #7159c1;
      }
    }

    span {
      background: #eee;
      color: #333;
      border-radius: 2ex;
      font-size: 12px;
      font-weight: 600;
      height: 20px;
      padding: 3px 10px;
      margin-left: 15px;
    }

    p {
      margin-top: 5px;
      font-size: 11px;
      color: #999;
    }
  }
`;

export const PageActions = styled.div`
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0px 20px;
    background: #7159c1;
    border: none;
    box-sizing: initial;
    padding: 5px 10px;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    outline: 0;
    &:disabled {
      background: #ededed;
      color: #999;
    }
  }
`;

export const IssueFilter = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  button {
    border-radius: 2ex;
    outline: 0;
    border: 0;
    padding: 4px 8px;
    margin: 0 0.25rem;

    &:nth-child(${props => props.active + 1}) {
      background: #7159c1;
      color: white;
    }
  }
`;
