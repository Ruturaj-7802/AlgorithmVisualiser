import React from 'react'
import Sort from '../images/icons/sorting.png'
import Prime from '../images/icons/prime_no.png'
import Queen from '../images/icons/queen.png'
import {Link} from "react-router-dom";

function banner2() {
  return (
    <div>
     <div class=" text-black text-center justify-content-">
     <h1 className='algo'>ALGORITHMS</h1>
     <div className="cardcontainer">
        
            <Link className='link' to="/sort">
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Sort} alt="" />
                        <h2>Sort</h2>
                        <p>Selection , Bubble , Insertion , Quick</p> 
                    </div>
                    </div>  
            </Link>

            <Link className='link' to={"/recursivesort"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Sort} alt="" />
                        <h2>Recursive Sort</h2>
                       <p>Merge , Heap </p>
                      
                    </div>
                    </div>  
            </Link>

            <Link className='link' to={"/prime"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Prime} alt="" />
                        <h2>Prime</h2>
                        <p>Seive of Erothesis</p>
                    </div>
                    </div>  
            </Link>

            <Link className='link' to={"/nqueen"}>
                <div className="card2">
                    <div className="content">
                        <img className='image ' src={Queen} alt="" />
                        <h2>N queen</h2>
                    </div>
                </div>  
            </Link>
    </div>
    </div>
    </div>
   
 
  )
}

export default banner2