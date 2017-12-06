/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from './enums';
import './FixedGrid.css';
export interface FixedGridRowProps extends NestableBaseComponentProps {
    /**
     * Margin added below the row.
     */
    bottomSpacing?: GutterSize;
    /**
     * Horizontal gutter space between each column.
     * @default GutterSize.SMALL
     */
    gutterSize?: GutterSize;
}
export { GutterSize };
/**
 * A `FixedGridRow` represents each row inside a `FixedGrid`. It should wrap `FixedGridColumn`s.
 */
export default class FixedGridRow extends React.PureComponent<FixedGridRowProps, {}> {
    static defaultProps: {
        gutterSize: GutterSize;
    };
    render(): JSX.Element;
    private getClasses();
}
