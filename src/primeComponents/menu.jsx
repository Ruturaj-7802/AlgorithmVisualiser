import React, {Component} from 'react';
import DiscreteSlider from "./slider";

class Menu extends Component {
    render() {
        return (
            <nav className="nav alert-dark">
            <div className='m-3'>
                <DiscreteSlider
                    onChange={this.props.onChangeSpeed}
                    title="speed"
                    marks={false}
                    default={10}
                    step={1}
                    min={10}
                    max={50}
                    isDisabled={false}
                />
            </div>

            <div className='m-3'>
                <DiscreteSlider
                    onChange={this.props.onChangeValues}
                    title="Total Number"
                    marks={false}
                    default={100}
                    step={1}
                    min={10}
                    max={500}
                    isDisabled={this.props.isDisabled}
                />
            </div>

                <button className='btn btn-secondary m-4' onClick={this.props.onRefresh} disabled={this.props.isDisabled} style={this.isClickable()}>Refresh</button>

                <button className="btn btn-warning btn m-4" onClick={this.props.onVisualize} disabled={this.props.isDisabled} style={this.isClickable()}>Visualize</button>


            </nav>
        );
    }
    isClickable = () =>{
        if( this.props.isDisabled ){
            return {cursor: "not-allowed"};
        } else{
            return {};
        }
    }
}

export default Menu;