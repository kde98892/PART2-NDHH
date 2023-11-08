import styled from "styled-components";
import { FONT14B, FONT15, FONT18, FONT18B, FONT24B } from "@/styles/FontStyles";
import { DeviceSize } from "@/styles/DeviceSize";

function KeyPointCard({ content, $isReverse = false }) {
  const { point, title1, title2, explain, image } = content;

  return (
    <Container $isReverse={$isReverse}>
      <Wrapper>
        <Point point={point} />
        <P title>
          {title1}
          <Br />
          {title2}
        </P>
        <P>{explain}</P>
      </Wrapper>
      <img src={image} />
    </Container>
  );
}

function Point({ point }) {
  return (
    <Container__point>
      <p>{point}</p>
    </Container__point>
  );
}

export default KeyPointCard;

const Container = styled.div`
  width: 120rem;
  padding: 6rem 0px;
  margin-bottom: ${(props) => (props.$isReverse ? "5.2rem" : "3rem")};

  display: flex;
  flex-direction: ${(props) => (props.$isReverse ? "row-reverse" : "row")};
  justify-content: flex-end;
  align-items: flex-start;
  gap: ${(props) => (props.$isReverse ? "0rem" : "12.8rem")};

  border-radius: 1.6rem;
  background: var(--Surface);

  @media (max-width: 1199px) {
    width: calc(100vw - 4.8rem);
    margin-bottom: ${(props) => (props.$isReverse ? "13.3rem" : "3rem")};
    padding: 4rem 0;

    gap: 4rem;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    padding: 2.4rem 0 5.1rem;

    overflow: hidden;
  }

  img {
    width: 72rem;
    height: 20.4rem;

    @media (max-width: ${DeviceSize.mobile}) {
      width: 37rem;
      height: auto;

      gap: 4.8rem;
    }
  }
`;

const Wrapper = styled.div`
  @media (max-width: ${DeviceSize.pc}) {
    width: 72rem;
    padding-left: 4rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: calc(100% - 4.8rem);
    padding: 0;
  }
`;

const Container__point = styled.div`
  padding: 0.6rem 1.2rem;

  display: inline-block;

  border-radius: 5rem;
  background: var(--Purple6);

  p {
    ${FONT14B};
    color: var(--White);
  }
`;

const P = styled.h1`
  margin-top: ${(props) => (props.title ? "1.6rem" : "0.8rem")};

  ${(props) => (props.title ? FONT24B : FONT18)};

  @media (max-width: ${DeviceSize.mobile}) {
    margin-top: ${(props) => (props.title ? "1.6rem" : "0.4rem")};

    ${(props) => (props.title ? FONT18B : FONT15)};
  }
`;

const Br = styled.br`
  @media (max-width: ${DeviceSize.pc}) {
    display: none;
  }
`;
