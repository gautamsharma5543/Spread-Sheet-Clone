import React, { useState } from 'react';
import Row from './Row';
import './Spreadsheet.css';

const Spreadsheet: React.FC = () => {
    const [data, setData] = useState(Array(100).fill(Array(26).fill('1')));

    const handleCellChange = (rowIndex: number, colIndex: number, value: string | number) => {
        const newData = data.map((row, rIndex) =>
            rIndex === rowIndex ? row.map((cell: any, cIndex: number) => (cIndex === colIndex ? value : cell)) : row
        );
        setData(newData);
    };

    const renderRows = () => {
        return data.map((row, rowIndex) => (
            <Row key={rowIndex} rowIndex={rowIndex} cells={row} onCellChange={handleCellChange} />
        ));
    };

    return <div className="spreadsheet">{renderRows()}</div>;
};

export default Spreadsheet;