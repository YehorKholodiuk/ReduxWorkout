import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {useState} from "react";

function App(props) {

const [step,setStep] = useState(1)
    const stepOnchange = (e) => {
    setStep(Number(e.target.value))
    };
    return (
        <div className="App">
            <input type='number' value={step} onChange={stepOnchange}/>

            <button onClick={() => props.plus(step)}>Plus</button>
            {props.co}
            <button onClick={() => props.minus(step)}>Minus</button>

        </div>
    );
}

const mapStateToProps = (state) => ({
    co: state.count
})

const mapDispatchToProps = dispatch => ({
    plus: (step) => dispatch({type: "PLUS",payload:step}),
    minus: (step) => dispatch({type: "MINUS",payload:step}),

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
