import React from 'react';
import Cell from './Cell';

interface RowProps {
    rowIndex: number;
    cells: (string | number)[];
    onCellChange: (rowIndex: number, colIndex: number, value: string | number) => void;
}

const Row: React.FC<RowProps> = ({ rowIndex, cells, onCellChange }) => {
    return (
        <div>
            {cells.map((cellValue, cellIndex) => (
                <Cell
                    key={cellIndex}
                    value={cellValue}
                    onChange={(value) => onCellChange(rowIndex, cellIndex, value)}
                />
            ))}
        </div>
    );
};

export default Row;