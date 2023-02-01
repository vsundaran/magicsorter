import React from "react";
import brandLogo from '../images/magic-sorter-860x200-1-removebg-preview.png';
import dot from '../images/lightDot.svg';
import avator from '../images/avator.png';
import { Fade } from "react-reveal";
import Dictionary from '../svg/Dictionary-amico.svg';
import { Button, Capsule, Container, Flexbox, Footer,Footercard, Navbar, Wrapper } from "./elements";
import { Link } from "react-router-dom";

function Mergesort(){
  let [answerArray,setAnswerArray] = React.useState("");
    let [dividedArray,setDividedArray] = React.useState("");
    let [combaineArray,setCombaineArray] = React.useState("");
    let inputRef1 = React.useRef();
    let inputRef2 = React.useRef();
    let inputRef3 = React.useRef();
    let inputRef4 = React.useRef();
    let inputRef5 = React.useRef();
    let inputRef6 = React.useRef();
    let inputRef7 = React.useRef();
    let inputRef8 = React.useRef();
    function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }
      
        let middle = Math.floor(arr.length / 2);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle);
      
        left = mergeSort(left);
        right = mergeSort(right);
      
        return merge(left, right);
      }

      function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
      
        while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
          } else {
            result.push(right[rightIndex]);
            rightIndex++;
          }
        }
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
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
        let brr = [];
        setDividedArray(arr.toString().trim());
        let ans = arr.sort((a,b)=>a-b);
        setAnswerArray(ans.toString());
        setCombaineArray(ans.toString());

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
      setAnswerArray("")
      setDividedArray("")
      setCombaineArray("")
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
                    <span className='bold'>Merge Sort</span>
                    <p>Merge sort is a sorting algorithm that uses a divide and conquer strategy to sort an array or a list of items. It works by dividing the array into two equal parts, then recursively sorting each half, and finally merging the two sorted halves back together. The merge step involves comparing each element of the two sorted halves and choosing the smaller one to add to the final sorted array. Merge sort has a time complexity of O(n log n) and is a stable sort, meaning that the relative order of elements with the same value is preserved.It uses two helper functions mergeSort() and merge() to divide and merge the array respectively. The mergeSort() function keeps on dividing the array into subarrays until it reaches the base case of an array of length 1 which is already sorted. The merge() function takes two sorted arrays as input and merge them in a sorted manner. This is an efficient and optimized version of merge sort and it's time complexity is O(n log n) which is the best possible time complexity for comparison-based sorting algorithms.</p>
                    </div>
                </Fade>
                <div className='video-container'>
                    <Fade right distance="20%" duration={500}>
                    <img className="sort-imag " src={Dictionary}/>
                    </Fade>
                </div>
                </Flexbox>
            </Container>
            <Container className="my-3">
            <Fade left distance="20%" duration={500}>
                <p className='card-name'>Merge Sort</p>
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
                    <p className="card-name asking-input answer">{answerArray}</p>
                </Flexbox>
            </Fade>
                <Flexbox space className="margin align-items-start">
                    <Container className="left pb-4  pt-3">
                        <Fade left  distance="20%" duration={500}>
                            <div className="">
                                    <span className="card-name ml-auto">Diagram :</span>
                                </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg" className="w-75 rounded"/>
                            <br></br>
                            <a href="https://replit.com/@SundaranV/CluelessFrizzyConnection#index.js"  target="_blank" code><Button className="px-2">I need Code</Button></a>
                       </Fade>
                    </Container>
                    <Container className="rigth p-3">
                        <Fade right  distance="20%" duration={500}>
                            <p className="card-name mb-3">Steps of algorithm</p>
                            <ol>
                                <li className="mb-2">Divide: If the input array has fewer than two elements, return the array as it is already sorted. If the array has more than one element, divide the array into two equal-sized subarrays (or as close as possible)</li>
                                <li className="mb-2">Conquer: Recursively apply the merge sort algorithm to each of the two subarrays.</li>
                                <li className="card-name mb-3">Dividede Array : {dividedArray}</li>
                                <li className="mb-2">Combine: Merge the two sorted subarrays back together by comparing the first elements of each subarray and taking the smaller element, then adding it to a new, merged array. Repeat this process until one subarray is completely empty, at which point the remaining elements from the other subarray are simply added to the merged array.</li>
                                <li className="mb-2">Repeat: Repeat the above steps until the input array is completely sorted in ascending order.</li>
                                <li className="mb-2 card-name">Combine Array : {combaineArray}</li>
                            </ol>
                            <p>It's an efficient, general-purpose, comparison-based sorting algorithm. It's a stable sort, which means that it preserves the input order of equal elements in the sorted output.</p>
                            <p>The time complexity of merge sort is O(nlogn) in both best and worst cases. In terms of space complexity, it requires additional O(n) space to store the auxiliary array during the merging process.</p>
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

export default Mergesort;