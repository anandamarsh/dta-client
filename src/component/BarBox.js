import React, {Component} from 'react';
import './BarBox.css';

/**
 * The BarBox is a collections of Progress Bars and Buttons, as per the interview question for DTA.
 * @see README.md for Component Design decisions
 */
class BarBox extends Component {

  constructor(props) {
    super(props);
    this.state = {...props.seed, selected:0};
  }

  buttonClicked(delta){
    this.setState({...this.state, bars:this.state.bars.map((v,i)=>i==this.state.selected?Math.max(v+delta,0):v)});
  }

  render() {
    return (
      <div className="BarBox">
        <div className="bars">
          {this.state.bars && this.state.bars.map((v,i) => <Bar key={i} value={v} selected={i==this.state.selected}/>)}
        </div>
        <select onChange={(e)=>this.setState({...this.state, selected:e.target.value})}>
          {this.state.bars && this.state.bars.map((v,i) => <option key={i} value={i}>Select Bar &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#{i}</option>)}
        </select>
        <div className="buttons">
          {this.state.buttons && this.state.buttons.map((v,i) => <Button key={i} value={v} buttonClicked={this.buttonClicked.bind(this)}/>)}
        </div>
      </div>
    );
  }

}

/**
 * Progress Bar is composed of two overlapping divs (base+progress) with a value caption.
 * Value of the bar can be altered by pressing a Button, hence, we save the state outside the component (hence stateless).
 */
const Bar = (props) => {
  const s = Math.min(props.value,100)*255/100;
  return <div className={`barContainer ${props.selected?'selected':''}`} style={{color:`rgb(${s},${s},${s})`}}>
    <div className='outerBar'>
      <div className='barValue'>{props.value}%</div>
      <div className='innerBar' style={{width: `${props.value}%`,
        background:props.value<100?`rgba(0,130,0,${Math.min(props.value/100,1)})`:'rgb(200,0,0)'}}>.</div>
    </div>
  </div>
}

/**
 * A Button bears a value, which gets applied to the selected Bar. Since the Button simply issues an action, it is stateless
 */
const Button = (props) => {
  return <div className="button" onClick={()=>props.buttonClicked(props.value)}>{props.value}</div>
}

export default BarBox;
