import styled from '@emotion/styled';
import { mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';

import { CenteredSection } from '~/blocks/section';
import { SectionHeading } from '~/components/section-heading';
import { Component, ComponentProps } from '~/elements/base/fc';
import { OptImage } from '~/elements/base/opt-image';
import {
  MasonryBreakpoints,
  MasonryGrid,
} from '~/elements/complex/masonry-grid';
import { ExtLinkCard } from '~/elements/simple/card';
import { Heading } from '~/elements/simple/heading';
import { InspirationSite, viewports } from '~/types';

const InspirationGrid = styled(MasonryGrid)`
  margin: var(--content-bottom-margin) 0;
`;

const InspirationCard = styled(ExtLinkCard)`
  border: 1px solid var(--divider);
  padding: 0.8rem 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & h6,
  & p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover,
  &:focus {
    & h6,
    & p {
      text-decoration: underline;
    }
  }
`;

const FaviconLinkContainer = styled.div`
  display: flex;
  align-items: center;

  & svg,
  & img {
    width: 24px;
    height: 24px;
    margin-right: 0.8rem;
  }
`;

export interface InspirationProps extends ComponentProps {
  inspirationItems?: Array<InspirationSite>;
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints[viewports.default] = 1;
masonryBreakpoints[viewports.mobile.lg] = 2;
masonryBreakpoints[viewports.tablet.lg] = 3;

const formatLink = (link?: string): string => {
  if (!link) return '';
  let newLink = link.replace(/(^\w+:|^)\/\//, '');
  newLink = newLink.replace('www.', '');
  newLink = newLink.replace('/', '');
  return newLink;
};

export const Inspiration: Component<InspirationProps> = (props) => {
  const { inspirationItems } = props;

  return (
    <CenteredSection id={'inspiration'}>
      <SectionHeading
        size={'3'}
        shadowColor={'green'}
        gradientColor={'green-to-yellow'}
        emoji={'🍀'}
      >
        Inspiration
      </SectionHeading>
      <p>
        These are some people, websites and tools that have been inspiration to
        build this website and some of my projects 👏
      </p>

      <InspirationGrid breakpoints={masonryBreakpoints} gap={'1rem'}>
        {(inspirationItems || []).map((item, i) => {
          return (
            <InspirationCard
              key={i}
              to={item.link}
              title={`Link to ${item.title}'s website`}
            >
              <Heading size={'6'}>{item.title}</Heading>
              {(item.description?.length || 0) > 0 && <p>{item.description}</p>}
              <FaviconLinkContainer>
                {item.favicon && (item.favicon?.length || 0) ? (
                  <OptImage alt={item.title} src={item.favicon ?? ''} />
                ) : (
                  <Icon path={mdiWeb} size={0.8} />
                )}
                <p className={'small'}>{formatLink(item.link)}</p>
              </FaviconLinkContainer>
            </InspirationCard>
          );
        })}
      </InspirationGrid>
    </CenteredSection>
  );
};