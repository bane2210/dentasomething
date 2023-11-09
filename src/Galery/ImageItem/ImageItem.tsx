import React from "react";
import classes from "./ImageItem.module.css";

interface Props {
    src: string;
    alt: string;
    index: number;
    open: (isOpen: boolean, position: number) => void
}
const ImageItem: React.FC<Props> = ({src, alt, open, index}) => {
    return (
        <div className={classes.container} onClick={() => {
            open(true, index);
        }}>
            <img src={src} alt={alt} />
        </div>
    );
}

export default ImageItem;