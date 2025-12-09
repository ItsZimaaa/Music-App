import styled from 'styled-components';

const Button = ({ text, children }) => {
  return (
    <StyledWrapper>
      <button className='active:scale-95'>
        {text || children}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 8px 12px;
    border: unset;
    border-radius: 15px;
    color: var(--color-white);
    background: var(--color-black-100);
    position: relative;
    font-weight: 1000;
    font-size: 17px;
    z-index: 1;
    transition: all 250ms;
    overflow: hidden;
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: var(--color-green-100);
    z-index: -1;
    transition: all 250ms;
  }

  button:hover {
    color: var(--color-black-100);
  }

  button:hover::before {
    width: 100%;
  }
`;


export default Button;
