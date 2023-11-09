import React from "react";
import classes from "./TestimonialItem.module.css";
import StarIcon from '@mui/icons-material/Star';

type Props = {
    name: string;
    text: string;
}

const TestimonialItem: React.FC<Props> = ({name, text}) => {
    return (
        <div className={classes.container}>
            <div className={classes.name}>{name}</div>
            <cite className={classes.text}>{text}</cite>    
            <div className={classes.stars}>
                <StarIcon fontSize="inherit" color="inherit" />
                <StarIcon fontSize="inherit" color="inherit" />
                <StarIcon fontSize="inherit" color="inherit" />
                <StarIcon fontSize="inherit" color="inherit" />
                <StarIcon fontSize="inherit" color="inherit" />
            </div>
            
        </div>
    );
}

export default TestimonialItem;