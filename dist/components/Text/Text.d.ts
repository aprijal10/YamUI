/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { TextColor, TextSize } from './enums';
import './Text.css';
export { TextColor, TextSize };
export interface TextProps extends NestableBaseComponentProps {
    /**
     * Text color
     */
    color?: TextColor;
    /**
     * A preset size which determines a font-size + line-height combination
     * supporting our vertical rhythm.
     */
    size?: TextSize;
    /**
     * Sets a max-width on the Text content, hiding the overflow with an ellipsis character.
     * You should generally use a px value, or 100%.
     */
    maxWidth?: string;
    /**
     * Sets font-weight: bold.
     */
    bold?: boolean;
    /**
     * Sets text to uppercase.
     */
    uppercase?: boolean;
}
/**
 * A `Text` component simply renders a `span`. It offers size and color props so UI features don't
 * need to own this CSS. This is both a convenience for engineers and a way to enforce consistency
 * of supported text colors and `font-size`/`line-height` combinations.
 */
export default class Text extends React.PureComponent<TextProps, {}> {
    render(): JSX.Element;
    private getClasses();
    private getStyles();
}
