import './common.css';
import Pages from './PagesEnum';

export default function Nav(props) {
    return (
        <nav className='nav'>
            <ul className='nav_ul'>
                <li className='nav_li'>
                    <button
                        className={'nav_button' + (props.selected === Pages.LOG_PAGE ? ' selected' : '')}
                        onClick={props.onLogClick}>
                        Log
                    </button>
                </li><li className='nav_li'>
                    <button
                        className={'nav_button' + (props.selected === Pages.PLACES_PAGE ? ' selected' : '')}
                        onClick={props.onPlacesClick}>
                        Places
                    </button>
                </li>
            </ul>
        </nav>
    );
}