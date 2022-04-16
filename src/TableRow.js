import {useState} from "react";

export default function TableRow(props) {

    const [value, setValue] = useState(0);

    const updateInputValue = (e) => {
        const val = e.target.value;

        props.onChange(val);

        setValue(val);
    };

    return (
        <tr>
            <td>{props.title}</td>
            <td>
                <input type="number" value={value} onChange={updateInputValue}  /> mm
            </td>
        </tr>
    );

}