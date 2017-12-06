/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import './Dropdown.css';
export declare type DropdownOptionKey = string | number;
export declare type DropdownOption = IDropdownOption;
export interface DropdownProps extends BaseComponentProps {
    /**
     * Items to be presented to the user.
    **/
    options: DropdownOption[];
    /**
     * Label text that will be rendered above the dropdown.
    **/
    label?: string;
    /**
     * Input placeholder text. Displayed until option is selected.
    **/
    placeHolder?: string;
    /**
     * Initially selected option.
    **/
    selectedKey?: DropdownOptionKey;
    /**
     * Function to call when user changes the selected item.
    **/
    onChanged?: (key: DropdownOptionKey) => void;
}
/**
 * A `Dropdown` is a list in which the selected item is always visible, and the others are visible
 * on demand by clicking a button.
 */
export default class Dropdown extends React.PureComponent<DropdownProps, {}> {
    render(): JSX.Element;
    private getClasses();
    private getIcon();
    private handleChanged(option);
}
