import { KettleBottom, KettleHandle, KettleLid, KettleLidHandle, KettleSpout, KettleTop, KettleWrapper } from "./Kettle.styles";

const Kettle = () => {
  
    return (
        <KettleWrapper>
            <KettleLidHandle/>
            <KettleLid/>
            <KettleSpout/>
            <KettleHandle/>
            <KettleTop/>
            <KettleBottom/>
        </KettleWrapper>
    )
  };
  
  export default Kettle;