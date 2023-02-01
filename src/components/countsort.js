import React from "react";
import brandLogo from '../images/magic-sorter-860x200-1-removebg-preview.png';
import dot from '../images/lightDot.svg';
import avator from '../images/avator.png';
import Takingnotesamico from '../svg/Taking notes-amico.svg';
import { Fade } from "react-reveal";
import { Button, Capsule, Container, Flexbox, Footer,Footercard, Navbar, Wrapper } from "./elements";
import { Link } from "react-router-dom";

function CountSort(){
  let [sortedArray,setSortedArray] = React.useState("");
  let [rangeArr,setRangeArr] = React.useState([]);
  let [frequencyArr,setFrequencyArr] = React.useState([]);
  let [frequencySumArr,setFrequencySumArr] = React.useState([]);
  let [sortedArray1,setSortedArray1] = React.useState([]);

  let inputRef1 = React.useRef();
  let inputRef2 = React.useRef();
  let inputRef3 = React.useRef();
  let inputRef4 = React.useRef();
  let inputRef5 = React.useRef();
  let inputRef6 = React.useRef();
  let inputRef7 = React.useRef();
  let inputRef8 = React.useRef();


  function countSort(arr) {


    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let range = max - min + 1;
    let freq = new Array(range).fill(0);
  
    setRangeArr(freq);
  
    // finding the frequency
    for (let i = 0; i < arr.length; i++) {
      let index = arr[i];
      freq[index - 1] = freq[index - 1] + 1;
    }

    setFrequencyArr(freq)
  
    // finding the frequency
    for (let i = 1; i < freq.length; i++) {
      freq[i] = freq[i - 1] + freq[i];
    }
  
    setFrequencySumArr(freq);
  
    // comparison
    let result = new Array(arr).fill(0);
  
    for (let i = 0; i < arr.length; i++) {
      let fI = arr[i] - 1;
      let aI = freq[fI];
  
      result[aI - 1] = arr[i];
      freq[fI] = freq[fI] - 1;
    }
    setSortedArray1(result)

    return result;
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
    setSortedArray("")
    setRangeArr([])
    setFrequencyArr([])
    setFrequencySumArr([])
    setSortedArray1([])
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
    // sent this brr into count sort function
    setSortedArray(countSort(brr).toString());
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
                    <span className='bold'>Count sort</span>
                    <p>Counting sort is a sorting algorithm that works by counting the number of occurrences of each element in the input array, and then using that information to place each element in the correct position in the output array. It is an efficient algorithm for sorting arrays with a small range of values, for example, integers between 0 and K for some small value of K.<br/><br/>It's worth noting that counting sort is a stable sorting algorithm, meaning it preserves the relative order of elements with equal keys. Also, counting sort is an efficient algorithm when the range of input values is small, otherwise it may require a lot of memory.<br/><br/>Also, keep in mind that counting sort only works when the range of input values is known and small, and when the values are non-negative integers.</p>
                    </div>
                </Fade>
                <div className='video-container'>
                    <Fade right distance="20%" duration={500}>
                    <img className="sort-imag " src={Takingnotesamico}/>
                    </Fade>
                </div>
                </Flexbox>
            </Container>
            <Container className="my-3">
              <Fade left distance="20%" duration={500}>
                  <p className='card-name'>Count sort</p>
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
                                    <span className="card-name">Diagram :</span>
                                </div>
                            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Counting-Sort-Algorithm-Soni/example-of-counting-sort-algorithm5png.png" className="w-75 rounded mt-2"/>
                            <br></br>
                            <a href="https://replit.com/@SundaranV/EmbellishedCooperativeSpools#index.js"  target="_blank"><Button className="px-2 mt-2" code>I need Code</Button></a>
                       </Fade>
                    </Container>
                    <Container className="rigth p-3">
                        <Fade right  distance="20%" duration={500}>
                            <p className="card-name mb-3">Steps of algorithm</p>
                            <ol>
                                <li className="mb-2">Create an auxiliary array (count) of size K (K is the range of input values) to store the count of each element in the input array. For example, if the input array contains integers between 0 and 9, the auxiliary array should have 10 elements.</li>
                                <li className="card-name mb-3">Renge Array : {rangeArr.toString()}</li>
                                <li className="card-name mb-3">Frequency Array : {frequencyArr.toString()}</li>
                                <li className="card-name mb-3">Frequency Sum Array : {frequencySumArr.toString()}</li>
                                <li className="card-name mb-3">Frequency Sum Array : {sortedArray1.toString()}</li>
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

export default CountSort;