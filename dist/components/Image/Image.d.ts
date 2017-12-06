/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { ImageFit, ImageLoadState } from 'office-ui-fabric-react/lib/Image';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import './Image.css';
export { ImageFit, ImageLoadState };
export interface ImageProps extends BaseComponentProps {
    /**
     * Description of the image that must be provided for screenreaders. Set to an empty string if
     * screenreaders should not read anything out loud.
     */
    description: string;
    /**
     * Source URL.
     */
    source: string;
    /**
     * Height in pixels.
     */
    height?: number;
    /**
     * Width in pixels.
     */
    width?: number;
    /**
     * Set this to true in responsive layouts where the image's container element should dictate the
     * image's width. The image will grow to fit its container's width and its height will grow to
     * match its natural aspect ratio.
     */
    fullWidth?: boolean;
    /**
     * Specifies how to position this image within its div wrapper. Not setting a value will behave
     * as expected, setting the image's height and width to the provides values and stretching/skewing
     * the image if its actual dimensions don't match. Providing a value allows you to specify a
     * different height/width than the image's actual dimensions while covering the area, containing
     * the image within the area, centering the image without scaling or stretching, etc.
     */
    imageFit?: ImageFit;
    /**
     * Will hide the image until it has loaded, then fade it in.
     * @default false
     */
    shouldFadeIn?: boolean;
    /**
     * Callback to be invoked when the image's loading state changes.
     */
    onLoadingStateChange?: (loadState: ImageLoadState) => void;
}
/**
 * An `Image` renders an `img` element within a wrapper `div`. This `div` is displayed as
 * `inline-block`, so it behaves like a standard inline image. The `height` and `width` actually get
 * applied to the wrapper `div`, and the image will get scaled/positioned within the wrapper
 * depending on which props you provide.
 */
export default class Image extends React.PureComponent<ImageProps, {}> {
    static defaultProps: Partial<ImageProps>;
    render(): JSX.Element;
    private getClasses();
}
