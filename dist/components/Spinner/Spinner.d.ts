/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { SpinnerSize } from './enums';
import './Spinner.css';
export { SpinnerSize };
export declare enum SpinnerColor {
    /**
     * Light theme.
     */
    LIGHT = "light",
    /**
     * Dark theme.
     */
    DARK = "dark",
}
export interface SpinnerProps extends BaseComponentProps {
    /**
     * Text displayed besides/below the spinner.
     */
    text: string;
    /**
     * Whether to hide text, and only render it for screenreaders.
     * @default false
     */
    hideText?: boolean;
    /**
     * Color of the spinner.
     * @default SpinnerColor.LIGHT
     */
    color?: SpinnerColor;
    /**
     * Size of the spinner.
     * @default SpinnerSize.MEDIUM
     */
    size?: SpinnerSize;
}
/**
 * A `Spinner` is an outline of a circle which animates around itself indicating to the user that
 * things are processing. It is shown when we're unsure how long a task will take.
 */
export default class Spinner extends React.PureComponent<SpinnerProps, {}> {
    static defaultProps: Partial<SpinnerProps>;
    render(): JSX.Element;
    private getClasses();
    private getSpinnerProps();
    private getLabelProps();
}
