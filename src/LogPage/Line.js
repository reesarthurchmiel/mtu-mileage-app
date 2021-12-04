import {format} from 'date-fns';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: 0,
        backgroundColor: "var(--background)",
        width: "100%",
        height: "100%",
    }),

    container: (provided) => ({
        ...provided,
        width: "100%",
        height: "100%",
    })
}

export default function Line(props) {
    return (
        <>
            <div className=''>
                {format(props.date, "EEEE',' do")}
            </div>
            <div className='linebox_cell-no-padding'>
                <Select styles={customStyles} options={[{value: "langstone", label: "Langstone"}]} isClearable={true} />
            </div>
        </>
    );
}