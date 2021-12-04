import './common.css';

export default function Nav(props) {
    return (
        <nav className='nav'>
            <ul className='nav_ul'>
                <li className='nav_li'>
                    <button className={'nav_button' + (props.selected === 0 ? ' selected' : '')}>
                        Log
                    </button>
                </li><li className='nav_li'>
                    <button className={'nav_button' + (props.selected === 1 ? ' selected' : '')}>Places</button>
                </li>
            </ul>
        </nav>
    );
}