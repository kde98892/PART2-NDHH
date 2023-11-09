import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FONT16, FONT12 } from "@/styles/FontStyles";

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

function Input({ placeholder, disabled }) {
  // iserror에 boolean 값 전달해주면 안돼서 state로 falsy, truthy한 값 전달해줌
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    // input에 아무 값도 입력하지 않았을 경우
    if (!e.target.value) {
      setError("true");
    } else {
      setError("");
    }
  };

  return (
    <>
      <Container $error={error} onBlur={handleInputChange} placeholder={placeholder} disabled={disabled} />
      {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </>
  );
}

export default Input;

const Container = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: none;
  outline: 0.1rem solid var(--Gray3);
  background: var(--White);
  ${FONT16}

  &:hover {
    outline: 0.1rem solid var(--Gray5);
  }

  &:focus {
    outline: 0.2rem solid var(--Gray5);
  }

  &:active {
    outline: 0.2rem solid var(--Gray7);
  }

  &:disabled {
    border: 0.1rem solid var(--Gray3);
    background: var(--Gray1);
    color: var(--Gray4);
  }

  ${({ $error }) =>
    $error &&
    `
    border: 0.1rem solid var(--Error);
    
    &:hover {
      outline: 0.1rem solid var(--Error);
    }
    &:focus {
      outline: 0.2rem solid var(--Error);
    }
    &:active {
      outline: 0.2rem solid var(--Error);
    }
  `}
`;

const ErrorMessage = styled.div`
  width: 32rem;
  height: 1.8rem;
  margin-top: 0.4rem;

  color: var(--Error);
  ${FONT12}
`;
