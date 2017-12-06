/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { AvatarBorderType, AvatarSize } from './enums';
import './Avatar.css';
export { AvatarBorderType, AvatarSize };
export interface BaseAvatarProps extends BaseComponentProps {
    /**
     * Name of the person or object being represented. Will be used as accessible alt text.
     */
    name: string;
    /**
     * Element to be used as badge. You can set its height and width to fill the available area.
     */
    badgeContent?: React.ReactNode;
    /**
     * Short accessible description of the badge. Will be appended to name if provided.
     */
    badgeDescription?: string;
    /**
     * Type of border around the avatar.
     * @default AvatarBorderType.ROUND
     */
    borderType?: AvatarBorderType;
    /**
     * Image source URL.
     */
    imageUrl?: string;
    /**
     * Two letters to be displayed if an `imageUrl` wasn't provided.
     */
    initials?: string;
    /**
     * XLARGE: 72px, LARGE: 48px, MEDIUM: 40px, SMALL: 32px, XSMALL: 24px.
     * @default AvatarSize.MEDIUM
     */
    size?: AvatarSize;
}
export interface ImageAvatarProps extends BaseAvatarProps {
    imageUrl: string;
}
export interface InitialsAvatarProps extends BaseAvatarProps {
    initials: string;
}
export declare type AvatarProps = ImageAvatarProps | InitialsAvatarProps;
/**
 * An `Avatar` shows a thumbnail representation of both an individual or group.
 */
export default class Avatar extends React.PureComponent<AvatarProps, {}> {
    static defaultProps: Partial<AvatarProps>;
    render(): JSX.Element;
    private getInitials();
    private getAccessibleText();
    private getClasses();
}
