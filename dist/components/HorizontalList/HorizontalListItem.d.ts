/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps as HorizontalListItemProps } from '../../util/BaseComponent/props';
import './HorizontalList.css';
export { HorizontalListItemProps };
/**
 * Each of the items nested within a `HorizontalList` component.
 */
export default class HorizontalListItem extends React.PureComponent<HorizontalListItemProps, {}> {
    render(): JSX.Element;
    private getClasses();
}
