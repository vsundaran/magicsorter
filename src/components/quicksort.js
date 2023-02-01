import React, { createRef } from "react";
import brandLogo from '../images/magic-sorter-860x200-1-removebg-preview.png';
import dot from '../images/lightDot.svg';
import avator from '../images/avator.png';
import { Fade } from "react-reveal";
import KidsStudyingfromHomepana from '../svg/Kids Studying from Home-pana.svg';
import { Button, Capsule, Container, Flexbox, Footer,Footercard, Navbar, Wrapper } from "./elements";
import { Link } from "react-router-dom";

function Quicksort(){
  let [sortedArrayString,setSortedArrayString] = React.useState([]);
  let [pivoter,setPivot] = React.useState("");
  let [lefterArray,setLefterArray] = React.useState("");
  let [righterArray,setRighterArray] = React.useState("");
  let inputRef1 = React.useRef();
  let inputRef2 = React.useRef();
  let inputRef3 = React.useRef();
  let inputRef4 = React.useRef();
  let inputRef5 = React.useRef();
  let inputRef6 = React.useRef();
  let inputRef7 = React.useRef();
  let inputRef8 = React.useRef();

  let crr = [];
  let leftArray = [];
  let rightArray =[];

  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let pivot = arr[arr.length - 1];
    crr.push(pivot)
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    leftArray.push(left)
    rightArray.push(right)
    return quickSort(left).concat([pivot], quickSort(right));
  }
  
  function clear(){
    inputRef1.current.value = ""
    inputRef2.current.value = ""
    inputRef3.current.value = ""
    inputRef4.current.value = ""
    inputRef5.current.value = ""
    inputRef6.current.value = ""
    inputRef7.current.value = ""
    inputRef8.current.value = ""
    setPivot("");
    setLefterArray("");
    setRighterArray("");
    setSortedArrayString("");
    
  }

  function sort(){
    let arr = [];
    if(inputRef1.current.value != ""){
      arr.push(inputRef1.current.value)
    }
    if(inputRef2.current.value != ""){
      arr.push(inputRef2.current.value)
    }
    
    if(inputRef3.current.value != ""){
      arr.push(inputRef3.current.value)
    }
    
    if(inputRef4.current.value != ""){
      arr.push(inputRef4.current.value)
    }
    
    if(inputRef5.current.value != ""){
      arr.push(inputRef5.current.value)
    }
    
    if(inputRef7.current.value != ""){
      arr.push(inputRef7.current.value)
    }
    if(inputRef6.current.value != ""){
      arr.push(inputRef6.current.value)
    }
    if(inputRef8.current.value != ""){
      arr.push(inputRef8.current.value)
    }

    let brr = arr.map((a)=> parseInt(a));
    setSortedArrayString(quickSort(brr).toString());
    setPivot(crr.toString());
    setLefterArray(leftArray.toString());
    setRighterArray(rightArray.toString());
}
    return(
        <Wrapper>
           <Navbar>
                <Fade top distance="20%" duration={500}>
                <Flexbox>
                    <img className='brandLogo' src={brandLogo}/>
                    <Link to="/bubble" className='link'><span className='tags'>Bubble Sort</span></Link>  
                    <img src = {dot} className="dot"/>
                    <Link to="/Insertion" className='link'><span className='tags'>Insertion Sort</span></Link>  
                    <img src = {dot} className="dot"/>
                    <Link to="/merge" className='link'><span className='tags'>Merge Sort</span></Link>  
                </Flexbox>
                    <img className='avator' src={avator}/>
                </Fade>
            </Navbar>
            <Flexbox center wrap className="m-3">
                <Fade top distance="20%" duration={1000}>
                  <Link to="/merge" className='link'><Capsule>merge</Capsule></Link>
                  <Link to="/quick" className='link'><Capsule>Quick</Capsule></Link>
                  <Link to="/selection" className='link'><Capsule>Selection</Capsule></Link>
                  <Link to="/bubble" className='link'><Capsule>Bubble</Capsule></Link>
                  <Link to="/Insertion" className='link'><Capsule>Insertion</Capsule></Link>
                  <Link to="/count" className='link'><Capsule>Count</Capsule></Link>
                  <Link to="/redix" className='link'><Capsule>Redix</Capsule></Link>
                  <Link to="/bucket" className='link'><Capsule>Bucket</Capsule></Link>
                  <Link to="/heap" className='link'><Capsule>Heap</Capsule></Link>
                </Fade>
            </Flexbox>
            <Container className=" h-50">
                <Flexbox center top >
                <Fade left  distance="20%" duration={500}>
                    <div className='left-space  mt-4'>
                    <span className='bold'>Quick Sort</span>
                    <p>Quick sort is a sorting algorithm that works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The pivot element is then in its final position, and the same process is recursively applied to the sub-arrays on either side of the pivot.<br/><br/>Quick sort has an average time complexity of O(n*log(n)), which makes it much more efficient than bubble sort and selection sort for large data sets. The worst-case time complexity is O(n^2) which could happen when the pivot is always either the smallest or the largest element, so it is important to choose a good pivot.</p>
                    </div>
                </Fade>
                <div className='video-container'>
                    <Fade right distance="20%" duration={500}>
                    <img className="sort-imag " src={KidsStudyingfromHomepana}/>
                    </Fade>
                </div>
                </Flexbox>
            </Container>
            <Container className="my-3">
              <Fade left distance="20%" duration={500}>
                  <p className='card-name'>Quick Sort</p>
                  <div className="margin">
                    <span className="card-name asking-input">Post Your Array : </span>
                    <input ref={inputRef1} type="number" className="input-box"/>
                    <input ref={inputRef2} type="number" className="input-box"/>
                    <input ref={inputRef3} type="number" className="input-box"/>
                    <input ref={inputRef4} type="number" className="input-box"/>
                    <input ref={inputRef5} type="number" className="input-box"/>
                    <input ref={inputRef6} type="number" className="input-box"/>
                    <input ref={inputRef7} type="number" className="input-box"/>
                    <input ref={inputRef8} type="number" className="input-box"/>
                    <Button sort onClick={sort}>Sort</Button>
                    <Button sort onClick={clear} clear>Clear</Button>
                  </div>
                  <Flexbox>
                      <p className="card-name asking-input">Answer Of Your Array : </p>
                      <p className="card-name asking-input answer">{sortedArrayString}</p>
                  </Flexbox>
              </Fade>
                <Flexbox space className="margin align-items-start ">
                    <Container className="left pb-4  pt-3">
                        <Fade left  distance="20%" duration={500}>
                            <div className="">
                                    <span className="card-name">Diagram :</span>
                                </div>
                            <img src="https://miro.medium.com/max/640/0*Yk4FBUo_6rJri_ZC.webp" className="w-75 rounded mt-4"/>
                            <br></br>
                            <a href="https://replit.com/@SundaranV/InfamousNavyblueSimulation#index.js"  target="_blank"><Button className="px-2 mt-5" code>I need Code</Button></a>
                       </Fade>
                    </Container>
                    <Container className="rigth p-3">
                        <Fade right  distance="20%" duration={500}>
                            <p className="card-name mb-3">Steps of algorithm</p>
                            <ol>
                                <li className="mb-2">Choose a "pivot" element from the array. This element will be used to partition the other elements into two sub-arrays.</li>
                                <li className="mb-2 card-name">Pivot : {pivoter}</li>
                                <li className="mb-2">Divide the array into two sub-arrays: one containing elements less than the pivot, and the other containing elements greater than the pivot.</li>
                                <li className="mb-2">Move all elements less than the pivot to the left of the pivot and all elements greater than the pivot to the right of the pivot. The pivot is now in its final position.</li>
                                <li className="mb-2 card-name">Left Sorted Array : {lefterArray}</li>
                                <li className="mb-2 card-name">Right Sorted Array : {righterArray}</li>
                                <li className="mb-2">Recursively apply the above steps to the sub-arrays on either side of the pivot until the entire array is sorted.</li>
                                <li className="mb-2">The partition function is called recursively by the quickSort function, in each call it will choose the pivot, partition the array and swap the pivot element with the right-most element in the left partition, then it will recursively call the quickSort on the left partition and right partition.</li>
                                <li className="mb-2">The base case is when the low pointer is greater or equal to the high pointer, then the function will return.</li>
                            </ol>
                            
                            
                        </Fade>
                    </Container>
                </Flexbox>
            </Container>
            <Footer>
          <Footercard>
            <img className='footerLogo' src={avator}/>
          </Footercard>
          <Footercard>
            <p className='thanks'>WEEBLY THEMES</p>
            <p className='thanks'>PRE-SALE FAOS</p>
            <p className='thanks'>SUBMIT A TICKET</p>
          </Footercard>
          <Footercard>
            <p className='thanks'>SERVICES</p>
            <p className='thanks'>THEME TWEAK</p>
          </Footercard>
          <Footercard>
            <p className='thanks'>SERVICES</p>
            <p className='thanks'>WIDGETKIT</p>
            <p className='thanks'>SUPPORT</p>
          </Footercard>
          <Footercard>
            <p className='thanks'>LINKED IN</p>
            <p className='thanks'>INSTAGRAM</p>
            <p className='thanks'>FACEBOOK</p>
            <p className='thanks'>WHATSAPP</p>
          </Footercard>
          <Footercard>
            <p className='thanks'>ABOUT US</p>
            <p className='thanks'>CONTACT US</p>
            <p className='thanks'>AFFILIATES</p>
            <p className='thanks'>RESOURCES</p>
          </Footercard>
      </Footer>
      <Fade bottom>
        <center>
            <div className='line-content'>
              <div className='line'></div>
              <div className='flex'>
                <span class="material-symbols-outlined symbol">copyright</span>
                <span className='symbol'>Copyright | 2023 Magic Sorter All rights reserved</span>
              </div>
            </div>
        </center>
        <Footer short></Footer>
      </Fade>
        </Wrapper>
    )
}

export default Quicksort;