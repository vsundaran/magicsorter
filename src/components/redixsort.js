import React from "react";
import brandLogo from '../images/magic-sorter-860x200-1-removebg-preview.png';
import dot from '../images/lightDot.svg';
import avator from '../images/avator.png';
import { Fade } from "react-reveal";
import Takingnotescuate from '../svg/Taking notes-cuate.svg';
import Dictionary from '../svg/Dictionary-amico.svg';
import { Button, Capsule, Container, Flexbox, Footer,Footercard, Navbar, Wrapper } from "./elements";
import { Link } from "react-router-dom";

function RedixSort(){
  
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


function radixBucketSort(crr) {
  var idx1, idx2, idx3, len1, len2, radix, radixKey;
  var radices = {}, buckets = {}, num, curr;
  var currLen, radixStr, currBucket;

  len1 = crr.length;
  len2 = 10;  // radix sort uses ten buckets

  // find the relevant radices to process for efficiency        
  for (idx1 = 0; idx1 < len1; idx1++) {
    radices[crr[idx1].toString().length] = 0;
  }

  // loop for each radix. For each radix we put all the items
  // in buckets, and then pull them out of the buckets.
  for (radix in radices) {
    // put each array item in a bucket based on its radix value
    len1 = crr.length;
    for (idx1 = 0; idx1 < len1; idx1++) {
      curr = crr[idx1];
      // item length is used to find its current radix value
      currLen = curr.toString().length;
      // only put the item in a radix bucket if the item
      // key is as long as the radix
      if (currLen >= radix) {
        // radix starts from beginning of key, so need to
        // adjust to get redix values from start of stringified key
        radixKey = curr.toString()[currLen - radix];
        // create the bucket if it does not already exist
        if (!buckets.hasOwnProperty(radixKey)) {
          buckets[radixKey] = [];
        }
        // put the array value in the bucket
        buckets[radixKey].push(curr);
      } else {
        if (!buckets.hasOwnProperty('0')) {
          buckets['0'] = [];
        }
        buckets['0'].push(curr);
      }
    }
    // for current radix, items are in buckets, now put them
    // back in the array based on their buckets
    // this index moves us through the array as we insert items
    idx1 = 0;
    // go through all the buckets
    for (idx2 = 0; idx2 < len2; idx2++) {
      // only process buckets with items
      if (buckets[idx2] != null) {
        currBucket = buckets[idx2];
        // insert all bucket items into array
        len1 = currBucket.length;
        for (idx3 = 0; idx3 < len1; idx3++) {
          crr[idx1++] = currBucket[idx3];
        }
      }
    }
    buckets = {};
    pusher.push([...crr])
  }
  return crr;
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
  setTwoDArray([])
}

function sort(){
  let arr = [];
  console.log("iuygiu")
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
  // sent this brr into redix sort function
  setSortedArray(radixBucketSort(brr).toString());
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
                    <Link to="/Merge" className='link'><span className='tags'>Merge Sort</span></Link>  
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
                    <span className='bold'>Redix Sort</span>
                    <p>Radix sort is an efficient, non-comparative integer sorting algorithm that sorts data with integer keys by grouping the keys by the individual digits which share the same significant position and value. Radix sort works by sorting the elements in the list by first grouping them according to the least significant digit, then grouping them by the next digit, and so on, until all digits have been considered. Radix sort is an efficient algorithm for sorting a small number of integers (up to millions) that have a small number of digits and can be useful for sorting large lists of integers that have a fixed number of digits.<br/><br/>The basic idea behind radix sort is to take the input list of integers, and sort them based on each individual digit, starting with the least significant digit. This is done by first grouping the integers based on their least significant digit, then grouping them based on the next digit, and so on, until all digits have been considered. Once all digits have been considered, the integers will be in sorted order.</p>
                    </div>
                </Fade>
                <div className='video-container'>
                    <Fade right distance="20%" duration={500}>
                    <img className="sort-imag " src={Takingnotescuate}/>
                    </Fade>
                </div>
                </Flexbox>
            </Container>
            <Container className="my-3">
            <Fade left distance="20%" duration={500}>
                <p className='card-name'>Redix Sort</p>
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
                <Flexbox space className="margin align-items-start">
                    <Container className="left pb-4  pt-3">
                        <Fade left  distance="20%" duration={500}>
                            <div className="">
                                    <span className="card-name ml-auto">Diagram :</span>
                                </div>
                            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Radix-Sort-Soni/what-is-radix-sort-algorithm.png" className="w-75 rounded"/>
                            <br></br>
                            <a href="https://replit.com/@SundaranV/RipeBothInstitution#index.js"  target="_blank" code><Button className="px-2">I need Code</Button></a>
                       </Fade>
                    </Container>
                    <Container className="rigth p-3">
                        <Fade right  distance="20%" duration={500}>
                            <p className="card-name mb-3">Steps of algorithm</p>
                            <ol>
                               {
                                twoDArray.map((item,i)=>{
                                  return (
                                    <li>{i+1}st - {item.toString()}</li>
                                  )
                                })
                               }
                            </ol>
                            <p> Radix sort works by sorting the elements in the list by first grouping them according to the least significant digit, then grouping them by the next digit, and so on, until all digits have been considered. Radix sort is an efficient algorithm for sorting a small number of integers (up to millions) that have a small number of digits and can be useful for sorting large lists of integers that have a fixed number of digits.</p>
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

export default RedixSort;