import { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FONT16 } from "@/styles/FontStyles";
import arrowUp from "@/assets/arrow_top.svg";
import arrowDown from "@/assets/arrow_down.svg";

const RELATIONSHIP = ["지인", "가족", "친구", "애인", "동료"];

Dropdown.propTypes = {
  disabled: PropTypes.bool,
};

function Dropdown({ disabled }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("지인");
  const [arrowDirection, setArrowDirection] = useState(arrowDown);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setArrowDirection(showDropdown ? arrowDown : arrowUp);
  };

  const handleSelect = (value) => {
    setSelectedValue(value); // 선택된 값을 설정하면
    setShowDropdown(false); // 드롭다운을 닫음
    setArrowDirection(arrowDown); // 화살표 방향을 원래대로 변경
  };

  return (
    <Container onClick={toggleDropdown} disabled={disabled}>
      {/* children으로 받아올 예정 */}
      {selectedValue}
      <ArrowImg src={arrowDirection} alt="클릭해서 옵션 선택하기" />
      <List $show={showDropdown}>
        {/* children으로 받아올 예정 */}
        {RELATIONSHIP.map((relationship, idx) => (
          <Text key={idx} onClick={() => handleSelect(relationship)}>
            {relationship}
          </Text>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 32rem;
  height: 5rem;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--Gray3);
  background: var(--White);

  ${FONT16}
  color: var(--Gray5);

  &:hover {
    border: 0.1rem solid var(--Gray5);
  }

  &:active {
    border: 0.2rem solid var(--Gray7);
    color: var(--Gray9);
  }

  &:focus {
    border: 0.2rem solid var(--Gray5);
    outline: none;
    color: var(--Gray9);
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      border: 0.1rem solid var(--Gray3);
      background: var(--Gray1);
      color: var(--Gray4);
    `}
`;

const ArrowImg = styled.img`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  width: 1.6rem;
  height: 1.6rem;
`;

const List = styled.ul`
  display: ${({ $show }) => ($show ? "block" : "none")};
  width: 32rem;
  position: absolute;
  top: 5.8rem;
  right: 0;
  padding: 1rem 0.1rem;

  border-radius: 0.8rem;
  border: 0.1rem solid var(--Gray3);
  background: var(--White);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  z-index: 1;
`;

const Text = styled.li`
  width: 31.6rem;
  padding: 1.2rem 1.6rem;

  display: flex;
  align-items: center;

  color: var(--Gray9);
  ${FONT16}

  &:hover {
    background: var(--Gray1);
  }
`;

export default Dropdown;
