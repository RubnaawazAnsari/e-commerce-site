declare module 'react-image-magnify' {
    import * as React from 'react';

    interface SmallImage {
        alt: string;
        isFluidWidth?: boolean;
        width?: number;
        height?: number;
        src: string;
    }

    interface LargeImage {
        src: string;
        width: number;
        height: number;
    }

    interface ReactImageMagnifyProps {
        smallImage: SmallImage;
        largeImage: LargeImage;
        enlargedImageContainerStyle?: React.CSSProperties;
        lensStyle?: React.CSSProperties;
        isHintEnabled?: boolean;
        shouldHideHintAfterFirstActivation?: boolean;
        hintTextMouse?: string;
        hintTextTouch?: string;
    }

    const ReactImageMagnify: React.FC<ReactImageMagnifyProps>;

    export default ReactImageMagnify;
}
