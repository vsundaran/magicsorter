import React from "react";
import brandLogo from '../images/magic-sorter-860x200-1-removebg-preview.png';
import dot from '../images/lightDot.svg';
import avator from '../images/avator.png';
import { Fade } from "react-reveal";
import KidsStudyingfromHomecuate from '../svg/Kids Studying from Home-cuate.svg';
import KidsStudyingfromHomebro from '../svg/Kids Studying from Home-bro.svg';
import { Button, Capsule, Container, Flexbox, Footer,Footercard, Navbar, Wrapper } from "./elements";
import { Link } from "react-router-dom";

function SelectionSort(){
  let [sortedArray,setSortedArray] = React.useState("");
  let [twoDArray,setTwoDArray] = React.useState([]);
  let inputRef1 = React.useRef();
  let inputRef2 = React.useRef();
  let inputRef3 = React.useRef();
  let inputRef4 = React.useRef();
  let inputRef5 = React.useRef();
  let inputRef6 = React.useRef();
  let inputRef7 = React.useRef();
  let inputRef8 = React.useRef();
  let pusher = [];

  function selectionSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
      var minIndex = i;
      for (var j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
      pusher.push([...arr])
    }
    return arr;
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
    setSortedArray("");
    setTwoDArray([]);
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
    // sent this brr into selection sort function
    setSortedArray(selectionSort(brr).toString());
    setTwoDArray(pusher);
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
                    <span className='bold'>Selection Sort</span>
                    <p>Selection sort is a simple sorting algorithm that works by repeatedly selecting the smallest (or largest, depending on the sort order) element from the unsorted portion of the list and moving it to its correct position in the sorted portion of the list.Selection sort has a time complexity of O(n^2) which makes it inefficient for large data sets. It's best suited for small data sets or as an educational tool.<br/><br/>Like bubble sort, Selection sort can be used to sort elements in both ascending and descending order by changing the comparison operator used in the if statement.<br/><br/>It's also worth noting that, selection sort is not a stable sort algorithm, means it may change the relative order of elements with equal keys.</p>
                    </div>
                </Fade>
                <div className='video-container'>
                    <Fade right distance="20%" duration={500}>
                    <img className="sort-imag " src={KidsStudyingfromHomecuate}/>
                    </Fade>
                </div>
                </Flexbox>
            </Container>
            <Container className="my-3">
              <Fade left distance="20%" duration={500}>
                  <p className='card-name'>Selection Sort</p>
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
                      <p className="card-name asking-input answer">{sortedArray}</p>
                  </Flexbox>
              </Fade>
                <Flexbox space className="margin align-items-start ">
                    <Container className="left pb-4  pt-3">
                        <Fade left  distance="20%" duration={500}>
                            <div className="">
                                    <span className="card-name mb-1">Diagram :</span>
                                </div>
                            <img src="https://he-s3.s3.amazonaws.com/media/uploads/2888f5b.png" className="w-75 rounded"/>
                            <br></br>
                            <a href="https://replit.com/@SundaranV/BasicJealousDegree#index.js"  target="_blank"><Button className="px-2" code>I need Code</Button></a>
                       </Fade>
                    </Container>
                    <Container className="rigth p-3">
                        <Fade right  distance="20%" duration={500}>
                            <p className="card-name mb-3">Steps of algorithm</p>
                            <ol>
                                <li className="mb-2">Start at the first element of the list and consider it as the current minimum element.</li>
                                <li className="mb-2">Compare the current minimum element to all the other elements in the list. If there is any element smaller than the current minimum, set that element as the new minimum.When you have finished comparing all the elements, swap the current minimum element with the first element of the list.</li>
                                {
                                  twoDArray.map((item,i)=>{
                                    return(
                                      <li className="card-name mb-3">{i+1}st - {item.toString()}</li>
                                    )
                                  })
                                }
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

export default SelectionSort;