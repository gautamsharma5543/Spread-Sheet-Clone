import React from 'react';

const Toolbar: React.FC = () => {
    const handleSave = () => {
        // Logic to save the spreadsheet
    };

    const handleFormatBold = () => {
        // Logic to format selected cells as bold
    };

    const handleFormatItalic = () => {
        // Logic to format selected cells as italic
    };

    const handleFunctionInsert = (func: string) => {
        // Logic to insert a function into the formula bar
    };

    return (
        <div className="toolbar">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleFormatBold}>Bold</button>
            <button onClick={handleFormatItalic}>Italic</button>
            <button onClick={() => handleFunctionInsert('SUM')}>SUM</button>
            <button onClick={() => handleFunctionInsert('AVERAGE')}>AVERAGE</button>
            <button onClick={() => handleFunctionInsert('MAX')}>MAX</button>
            <button onClick={() => handleFunctionInsert('MIN')}>MIN</button>
            <button onClick={() => handleFunctionInsert('COUNT')}>COUNT</button>
          
        </div>
    );
};

export default Toolbar;