import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Breakpoints from 'constants/breakpoints';
import useWindowDimensions from 'hooks/useWindowDimensions';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

// -----------------
// 타입 정의
// -----------------
type FieldNameTypes = '1기' | '2기' | '3기' | '4기' | '5기';

type Member = {
  name: string;
  image: string;
  department: string;
  hashtag: string[];
};

interface TabMenuProps {
  className?: string;
  tabs: FieldNameTypes[];
  currentTab: FieldNameTypes;
  onClick: (tab: FieldNameTypes) => void;
  backgroundColor?: PaletteKeyTypes;
}

interface BubbleMenuProps {
  className?: string;
  tabs: FieldNameTypes[];
  currentTab: FieldNameTypes;
  onClick: (tab: FieldNameTypes) => void;
  backgroundColor?: PaletteKeyTypes;
}

// -----------------
// 인라인 TabMenu 구현 (transient props 사용)
// -----------------
const InlineTabMenu: React.FC<TabMenuProps> = ({
  className,
  tabs,
  currentTab,
  onClick,
  backgroundColor = 'grey_100',
}) => {
  return (
    <TabMenuContainer $backgroundColor={backgroundColor} className={className}>
      {tabs.map((tab) => (
        <TabMenuButton
          key={`field-${tab}`}
          onClick={() => onClick(tab)}
          $isActive={currentTab === tab}
        >
          {tab}
        </TabMenuButton>
      ))}
      <AnimatedBackground $tabs={tabs} $currentTab={currentTab} />
    </TabMenuContainer>
  );
};

const TabMenuContainer = styled.div<{ $backgroundColor?: PaletteKeyTypes }>`
  display: inline-flex;
  position: relative;
  height: 64px;
  ${media.mobile} {
    height: 43px;
  }
  border-radius: 124px;
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor && theme.palette[$backgroundColor]};
`;

const TabMenuButton = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 196px;
  height: inherit;
  ${media.tablet} {
    min-width: 164px;
  }
  ${media.mobile} {
    min-width: 95px;
    ${({ theme }) => theme.textStyle.mobile.Body_Point2};
  }
  ${({ theme }) => theme.textStyle.web.Subtitle};
  ${({ $isActive, theme }) =>
    $isActive
      ? css`
          color: ${theme.palette.white};
        `
      : css`
          color: ${theme.palette.grey_700};
        `}
  cursor: pointer;
  z-index: 100;
`;

const AnimatedBackground = styled.span<{
  $tabs: FieldNameTypes[];
  $currentTab: FieldNameTypes;
}>`
  position: absolute;
  top: 0;
  left: ${({ $tabs, $currentTab }) => $tabs.indexOf($currentTab) * 196}px;
  ${media.tablet} {
    left: ${({ $tabs, $currentTab }) => $tabs.indexOf($currentTab) * 164}px;
  }
  ${media.mobile} {
    left: ${({ $tabs, $currentTab }) => $tabs.indexOf($currentTab) * 95}px;
  }
  width: 196px;
  height: inherit;
  ${media.tablet} {
    width: 164px;
  }
  ${media.mobile} {
    width: 95px;
  }
  border-radius: 124px;
  background-color: ${({ theme }) => theme.palette.orange_300};
  transition: all 0.2s ease-in-out;
`;

// -----------------
// 인라인 BubbleMenu 구현 (transient props 사용)
// -----------------
const InlineBubbleMenu: React.FC<BubbleMenuProps> = ({
  className,
  tabs,
  currentTab,
  onClick,
  backgroundColor = 'grey_100',
}) => {
  return (
    <BubbleMenuContainer
      $backgroundColor={backgroundColor}
      className={className}
    >
      {tabs.map((tab) => (
        <BubbleMenuButton
          key={`field-${tab}`}
          onClick={() => onClick(tab)}
          $isActive={currentTab === tab}
        >
          {tab}
        </BubbleMenuButton>
      ))}
    </BubbleMenuContainer>
  );
};

const BubbleMenuContainer = styled.div<{ $backgroundColor?: PaletteKeyTypes }>`
  display: flex;
  overflow-x: auto;
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor && theme.palette[$backgroundColor]};
`;

const BubbleMenuButton = styled.div<{ $isActive: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  padding: 12px 20px;
  margin: 0 4px;
  cursor: pointer;
  z-index: 100;
  ${({ theme }) => theme.textStyle.mobile.Body_Point2};
  transition: all 0.5s;
  ${({ $isActive, theme }) =>
    $isActive
      ? css`
          color: ${theme.palette.white};
          background-color: ${theme.palette.orange_400};
        `
      : css`
          color: ${theme.palette.black};
          background-color: ${theme.palette.white};
        `}
`;

