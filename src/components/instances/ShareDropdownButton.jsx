import shareIcon from "@/assets/share_24.svg";
import Button from "@/components/commons/Button";
import { FONT15 } from "@/styles/FontStyles";
import { Z_INDEX } from "@/styles/ZindexStyles";
import shareKakaoTalk from "@/utils/shareKakao";
import { useState } from "react";
import styled from "styled-components";

function ShareDropdownButton(currentPath = "") {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const host = "http://localhost:3000";

  const copyClipboard = () => {
    navigator.clipboard
      .writeText(host + currentPath)
      .then(() => {
        alert("클립보드에 복사되었습니다.");
      })
      .catch((err) => {
        console.error("URL 복사 실패:", err);
      });
  };

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <ShareButton>
      <CustomButton type="outlined" width="56" height="m" onClick={handleClick}>
        <img src={shareIcon} alt="공유 버튼" />
      </CustomButton>
      {isMenuVisible && (
        <List>
          <button onClick={() => shareKakaoTalk(host + currentPath)}>
            <Text>카카오톡 공유</Text>
          </button>
          <button onClick={copyClipboard}>
            <Text>URL 공유</Text>
          </button>
        </List>
      )}
    </ShareButton>
  );
}

export default ShareDropdownButton;

const CustomButton = styled(Button)`
  @media (max-width: 768px) {
    width: 4.4rem;
    padding: 0.6rem 0.6rem;
  }
`;

const ShareButton = styled.button`
  position: relative;
  display: inline-block;
`;

const List = styled.ul`
  width: 13.8rem;
  position: absolute;
  top: 4.5rem;
  left: 0;
  padding: 1rem 0.1rem;

  border-radius: 0.8rem;
  border: 0.1rem solid var(--Gray3);
  background: var(--White);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  z-index: ${Z_INDEX.header_button_popup};

  @media (max-width: 1350px) {
    left: -8rem;
  }
`;

const Text = styled.li`
  width: 13.4rem;
  height: 4rem;
  padding: 1.2rem 1.6rem;

  display: flex;
  align-items: center;

  color: var(--Gray9);
  ${FONT15}
  letter-spacing: -0.16px;

  &:hover {
    background: var(--Gray1);
  }
`;
