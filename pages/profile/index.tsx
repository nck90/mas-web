import React, { useState } from 'react';
import { BubbleMenu, TabMenu } from 'components/common';
import Breakpoints from 'constants/breakpoints';
import useWindowDimensions from 'hooks/useWindowDimensions';
import styled from 'styled-components';
import media from 'styles/media';

type Member = {
  name: string;
  image: string;
  department: string;
  hashtag: string[];
};

const membersData: Record<string, Member[]> = {
  '1기': [
    { name: '', image: '/img/.png', department: 'sw', hashtag: [] },
    { name: '', image: '/img/.png', department: 'sw', hashtag: [] },
    { name: '', image: '/img/.png', department: 'sw', hashtag: [] },
    { name: '', image: '/img/.png', department: 'sw', hashtag: [] },
    { name: '', image: '/img/.png', department: 'de', hashtag: [] },
    { name: '', image: '/img/.png', department: 'de', hashtag: [] },
  ],
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
      image: 'img/gyeongmin.png',
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
  '5기': [
    { name: '', image: '/img/.png', department: 'sw', hashtag: [] },
    { name: '', image: '/img/.png', department: 'sw', hashtag: [] },
    { name: '', image: '/img/.png', department: 'sw', hashtag: [] },
    { name: '', image: '/img/.png', department: 'sw', hashtag: [] },
    { name: '', image: '/img/.png', department: 'de', hashtag: [] },
    { name: '', image: '/img/.png', department: 'de', hashtag: [] },
  ],
};

const Profile = () => {
  const [selectedGen, setSelectedGen] =
    useState<keyof typeof membersData>('4기');
  const { windowWidth } = useWindowDimensions();

  return (
    <ProfilePageWrapper>
      <TopPanel>
        <Logo>MAS</Logo>
      </TopPanel>
      <Container>
        <MenuWrapper>
          {windowWidth > Breakpoints.medium ? (
            <TabMenu
              tabs={Object.keys(membersData)}
              currentTab={selectedGen}
              onClick={(tab: string) =>
                setSelectedGen(tab as keyof typeof membersData)
              }
              backgroundColor="white"
            />
          ) : (
            <BubbleMenu
              className="scroll-none"
              tabs={Object.keys(membersData)}
              currentTab={selectedGen}
              onClick={(tab: string) =>
                setSelectedGen(tab as keyof typeof membersData)
              }
              backgroundColor="white"
            />
          )}
        </MenuWrapper>

        <MembersGrid>
          {membersData[selectedGen].map((member, index) => (
            <MemberCard key={index}>
              <MemberImg src={member.image} alt={member.name} />
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
      </Container>
    </ProfilePageWrapper>
  );
};

export default Profile;

// ---------------------------
// styled-components
// ---------------------------
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
`;

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2%;
  margin-top: 64px;
  max-width: 60%;
  width: 100%;
  justify-content: center;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MemberCard = styled.div`
  display: flex;
  width: 380px;
  height: 425px;
  position: relative;
  overflow: hidden;
  align-items: flex-end;
  border-radius: 15px;
`;

const MemberImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const MemberInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  padding: 10% 0% 4% 8%;
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
  margin-bottom: 2%;
`;

const MemberInfoText = styled.p`
  color: #d2d2d2;
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
`;