// -----------------
// Profile 컴포넌트
// -----------------
const membersData: Record<FieldNameTypes, Member[]> = {
  '1기': [],
  '2기': [],
  '3기': [
    {
      name: '양은서',
      image: '/img/eunsee.png',
      department: 'sw',
      hashtag: [
        'ENFP',
        '친화력 갑',
        '틱틱거리는 강아지',
        '공모전 천재',
        'MAS 찐사랑녀',
        '귀여운 친칠라상',
      ],
    },
    {
      name: '피은서',
      image: '/img/eunseo2.png',
      department: 'sw',
      hashtag: ['ESTP', '표현을 아끼지 않는'],
    },
    {
      name: '안민선',
      image: '/img/minsun.png',
      department: 'sw',
      hashtag: ['INFP', '잘 들어줌', '체육 부장', '귀여운거 좋아함'],
    },
    {
      name: '이서현',
      image: '/img/seohyun.png',
      department: 'de',
      hashtag: [
        'ISTP',
        '안물어요 다가오세요',
        '말보다 행동',
        '티안나게 배려중',
      ],
    },
    {
      name: '이경민',
      image: '/img/gyeongmin.png',
      department: 'de',
      hashtag: ['ENTP', '친구같은 선배', '프로고민상담러'],
    },
  ],
  '4기': [
    {
      name: '정희진',
      image: '/img/hyjin.png',
      department: 'sw',
      hashtag: [
        'ISFP',
        '친화력 갑',
        '후회 없게 해줄게',
        '좀비고 랭커',
        '롤체 플래티넘',
        '속초 Girl',
      ],
    },
    {
      name: '정현윤',
      image: '/img/hyun.png',
      department: 'sw',
      hashtag: [
        'ESFP',
        '활발함',
        '귀여움',
        '가끔 팩폭',
        '오버워치 랭커',
        '간식 담당',
      ],
    },
    {
      name: '박준원',
      image: '/img/junwon.png',
      department: 'sw',
      hashtag: [
        'INTJ',
        '개발 잘함',
        '계획적',
        '롤 다이아',
        '운동 잘함',
        '몬스터 애호가',
      ],
    },
    {
      name: '박홍준',
      image: '/img/hongjun.png',
      department: 'sw',
      hashtag: [
        'INTP',
        '개발 잘함',
        '분위기 메이커',
        '극 E 같음',
        '배틀그라운드',
        '아이디어 뱅크',
      ],
    },
    {
      name: '한정훈',
      image: '/img/jeonghun.png',
      department: 'de',
      hashtag: ['INFP', '미림 송강', '극 F', '로블록스', '키 큼', '창의력 갑'],
    },
    {
      name: '문지우',
      image: '/img/jiwoo.png',
      department: 'de',
      hashtag: ['INTP', '현실적', '극 T', '제5인격', '영어 잘함', '용인 Girl'],
    },
  ],
  '5기': [],
};

const Profile = () => {
  // 데이터가 있는 기수만 추출
  const availableGens = Object.entries(membersData)
    .filter(([_, members]) => members.length > 0)
    .map(([gen]) => gen) as FieldNameTypes[];

  const defaultGen =
    availableGens.length > 0 ? availableGens[availableGens.length - 1] : '4기';
  const [selectedGen, setSelectedGen] = useState<FieldNameTypes>(defaultGen);
  const { windowWidth } = useWindowDimensions();

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = '/img/profile-placeholder.png';
    target.onerror = null;
  };

  const tabs = Object.keys(membersData) as FieldNameTypes[];

  return (
    <ProfilePageWrapper>
      <Container>
        <MenuWrapper>
          {windowWidth > Breakpoints.medium ? (
            <InlineTabMenu
              tabs={tabs}
              currentTab={selectedGen}
              onClick={(tab) => setSelectedGen(tab)}
              backgroundColor="white"
            />
          ) : (
            <InlineBubbleMenu
              tabs={tabs}
              currentTab={selectedGen}
              onClick={(tab) => setSelectedGen(tab)}
              backgroundColor="white"
              className="scroll-none"
            />
          )}
        </MenuWrapper>

        {membersData[selectedGen].length > 0 ? (
          <MembersGrid>
            {membersData[selectedGen].map((member, index) => (
              <MemberCard key={index}>
                <MemberImg
                  src={member.image}
                  alt={member.name || '멤버'}
                  onError={handleImageError}
                />
                <MemberInfo>
                  <MemberName>{member.name}</MemberName>
                  <MemberInfoText>
                    {member.hashtag.map((tag, idx) =>
                      idx > 0 && idx % 3 === 0 ? (
                        <span key={idx}>
                          <br />#{tag}{' '}
                        </span>
                      ) : (
                        <span key={idx}> #{tag} </span>
                      ),
                    )}
                  </MemberInfoText>
                </MemberInfo>
              </MemberCard>
            ))}
          </MembersGrid>
        ) : (
          <EmptyState>
            <EmptyMessage>아직 정보가 업데이트되지 않았습니다.</EmptyMessage>
          </EmptyState>
        )}
      </Container>
    </ProfilePageWrapper>
  );
};

export default Profile;

// -----------------
// styled-components (Profile 페이지 공통 스타일)
// -----------------
const ProfilePageWrapper = styled.div`
  background-color: #f1f1f1;
  min-height: 100vh;
`;

const TopPanel = styled.div`
  display: flex;
  align-items: center;
  background-color: #181b1f;
  height: 80px;
  padding: 0 20px;
`;

const Logo = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 20px 0;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  overflow-x: auto;
`;

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 64px;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-top: 40px;
  }
`;

const MemberCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 380px;
  height: 425px;
  position: relative;
  overflow: hidden;
  align-items: flex-end;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${media.mobile} {
    height: 350px;
  }
`;

const MemberImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: transform 0.3s ease;
  ${MemberCard}:hover & {
    transform: scale(1.05);
  }
`;

const MemberInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 10% 8% 8% 8%;
  text-align: left;
  color: #fff;
  font-family: Pretendard, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const MemberName = styled.h3`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  ${media.mobile} {
    font-size: 20px;
  }
`;

const MemberInfoText = styled.p`
  color: #d2d2d2;
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
  ${media.mobile} {
    font-size: 16px;
  }
`;

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  margin-top: 64px;
`;

const EmptyMessage = styled.p`
  font-size: 20px;
  color: #666;
  text-align: center;
`;
