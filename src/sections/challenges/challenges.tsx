import styled from '@emotion/styled';

import { CenteredSection } from '~/blocks/section';
import {
  MasonryGrid,
  MasonryBreakpoints,
  SectionHeading,
} from '~/new-components/atoms/complex';
import { Link } from '~/new-components/atoms/simple';
import { Component, ComponentProps, CodingChallenge, viewports } from '~/types';

const ChallengesGrid = styled(MasonryGrid)`
  margin: var(--content-bottom-margin) 0;
`;

const ChallengeItem = styled.li`
  margin-inline-start: 0.4rem;
`;

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints[viewports.default] = 1;
masonryBreakpoints[viewports.tablet.lg] = 2;

interface ChallengesProps extends ComponentProps {
  challenges?: Array<CodingChallenge>;
}

export const Challenges: Component<ChallengesProps> = (props) => {
  const { challenges } = props;
  return (
    <CenteredSection>
      <SectionHeading
        size={'3'}
        shadowColor={'orange'}
        gradientColor={'orange-to-red'}
        emoji={'👨‍💻'}
      >
        Coding Challenges
      </SectionHeading>
      <ChallengesGrid breakpoints={masonryBreakpoints} gap={'1rem'}>
        {challenges?.map((challenge, i) => {
          return (
            <ChallengeItem key={i}>
              <Link
                title={`Link to coding challenge: ${challenge?.title}`}
                href={`/coding/${challenge.slug}`}
              >
                {challenge?.title}
              </Link>
            </ChallengeItem>
          );
        })}
      </ChallengesGrid>
    </CenteredSection>
  );
};
