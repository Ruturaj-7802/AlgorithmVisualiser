import React, {Component} from 'react';
// import '/Users/ghanashyam/react_project/my-react/src/sortComponents/style.css';
import '../sortComponents/style.css'
class Rect extends Component {

    render() {
        return (
            <div
                className='recta'
                style={{height:this.props.rect.width,
                    background:this.checkColor(),
                    margin:this.props.marg,
                    'vertical-align': 'middle'
                }}
            >
                
            </div>
        );
    }
    
    checkColor = () => {
        if( this.props.rect.isSorted ){
            return "green";
        } else if( this.props.rect.isSorting ){
            return "red";
        } else{
            return "black"
        }
    }
}

export default Rect;