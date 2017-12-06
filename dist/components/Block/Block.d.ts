/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from '../FixedGrid/enums';
import { TextSize } from '../Text/enums';
import './Block.css';
export { GutterSize, TextSize };
export interface BlockProps extends NestableBaseComponentProps {
    /**
     * Gutter spacing to be added below this block.
     */
    bottomSpacing?: GutterSize;
    /**
     * Padding to be added uniformly within this block.
     */
    padding?: GutterSize;
    /**
     * Number of pixels to finely adjust the gutter spacing above this block. Positive pushes the
     * component down, negative pulls it up. Only use this to adjust for vertical rhythm in text.
     */
    push?: number;
    /**
     * Text alignment within this block.
     */
    textAlign?: 'left' | 'right' | 'center';
    /**
     * Text size (`font-size` and `line-height`) within this block.
     */
    textSize?: TextSize;
    /**
     * Limits text content to a single line, hidding additional text with an ellipsis.
     */
    ellipsis?: boolean;
}
/**
 * A `Block` is a layout component to build consistent padding and vertical spacing between
 * components. It allows you to `push` a chunk of UI up or down by individual pixels to keep text in
 * the `4px` vertical rhythm. It's also the primary place you should set `textSize` in your UIs,
 * providing enumerated options for the supported `font-size`/`line-height` combinations.
 */
export default class Block extends React.PureComponent<BlockProps, {}> {
    render(): JSX.Element;
    private getClasses();
    private getInnerClasses();
    private getStyle();
}
