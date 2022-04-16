import results from './results.txt'
import {useEffect, useState} from "react";

//Mock results of the printing
export default function MockResults(props) {

    const delay = 1000;
    const results = [
        "Pass 1: X-Axis Begin 40mm  X-Axis End 80mm Y-Axis Begin 30mm Y-Axis End 70mm Height 1mm",
        "Pass 2: X-Axis Begin 41mm  X-Axis End 80mm Y-Axis Begin 30mm Y-Axis End 71mm Height 1mm",
        "Pass 3: X-Axis Begin 40mm  X-Axis End 80mm Y-Axis Begin 31mm Y-Axis End 70mm Height 1mm",
        "Pass 4: X-Axis Begin 40mm  X-Axis End 81mm Y-Axis Begin 30mm Y-Axis End 70mm Height 1mm",
        "Pass 5: X-Axis Begin 40mm  X-Axis End 80mm Y-Axis Begin 31mm Y-Axis End 71mm Height 1mm",
        "Pass 6: X-Axis Begin 41mm  X-Axis End 80mm Y-Axis Begin 30mm Y-Axis End 70mm Height 1mm",
        "Pass 7: X-Axis Begin 42mm  X-Axis End 80mm Y-Axis Begin 30mm Y-Axis End 70mm Height 1mm",
        "Error Encountered During Print. X-Axis Begin > 2mm preset variance limit."
    ];
    const colors = [
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "red",
        "red"
    ];

    let [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval((e) => {
            setProgress(progress => progress+1);

            if(progress >= results.length - 1) {
                clearInterval(timer);
            }
        }, delay);

        //On component unmount
        return () => clearInterval(timer);
    }, []);



    //Looping in JSX is a little ugly.
    return (
        <div>
            <button style={{marginBottom:30}} onClick={props.onClose}>X</button>
            {results.map(((el, i) => {
                return (<h2 style={{color: colors[i], visibility: (progress >= i ? "visible" : "hidden")}} key={i}>{results[i]}</h2>)
            }))}
        </div>
    );
}