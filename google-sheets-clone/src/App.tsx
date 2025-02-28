import React from 'react';
import Toolbar from './components/Toolbar';
import FormulaBar from './components/FormulaBar';
import Spreadsheet from './components/Spreadsheet';

const App: React.FC = () => {
    return (
        <div className="app">
            <Toolbar />
            <FormulaBar onFormulaChange={(formula: string) => console.log(formula)} />
            <Spreadsheet />

        </div>
    );
};

export default App;