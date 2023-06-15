import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 1.5em 3em;
  max-width: 1300px;

  a {
    margin-bottom: 1em;
    text-align: center;
    font-size: 4.2rem;
  }

h2{
    margin-bottom: 1em;
    font-size: 2.5rem;
    text-align:center;
    text-transform: uppercase;
}

  form {
    display: flex;
    flex-direction: column;
    width:100%;

    input,
    label {
      margin: 0 auto;
      width: 60%;
      font-size: 1.6rem;
    }

    input{
        padding: 0.4em;
        max-width: 350px;

        &:focus{
            outline: 1px solid ${({ theme }) => theme.colors.orange};
        }
    }

    input[type="submit"]{
        margin-bottom: 1em;
        padding: 0.5em 0;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.orange};
        font-family: 'Roboto', sans-serif;
        border: none;
        border-radius: 7px;
        font-weight: bold;
        cursor: pointer;
        text-transform: uppercase;
        box-shadow: 0 0 10px 2px rgba(255, 145, 24, 1);
        transition: transform 0.3s;
    }
  }

  p {
    text-align center;
    font-size: 1.5rem;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.darkBlue};
    cursor: pointer;
  }

  span {
    margin-bottom: 1em;
    height: 10px;
    font-size: 1.3rem;
    text-align:center;
    color: ${({ theme }) => theme.colors.lightRed};
  }
`;
