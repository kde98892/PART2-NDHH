import styled from "styled-components";
import propTypes from "prop-types";
import Badge from "@/components/commons/Badge";
import Button from "@/components/commons/Button";
import { formatDate } from "@/utils/formatDate";
import { FONT12, FONT18, FONT20, FONT20B } from "@/styles/FontStyles";
import { DeviceSize } from "@/styles/DeviceSize";
import defaultImg from "@/assets/default_profile.svg";

/**
 * @param {*} data 메세지 데이터 객체
 */
Card.propTypes = {
  type: propTypes.oneOf(["Normal", "Edit", "Plus"]),
  data: propTypes.object,
};
function Card({ type, data = null }) {
  if (type === "Plus") {
    return (
      <Container>
        <PlusIcon>
          <Button type="plus" />
        </PlusIcon>
      </Container>
    );
  }

  const { sender, profileImageURL, relationship, content, font, createdAt } = data;

  return (
    <Container>
      <Profile>
        <ProfileImg src={profileImageURL || defaultImg} alt={`${sender}님의 프로필 사진`} />
        <Wrapper>
          <Sender>
            From. <Bold>{sender}</Bold>
          </Sender>
          <Badge>{relationship}</Badge>
        </Wrapper>
      </Profile>
      {type === "Edit" && (
        <DeleteIcon>
          <Button type="trash" />
        </DeleteIcon>
      )}
      <Content $font={font}>{content}</Content>
      <Date>{formatDate(createdAt)}</Date>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  width: 100%;
  max-width: 38.4rem;
  min-width: 32rem;
  height: 28rem;
  padding: 2.8rem 2.4rem 2.4rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  border-radius: 1.6rem;

  background-color: var(--White);
  box-shadow: 0px 0.2rem 1.2rem 0px rgba(0, 0, 0, 0.08);

  @media (max-width: ${DeviceSize.tablet}) {
    max-width: 50rem;
  }
`;

const ProfileImg = styled.img`
  width: 5.6rem;
  height: 5.6rem;

  border-radius: 10rem;
  border: 1px solid var(--Gray2);

  background: var(--white);
`;

const Profile = styled.div`
  width: 100%;
  padding-bottom: 1.6rem;

  display: flex;
  gap: 1.4rem;

  border-bottom: 0.1rem solid var(--Gray2);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;
  align-items: flex-start;
`;

const Sender = styled.div`
  ${FONT20};
  color: var(--Black);
  line-height: 120%;
`;

const Bold = styled.span`
  ${FONT20B};
  line-height: 120%;
`;

const DeleteIcon = styled.div`
  width: 4rem;
  height: 4rem;

  position: absolute;
  top: 2.8rem;
  right: 2.4rem;
`;

const Content = styled.div`
  width: 100%;
  height: 10.6rem;

  overflow: hidden;

  ${FONT18}
  color: var(--Gray6);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${({ $font }) => $font};
  line-height: 155.556%;
  letter-spacing: -0.018rem;
`;

const Date = styled.div`
  width: 100%;

  ${FONT12}
  color: var(--Gray4);
  text-align: start;
  letter-spacing: -0.006rem;
`;

const PlusIcon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
`;
