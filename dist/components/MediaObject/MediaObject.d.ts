/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { MediaObjectSize } from './enums';
import './MediaObject.css';
export { MediaObjectSize };
export interface MediaObjectProps extends NestableBaseComponentProps {
    /**
     * Dimensions for the media object.
     */
    size: MediaObjectSize;
    /**
     * Image content. If you're providing an `Avatar` component, note that its sizes may not match the
     * corresponding `MediaObject` size. If you're providing an `Image` component, you can set
     * `fullWidth: true` to fill the left column width.
     */
    imageContent?: React.ReactNode;
    /**
     * Title content. This should be plain text, but could be wrapped in arbitrary node if necessary.
     */
    titleContent?: React.ReactNode;
    /**
     * Metadata or secondary content. Will be displayed light gray. This should generally be plain
     * text, but you can pass in arbitrary content if necessary.
     */
    metadataContent?: React.ReactNode;
    /**
     * Extra or tertiary content. Will be displayed light gray. This should generally be plain text,
     * but you can pass in arbitrary content if necessary. If you need to pass in arbitrary extra
     * content like buttons or other elements, pass those in as children instead of here.
     */
    extraContent?: React.ReactNode;
}
/**
 * A `MediaObject` renders an image on the left with blocks of descriptive content on the right. The
 * image area, and pieces of text content, are passed in as props, with size and layout determined
 * by the `size` prop.
 */
export default class MediaObject extends React.PureComponent<MediaObjectProps, {}> {
    render(): JSX.Element;
    private getClasses();
    private getGutterSize();
    private showMetadata();
    private showExtra();
}
