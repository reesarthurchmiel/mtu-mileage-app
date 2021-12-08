import './LogPage.css';
import LogBox from './LogBox.js';

function LogPage() {
    return (
        //Flex the div
        <div className='logpage'>
            <LogBox />
            {/* <div className="summary">Summary</div> */}
        </div>
    );
}

export default LogPage;