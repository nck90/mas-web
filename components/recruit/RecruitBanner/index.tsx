import { AnimatedButton, Button } from 'components/common';
import Breakpoints from 'constants/breakpoints';
import Yapp from 'constants/yapp';
import {
  IS_RECRUITING,
  NEXT_GENERATION_RECRUIT_LINK,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import DOMPurify from 'isomorphic-dompurify';
import styled, { keyframes } from 'styled-components';
import media from 'styles/media';

function RecruitBanner() {
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { title, description } = BannerInfo;

  return (
    <RecruitBannerContainer>
      <BannerInner>
        <BannerTitle
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
        />
        <BannerDescription
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />
        <ButtonBlock
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSclEn1FB5iNiRxFy8RUpR9KvtbWPmGUwocaKgZOINxYemb3UQ/viewform?usp=sharing"
          rel="noreferrer"
        >
          <ApplyButton
            width={220}
            height={65}
            fontColor="white"
            buttonColor="grey_850"
            borderColor="lightGrey"
          >
            지원하기
          </ApplyButton>
        </ButtonBlock>
      </BannerInner>
    </RecruitBannerContainer>
  );
}

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const RecruitBannerContainer = styled.div`
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(252, 161, 125, 1),
    rgba(252, 200, 125, 1)
  );
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease infinite;
`;

const BannerInner = styled.div`
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  padding: 120px 0 100px;
  .mobile {
    display: none;
  }
  ${media.tablet} {
    width: auto;
    padding: 164px 80px 100px;
  }
  ${media.mobile} {
    padding: 80px 20px 64px 20px;
    margin-bottom: 56px;
    .desktop {
      display: none;
    }
  }
  ${media.custom(420)} {
    .mobile {
      display: block;
    }
  }
`;

const BannerTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Head};
  color: ${({ theme }) => theme.palette.grey_1000};
  margin-bottom: 24px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Head};
  }
`;

const BannerDescription = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  color: ${({ theme }) => theme.palette.grey_900};
  margin-bottom: 56px;
  ${media.tablet} {
    margin-bottom: 103px;
  }
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_1}
    margin-bottom:32px;
  }
`;

const ButtonBlock = styled.a`
  width: fit-content;
  height: fit-content;
  display: block;
  ${media.xSmall} {
    margin: 0 auto;
  }
`;

const ApplyButton = styled(Button)`
  transition: all 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey_700};
  }
  ${media.mobile} {
    width: 162px;
    height: 56px;
  }
`;

const RecruitButton = styled(AnimatedButton)<{ disabled?: boolean }>`
  ${media.mobile} {
    width: 112px;
    height: 56px;
    ${({ disabled }) => disabled && ` width: 160px;`}
  }
`;

export default RecruitBanner;
