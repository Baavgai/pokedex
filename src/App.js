import React from 'react';
import { CardContainer} from './components/CardContainer';

const App = () =>
    <div className="main-container">
        <CardContainer limit={100} />
    </div>
    ;

export default App;
