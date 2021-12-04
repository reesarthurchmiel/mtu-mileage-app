import Header from './Header.js';
import Nav from './Nav.js';

import LogPage from './LogPage/LogPage.js'

function App() {
    return (
        <>
            <Header />
            <Nav selected={0} />
            <LogPage />
        </>
    )
};

export default App;