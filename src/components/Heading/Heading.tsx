import React from "react";
import styles from './Heading.module.scss'

interface HeadingProps {
    text: string;
}

const Heading: React.FC<HeadingProps> = ({text}: HeadingProps) => {
    return(
        <div className={styles.heading}>
            {text}
        </div>
    )
};

export default Heading;