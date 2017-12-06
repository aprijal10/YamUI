/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './HorizontalList.css';
export interface HorizontalListProps extends NestableBaseComponentProps {
    /**
     * Alignment of the list.
     * @default 'left'
     */
    align?: 'left' | 'right';
}
/**
 * A `HorizontalList` displays a horizontal list of evenly spaced items.
 */
export default class HorizontalList extends React.PureComponent<HorizontalListProps, {}> {
    static defaultProps: {
        align: string;
    };
    render(): JSX.Element;
    private getClasses();
}
