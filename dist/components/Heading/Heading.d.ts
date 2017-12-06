/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { HeadingLevel, HeadingSize } from './enums';
import './Heading.css';
export { HeadingLevel, HeadingSize };
export interface HeadingProps extends NestableBaseComponentProps {
    /**
     * The heading level to render, i.e. h1-h6
     */
    level: HeadingLevel;
    /** Allows a heading tag at a given level to render visually as a different level,
     * or as plain inline text.
     */
    size?: HeadingSize;
}
/**
 * A `Heading` component renders an h1-h6 tag depending on the given level. You can also
 * override its visual styling to match a different level with `size`. Set `size="none"`
 * to render the heading as unstyled inline text.
 */
export default class Heading extends React.PureComponent<HeadingProps, {}> {
    render(): JSX.Element;
    private getSizedContent();
    private getClasses();
}
