import React from "react";
import Star from "./Star";
import "./Stars.css";

interface StarsProps {
    count?: number;
    }

    const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
    if (!count || count < 1 || count > 5) return null;

    return (
        <ul className="card-body-stars u-clearfix">
        {Array.from({ length: count }, (_, i) => (
            <Star key={i} />
        ))}
        </ul>
    );
};

export default Stars;
