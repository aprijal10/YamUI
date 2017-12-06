/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './FixedGrid.css';
export interface FixedGridColumnProps extends NestableBaseComponentProps {
    /**
     * Set to true if this column should have a fixed width. If true, and `width` is not provided,
     * this column will shrink to fit its content.
     */
    fixed?: boolean;
    /**
     * The number of pixels wide this column should be. Ignored if `fixed` is not set to true.
    */
    width?: number;
    /**
     * The vertical alignment of the column's content.
     * @default 'top'
    */
    verticalAlign?: 'top' | 'middle' | 'bottom';
}
/**
 * A `FixedGridColumn` represents each column inside a `FixedGrid`. It should be wrapped in a
 * `FixedGridRow`.
 */
export default class FixedGridColumn extends React.PureComponent<FixedGridColumnProps, {}> {
    render(): JSX.Element;
    private getClasses();
    private getStyle();
}
