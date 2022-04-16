import './App.css'
import {Container, Button, Table} from 'react-bootstrap'
import TableRow from "./TableRow";
import {useState} from "react";
import CubePreview from "./CubePreview";
import Modal from 'react-modal'
import MockResults from "./MockResults";

Modal.setAppElement("#root")

function App() {

    const [xSize, setXSize] = useState(0);
    const [ySize, setYSize] = useState(0);
    const [xStart, setXStart] = useState(0);
    const [xEnd, setXEnd] = useState(0);
    const [yStart, setYStart] = useState(0);
    const [yEnd, setYEnd] = useState(0);
    const [heightStart, setHeightStart] = useState(0);
    const [heightEnd, setHeightEnd] = useState(0);

    const [resultsOpen, setResultsOpen] = useState(false);


    return (
        <div className="container">

            <h2>Print Plane</h2>

            <Table striped bordered hover>
                <tbody>

                <TableRow title="X-Axis" onChange={v => setXSize(v)}/>
                <TableRow title="Y-Axis" onChange={v => setYSize(v)} />

                </tbody>
            </Table>

            <h2>Print Coordinates</h2>
            <Table striped bordered hover>
                <tbody>

                <TableRow title="X-Axis Begin" onChange={v => setXStart(v)}/>
                <TableRow title="X-Axis End" onChange={v => setXEnd(v)}/>
                <TableRow title="Y-Axis Begin" onChange={v => setYStart(v)} />
                <TableRow title="Y-Axis End" onChange={v => setYEnd(v)} />
                <TableRow title="Height Begin" onChange={v => setHeightStart(v)} />
                <TableRow title="Height End" onChange={v => setHeightEnd(v)} />

                </tbody>
            </Table>

            <Button onClick={e => setResultsOpen(true)}>Begin Print</Button>

            <CubePreview length={xEnd-xStart} width={yEnd-yStart} height={heightEnd-heightStart} />

            <Modal isOpen={resultsOpen}>
                <MockResults onClose={() => setResultsOpen(false)}/>
            </Modal>

        </div>
    );
}

export default App;
