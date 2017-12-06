/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { MessageBarType } from './enums';
import './MessageBar.css';
export { MessageBarType };
export interface MessageBarProps extends NestableBaseComponentProps {
    /**
     * Type of message being displayed.
     * @default MessageBarType.INFO
     */
    type?: MessageBarType;
    /**
     * Elements to be displayed as actions for this message.
     */
    actions?: React.ReactNode;
}
/**
 * A `MessageBar` displays relevant status information. You can use a `MessageBar` to tell the user
 * about a situation, and optionally provide actions for them to take.
 */
export default class MessageBar extends React.PureComponent<MessageBarProps, {}> {
    static defaultProps: {
        type: MessageBarType;
    };
    render(): JSX.Element;
    private getClasses();
}
