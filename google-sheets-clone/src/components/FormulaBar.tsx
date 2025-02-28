import React, { useState } from 'react';

const FormulaBar: React.FC<{ onFormulaChange: (formula: string) => void }> = ({ onFormulaChange }) => {
    const [formula, setFormula] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormula(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onFormulaChange(formula);
            setFormula('');
        }
    };

    return (
        <div className="formula-bar">
            <input
                type="text"
                value={formula}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter formula..."
            />
        </div>
    );
};

export default FormulaBar;