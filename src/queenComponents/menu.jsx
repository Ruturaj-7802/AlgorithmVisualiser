import React, {Component} from 'react';
import DiscreteSlider from "./slider";



class Menu extends Component {
    render() {
        return (
            <>
            <nav className="nav alert-dark">
                

            <div className='m-3'>
                <DiscreteSlider
                        default={4}
                        min={1}
                        max={8}
                        step={1}
                        title="Grid size"
                        onCountChange={this.props.onCountChange}
                        disable={this.props.disable}

                    />
            </div>
               
            <div className='m-3'>
                <DiscreteSlider
                    default={50}
                    min={1}
                    max={100}
                    step={1}
                    title="Speed"
                    onCountChange={this.props.onSpeedChange}
                />
            </div>
                
                <button
                    className='btn btn-secondary m-4'
                    onClick={this.props.onClear}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                    Refresh
                </button>


                <button
                    className='btn btn-warning btn m-4'
                    onClick={this.props.onViusalize}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                    Visualize
                </button>
           
            </nav>
             <p className='p-3'><b>Note : Please Refresh after any change/execution</b></p>

             </>
        );
    }
    isClickable = () =>{
        if( this.props.disable ){
            return {cursor: "not-allowed"};
        } else{
            return {};
        }
    }
}


export default Menu;