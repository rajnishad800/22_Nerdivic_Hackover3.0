import "./style.css";
import Cardelement from "./Cardelement";

function Grid(){
    return(<>
    <div class="container m-2">
      <div class="row">
        <Cardelement/>
        <Cardelement/>
        <Cardelement/>
        <Cardelement/>
        <Cardelement/>
      </div>
      </div>
    </>)
}

export default Grid;