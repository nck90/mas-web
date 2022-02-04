import Breakpoints from 'constants/breakpoints';
import { Media } from 'styled-components';

const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

// @Todo: 화면 사이즈 모두 나오면 상수화 예정
const { xxlarge } = Breakpoints;

const media: Media = {
  mobile: mediaQuery(375),
  tablet: mediaQuery(834),
  desktop: mediaQuery(xxlarge),
  custom: mediaQuery,
};

export default media;
