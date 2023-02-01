import React from "react";
import brandLogo from '../images/magic-sorter-860x200-1-removebg-preview.png';
import dot from '../images/lightDot.svg';
import avator from '../images/avator.png';
import Takingnotesamico from '../svg/Taking notes-amico.svg';
import { Fade } from "react-reveal";
import Takingnotesbro from '../svg/Taking notes-bro.svg';
import { Button, Capsule, Container, Flexbox, Footer,Footercard, Navbar, Wrapper } from "./elements";
import { Link } from "react-router-dom";

function BucketSort(){
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

const bucketSort = arr => {
  if (arr.length === 0) {
    return arr;
  }
  let i,
    minValue = arr[0],
    maxValue = arr[0],
    bucketSize = 5;
  arr.forEach(function(currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  })
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let allBuckets = new Array(bucketCount);
  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }
  arr.forEach(function(currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });
  arr.length = 0;
  allBuckets.forEach(function(bucket) {
    insertion(bucket);
    bucket.forEach(function(element) {
      arr.push(element)
    });
  });
  return arr;
}
const insertion = arr => {
  let length = arr.length;
  let i, j;
  for (i = 1; i < length; i++) {
    let temp = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  pusher.push(arr)
  return arr;
};

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
    setTwoDArray([])
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
    // sent this brr into bucket sort function
    setSortedArray(bucketSort(brr).toString());
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
                    <span className='bold'>Bucket sort</span>
                    <p>Bucket sort is a sorting algorithm that works by distributing the elements of an array into a number of "buckets," and then sorting each bucket individually. The elements are then collected from the buckets in order to obtain a fully sorted array. It is similar to counting sort, but it can handle a wider range of input values.<br/><br/>It's worth noting that bucket sort is a distribution sort algorithm, which means that it distributes elements into different buckets and then sort each bucket. It's efficient when the input array has a relatively small range of values and when the number of buckets is larger than the average number of items per bucket.<br/><br/>Also, keep in mind that bucket sort is an efficient algorithm when the range of input values is not too large, otherwise it may require a lot of memory.</p>
                    </div>
                </Fade>
                <div className='video-container'>
                    <Fade right distance="20%" duration={500}>
                    <img className="sort-imag " src={Takingnotesbro}/>
                    </Fade>
                </div>
                </Flexbox>
            </Container>
            <Container className="my-3">
              <Fade left distance="20%" duration={500}>
                  <p className='card-name'>Bucket sort</p>
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
                            <img src="https://www.programiz.com/sites/tutorial2program/files/Bucket_2.png" className="w-75 rounded mt-2"/>
                            <br></br>
                            <a href="https://replit.com/@SundaranV/VividFoolhardyGlobalarrays#index.js"  target="_blank"><Button className="px-2 mt-2" code>I need Code</Button></a>
                       </Fade>
                    </Container>
                    <Container className="rigth p-3">
                        <Fade right  distance="20%" duration={500}>
                            <p className="card-name mb-3">Steps of algorithm</p>
                            <ol>
                                <li className="mb-2">Create an array of empty "buckets" (typically an array of linked lists) with a size equal to the range of input values. For example, if the input array contains integers between 0 and 9, you would create an array of 10 empty buckets.</li>
                                {
                                  twoDArray.map((item,i)=>{
                                    if(item.length != 0){
                                      return(
                                        <li>{i+1}st - {item.toString()}</li>
                                      )
                                    }
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

export default BucketSort;