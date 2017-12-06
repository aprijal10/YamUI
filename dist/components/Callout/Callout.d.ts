/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './Callout.css';
export declare enum TriggerType {
    CLICK = "click",
    HOVER = "hover",
}
export interface CalloutProps extends NestableBaseComponentProps {
    /**
     * The content to populate the callout's popup area.
     */
    content: React.ReactNode;
    /**
     * Direction to place the callout in relationship to its visible trigger content. Note that this
     * is a hint, and the popup position will adjust to available screen real estate.
     * @default DirectionalHint.bottomCenter
     */
    directionalHint?: DirectionalHint;
    /**
     * Whether to display the callout's arrow/beak.
     * @default true
     */
    isBeakVisible?: boolean;
    /**
     * A hidden title to be rendered in an `h1` tag.
     */
    screenreaderTitle?: string;
    /**
     * Whether the callout should start visible. Note that it will wait until `componentDidMount` to
     * ensure it can properly position itself in relation to the trigger.
     * @default false
     */
    startVisible?: boolean;
    /**
     * Whether a mouse click or hover should trigger the callout.
     * @default TriggerType.HOVER
     */
    triggerType?: TriggerType;
    /**
     * Callback to be fired when the callout content is removed.
     */
    onContentDismiss?: () => void;
    /**
     * Callback to be fired when the callout content is displayed.
     */
    onContentDisplay?: () => void;
    /**
     * Callback to be fired on trigger hover. Can be used to preload content early before the callout
     * content is actually displayed.
     */
    onTriggerHover?: () => void;
}
export interface CalloutState {
    visible: boolean;
}
export { DirectionalHint };
/**
 * A `Callout` is a small popover overlay, to be used for hovercards. `Callout` opens on click or
 * mouse enter, and closes on mouse out and `ESC`. It should be used with `CalloutHeader` and
 * `CalloutBody` components for consistent layouts.
 */
export default class Callout extends React.PureComponent<CalloutProps, CalloutState> {
    static defaultProps: Partial<CalloutProps>;
    private triggerElement;
    private showTimeout;
    private hideTimeout;
    constructor(props: CalloutProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleTriggerClick();
    private handleTriggerHover();
    private handleTriggerHoverLeave();
    private handleBodyHover();
    private beginShow();
    private cancelShow();
    private beginHide();
    private cancelHide();
    private show();
    private hide();
    private handleKeyDown(e);
    private startKeyListener();
    private stopKeyListener();
}
