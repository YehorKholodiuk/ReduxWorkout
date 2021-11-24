import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

function App(props) {
  return (
    <div className="App">
      {props.co}
    </div>
  );
}
const mapStateToProps = (state) =>({
  co:state.count
})

export default connect(mapStateToProps) (App);
