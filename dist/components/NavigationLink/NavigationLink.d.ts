/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './NavigationLink.css';
export interface NavigationLinkProps extends NestableBaseComponentProps {
    /**
     * URL or a URL fragment that the link points to.
     */
    href: string;
    /**
     * Whether the link should open in a new window. It securely removes access to the opening window.
     */
    newWindow?: boolean;
    /**
     * Title or description of the linked document for the anchor tag.
     */
    title?: string;
    /**
     * Whether to remove all styles from the link. Useful for allowing a large area to be clickable
     * while nesting `FakeLink` components to show link and hover state visuals.
     */
    unstyled?: boolean;
}
/**
 * A `NavigationLink` renders an `a` tag for navigation between web pages.
 */
export default class NavigationLink extends React.PureComponent<NavigationLinkProps, {}> {
    render(): JSX.Element;
    private getClasses();
}
