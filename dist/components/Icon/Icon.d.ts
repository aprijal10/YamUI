/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconSize } from './enums';
import icons from './icons';
import './Icon.css';
export { IconSize, icons };
export declare type IconName = keyof typeof icons;
export interface IconProps extends BaseComponentProps {
    /**
     * Specific icon graphic to render.
     */
    icon: IconName;
    /**
     * Sets icon style to `display: block`. This is helpful if the inline icon's `line-height` is
     * taller than the current line's `line-height`, and is creating extra vertical space.
     */
    block?: boolean;
    /**
     * Manual color override (by default the icon inherits its parent's color). Can be any valid CSS
     * color.
     */
    color?: string;
    /**
     * Icon size, which also accounts for `font-size` and `line-height`. If not set, size will
     * match the nearest <Block> or <Text> parent with textSize specified.
     */
    size?: IconSize;
}
/**
 * An `Icon` renders an SVG icon.
 */
export default class Icon extends React.PureComponent<IconProps, {}> {
    render(): JSX.Element;
    private getClasses();
    private getInlineStyles();
}
