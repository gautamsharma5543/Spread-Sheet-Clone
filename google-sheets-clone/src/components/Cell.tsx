import React, { useState } from 'react';

interface CellProps {
    value: string | number;
    onChange: (value: string | number) => void;
}

const Cell: React.FC<CellProps> = ({ value, onChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cellValue, setCellValue] = useState(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCellValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={cellValue}
                    onChange={handleChange}
                    onBlur={() => setIsEditing(false)}
                />
            ) : (
                <div onClick={() => setIsEditing(true)}>{cellValue}</div>
            )}
        </div>
    );
};

export default Cell;