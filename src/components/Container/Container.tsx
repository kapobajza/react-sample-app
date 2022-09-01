import styled from 'styled-components';
import { Property } from 'csstype';
import { FC, PropsWithChildren } from 'react';

interface Props {
  $spacing?: Property.Margin;
  $noLeftSpacing?: boolean;
  $noRightSpacing?: boolean;
}

const Container: FC<PropsWithChildren<Props>> = ({
  $spacing,
  children,
  $noLeftSpacing,
  $noRightSpacing,
}) => {
  return (
    <Root $spacing={$spacing} $noLeftSpacing={$noLeftSpacing} $noRightSpacing={$noRightSpacing}>
      {children}
    </Root>
  );
};

export default Container;

const Root = styled.div<Props>`
  ${({ theme, ...otherProps }) => {
    const { $spacing = theme.spacing(2), $noLeftSpacing, $noRightSpacing } = otherProps;

    return {
      margin: $spacing,
      marginLeft: $noLeftSpacing ? 0 : undefined,
      marginRight: $noRightSpacing ? 0 : undefined,
    };
  }}
`;
