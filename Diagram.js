import DiagramBar from './DiagramBar'


const Diagram = (props) => {

    const {dataSets} = props;

    return(
        <div>
            {dataSets.map((dataSet) =>{
             return <DiagramBar value={dataSet.value} maxValue={null} label={dataSet.label} key={dataSet.label}/>
            })}
        </div>
    )
}
export default Diagram;