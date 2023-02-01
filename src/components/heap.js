import React from "react";
import brandLogo from '../images/magic-sorter-860x200-1-removebg-preview.png';
import dot from '../images/lightDot.svg';
import avator from '../images/avator.png';
import { Fade } from "react-reveal";    
import rafiki from '../svg/Taking notes-rafiki.svg';

import { Button, Capsule, Container, Flexbox, Footer,Footercard, Navbar, Wrapper } from "./elements";
import { Link } from "react-router-dom";

function HeapSort(){
  let [sortedArray,setSortedArray] = React.useState("");
let inputRef1 = React.useRef();
let inputRef2 = React.useRef();
let inputRef3 = React.useRef();
let inputRef4 = React.useRef();
let inputRef5 = React.useRef();
let inputRef6 = React.useRef();
let inputRef7 = React.useRef();
let inputRef8 = React.useRef();




function clear(){
  inputRef1.current.value = ""
  inputRef2.current.value = ""
  inputRef3.current.value = ""
  inputRef4.current.value = ""
  inputRef5.current.value = ""
  inputRef6.current.value = ""
  inputRef7.current.value = ""
  inputRef8.current.value = ""
  setSortedArray("")
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
  // sent this brr into heap sort function
  let ans = brr.sort((a,b)=>a-b);
  setSortedArray(ans.toString());
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
                    <span className='bold'>Heap Sort</span>
                    <p>The basic idea behind heap sort is to first create a binary heap (usually implemented as a binary tree) from the input array, where each parent node is greater than or equal to its child nodes. Once the heap is created, the largest element (the root of the heap) is removed and placed at the end of the array. The remaining elements are then rearranged to maintain the heap property, and the process is repeated until the heap is empty and the array is sorted.<br/><br/>Heap sort has an average and worst-case time complexity of O(n log n), making it more efficient than bubble sort and insertion sort, but less efficient than quick sort and merge sort. However, heap sort has the advantage of being a stable sort, meaning that equal elements will maintain their relative order in the sorted output.</p>
                    </div>
                </Fade>
                <div className='video-container'>
                    <Fade right distance="20%" duration={500}>
                    <img className="sort-imag " src={rafiki}/>
                    </Fade>
                </div>
                </Flexbox>
            </Container>
            <Container className="my-3">
            <Fade left distance="20%" duration={500}>
                <p className='card-name'>Heap Sort</p>
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
                    <Button clear onClick={clear}>clear</Button>
                </div>
                <Flexbox>
                    <p className="card-name asking-input">Answer Of Your Array : </p>
                    <p className="card-name asking-input answer">{sortedArray}</p>
                </Flexbox>
            </Fade>
                <Flexbox space className="margin align-items-start">
                    <Container className="left pb-4  pt-3">
                        <Fade left  distance="20%" duration={500}>
                            <div className="">
                                    <span className="card-name ml-auto">Diagram :</span>
                                </div>
                            <img src="https://global-uploads.webflow.com/5d0dc87aac109e1ffdbe379c/60be35c5db7adf4d16e3d7f3_ZzgJzSvjWHACMEuhCgWYcrFVYuYFP8YVnugTBs53Ax6_tXi4CqBRFsCiooJcfXLQ8NKsfZ1v4VyCgEH0LlKXEt81WzVSSINUCM4GK6MtAzY3pL71a9eSRTeBSCnutyLkrhrNETSJ.png" className="w-75 rounded"/>
                            <br></br>
                            <a href="https://replit.com/@SundaranV/BitesizedRepentantFeed#index.js"  target="_blank" code><Button className="px-2">I need Code</Button></a>
                       </Fade>
                    </Container>
                    <Container className="rigth p-3">
                        <Fade right  distance="20%" duration={500}>
                            <p className="card-name mb-3">Steps of algorithm</p>
                            <ol>
                                <li className="mb-2">Build a max heap from the input data.</li>
                                <li className="mb-3">Swap the top element (maximum value) with the last element in the heap.</li>
                                <li className="mb-2">Reduce the size of the heap by one and heapify the root element.</li>
                                <li className="mb-2">Repeat steps 2 and 3 until the entire heap is sorted.</li>
                                
                            </ol>
                            <p>Heap sort has an average and worst-case time complexity of O(n log n), making it more efficient than bubble sort and insertion sort, but less efficient than quick sort and merge sort. However, heap sort has the advantage of being a stable sort, meaning that equal elements will maintain their relative order in the sorted output.</p>
    
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

export default HeapSort;