/// <reference types="react" />
import { ColorProps, SpaceProps, PositionProps, LayoutProps, FlexboxProps, BorderProps } from 'styled-system';
export declare type BoxProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps & BorderProps & PositionProps;
declare const Box: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<string | number>>> & FlexboxProps<Required<import("styled-system").Theme<string | number>>> & BorderProps<Required<import("styled-system").Theme<string | number>>, import("csstype").Property.BackgroundPosition<string | number>> & PositionProps<Required<import("styled-system").Theme<string | number>>>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default Box;
