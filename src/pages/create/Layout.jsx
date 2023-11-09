import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import Input from "@/components/commons/Input";
import ToggleButton from "@/components/commons/ToggleButton";
import Option from "@/components/commons/Option";
import Button from "@/components/commons/Button";
import { COLOR } from "@/styles/ColorStyles";
import { FONT16, FONT24B } from "@/styles/FontStyles";
import { SELECTED } from "@/styles/ButtonStyles";
import { DeviceSize } from "@/styles/DeviceSize";
import chooseImg from "@/assets/jeonghan.jpeg"; // 이미지 수정

function Layout() {
  return (
    <>
      <Container>
        <Title />
        <Text />
        <SelectOption />
        <Submit />
      </Container>
    </>
  );
}

export default Layout;

function Title() {
  return (
    <Contents__title>
      <p>To.</p>
      <Input placeholder="받는 사람 이름을 입력해주세요" />
    </Contents__title>
  );
}

function Text() {
  return (
    <Contents__text>
      <h2>배경화면을 선택해 주세요.</h2>
      <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
    </Contents__text>
  );
}

function SelectOption() {
  const [selectedType, setSelectedType] = useState(SELECTED.color);

  return (
    <>
      <ToggleButton handleToggle={setSelectedType} selected={selectedType} />
      <Options selectedType={selectedType} />
    </>
  );
}

Options.propType = {
  selectedType: PropTypes.oneOf([SELECTED.color, SELECTED.image]),
};
function Options({ selectedType }) {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (a) => () => setSelectedOption(a);

  return (
    <OptionContainer>
      {selectedType === SELECTED.color ? (
        <>
          {COLOR_OPTIONS.map((color, idx) => (
            <Option key={idx} color={color} check={selectedOption === idx} onClick={handleOptionClick(idx)} />
          ))}
        </>
      ) : (
        <>
          {IMG_OPTIONS.map((img, idx) => (
            <Option key={idx} src={img} check={selectedOption === idx} onClick={handleOptionClick(idx)} />
          ))}
        </>
      )}
    </OptionContainer>
  );
}
const COLOR_OPTIONS = [COLOR.O, COLOR.P, COLOR.B, COLOR.G];
const IMG_OPTIONS = [chooseImg, chooseImg, chooseImg, chooseImg];

function Submit() {
  return (
    <Contents__button>
      <Button type="primary" height="xl">
        생성하기
      </Button>
    </Contents__button>
  );
}

const Container = styled.div`
  width: calc(100vw - 9.6rem);
  max-width: 120rem;

  margin: auto;
  margin-top: 5rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: ${DeviceSize.tablet}) {
    width: calc(100vw - 9.6rem);
    min-width: 32rem;

    margin-bottom: 10rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: calc(100vw - 9.6rem);
    min-width: 32rem;

    margin-bottom: 10rem;
  }
`;

const Contents__title = styled.div`
  width: calc(100vw - 9.6rem);
  max-width: 120rem;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  @media (max-width: ${DeviceSize.mobile}) {
    width: calc(100vw - 9.6rem);
    min-width: 32rem;
  }

  > p {
    color: var(--Gray9);
    ${FONT24B}
  }
`;

const Contents__text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;

  > h2 {
    color: var(--Gray9);
    ${FONT24B}
  }

  > p {
    color: var(--Gray5);
    ${FONT16}
  }
`;

const OptionContainer = styled.div`
  width: calc(100vw - 9.6rem);
  max-width: 120rem;

  display: grid;
  grid-template-columns: repeat(4, minmax(20.8rem, 28.8rem));
  justify-content: space-between;
  gap: 1.6rem;

  @media (max-width: ${DeviceSize.tablet}) {
    grid-template-columns: repeat(3, minmax(20.8rem, 29.9rem));
    gap: 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    grid-template-columns: repeat(2, minmax(15.2rem, 32.8rem));
  }
`;

const Contents__button = styled.div`
  width: calc(100vw - 9.6rem);
  max-width: 120rem;
  margin: auto;

  @media (max-width: ${DeviceSize.tablet}) {
    position: fixed;

    left: 50%;
    bottom: 2.4rem;
    transform: translateX(-50%);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    min-width: 32rem;

    position: fixed;

    left: 50%;
    bottom: 2.4rem;
    transform: translateX(-50%);
  }
`;
