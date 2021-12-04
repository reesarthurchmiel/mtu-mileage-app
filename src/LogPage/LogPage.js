import './LogPage.css';
import LineBox from './LineBox.js';

function LogPage() {
    return (
        //Flex the div
        <div className='logpage'>
            <LineBox />
            {/* <div className="summary">Summary</div> */}
        </div>
    );
}

export default LogPage;