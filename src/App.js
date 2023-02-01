import brandLogo from './images/magic-sorter-860x200-1-removebg-preview.png';
import avator from './images/avator.png';
import dot from './images/lightDot.svg';
import Dictionary from './svg/Dictionary-amico.svg';
import DictionaryRafiki from './svg/Dictionary-rafiki.svg';
import KidsStudyingfromHomebro from './svg/Kids Studying from Home-bro.svg';
import KidsStudyingfromHomecuate from './svg/Kids Studying from Home-cuate.svg';
import KidsStudyingfromHomepana from './svg/Kids Studying from Home-pana.svg';
import Takingnotesamico from './svg/Taking notes-amico.svg';
import Takingnotesbro from './svg/Taking notes-bro.svg';
import Takingnotescuate from './svg/Taking notes-cuate.svg';
import Takingnotesrafiki from './svg/Kids Studying from Home-pana.svg';
import rafiki from './svg/Taking notes-rafiki.svg';
import { Absolutebox, Button, Card, Container, Flexbox, Footer, Footercard, Gridbox, Navbar, RightFlexBox, Verticalnavbar, Wrapper } from './components/elements';
import './App.css';
import Fade from 'react-reveal/Fade';
import Mergesort from './components/mergeSort';
import { Link } from 'react-router-dom';


function App() {
  return (
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
      <Container>
        <Flexbox center>
          <Fade left  distance="20%" duration={500}>
            <div className='left-space'>
              <span className='bold'>Free magic sorter and execution <svg className='wave' width="35" height="6" xmlns="http://www.w3.org/2000/svg" class="Cardstyles__SVG-sc-y20u8f-1 fVNKUh"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#a55eea"></stop><stop offset="100%" stop-color="#a55eea"></stop></linearGradient></defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path></svg> code.Treendy.Cover 10 methods of sorting.</span>
              <p>The time complexity of sorting algorithms can vary widely, with some algorithms having a<b> best-case time complexity of O(n log n)</b>, while others have a <b> worst-case time complexity of O(n^2)</b>. The choice of sorting algorithm will depend on the specific use case, such as the amount of data to be sorted and the requirements for stability and memory usage.</p>
            </div>
          </Fade>
          <div className='video-container'>
            <Fade right distance="20%" duration={500}>
              <video className='videosvg' autoplay="autoplay" muted="muted" loop="loop" data-v-4f5891ea=""><source src="https://maxst.icons8.com/vue-static/ouch/video/promo.mp4" type="video/mp4" data-v-4f5891ea=""/><p data-v-4f5891ea="">Your browser doesn't support HTML5 video</p></video>
            </Fade>
          </div>
        </Flexbox>
      </Container>
      <Container>
        <Gridbox>
          <Fade top distance="20%" duration={500}>
          <Link to="/Merge" className='link'>
            <Card>
              <img src={Dictionary}/>
              <p className='card-name'>Merge Sort</p>
              <p className='details'>Merge sort is a divide-and-conquer sorting algorithm that repeatedly divides a list in half until each sublist contains only one element, and then merges the sublists back together in a sorted order. The algorithm has a time complexity of O(n log n)</p>
              <Button>Explore</Button>
            </Card>
            
          </Link>
          <Link to="/quick" className='link'>
              <Card>
                <img src={KidsStudyingfromHomepana}/>
                <p className='card-name'>Quick Sort</p>
                <p className='details'>QuickSort is a divide-and-conquer sorting algorithm that selects a 'pivot' element from the array and partition the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.Quicksort is O(n log n) in the average and best case, but it can degrade to O(n^2) in the worst case</p>
                <Button>Explore</Button>
              </Card>
            </Link>
            <Link to="/insertion" className='link'>
              <Card>
                <img src={DictionaryRafiki}/>
                <p className='card-name'>Insertion  Sort</p>
                <p className='details'>Insertion sort is a simple sorting algorithm that builds a final sorted list one element at a time.The time complexity of insertion sort is O(n^2) in the worst case and O(n) in the best case(when the input is already sorted)</p>
                <Button>Explore</Button>
              </Card>
            </Link>
            <Link to="/bubble" className='link'>
              <Card>
                <img src={KidsStudyingfromHomebro}/>
                <p className='card-name'>Bubble Sort</p>
                <p className='details'>Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.The time complexity of bubble sort is O(n^2) in the worst and average case.</p>
                <Button>Explore</Button>
              </Card>
            </Link>
            <Link to="/selection" className='link'>
              <Card>
                <img src={KidsStudyingfromHomecuate}/>
                <p className='card-name'>Selection Sort</p>
                <p className='details'>Selection sort is a simple sorting algorithm that repeatedly selects the smallest element from the unsorted portion of the list and places it at the beginning of the sorted portion.The time complexity of selection sort is O(n^2) in the worst and average case.</p>
                <Button>Explore</Button>
              </Card>
            </Link>
            <Link to="/count" className='link'>
              <Card>
                <img src={Takingnotesamico}/>
                <p className='card-name'>Count Sort</p>
                <p className='details'>Count sort is an efficient sorting algorithm that is based on counting the number of occurrences of each element in the input list.The time complexity of count sort is O(n + k)</p>
                <Button>Explore</Button>
              </Card>
            </Link>
            <Link to="/bucket" className='link'>
              <Card>
                <img src={Takingnotesbro}/>
                <p className='card-name'>Bucket Sort</p>
                <p className='details'>Bucket sort is an efficient sorting algorithm that is based on the idea of distributing elements into a number of "buckets" and then sorting each bucket individually.The time complexity of bucket sort is O(n+k) </p>
                <Button>Explore</Button>
              </Card>
            </Link>
            <Link to="/redix" className='link'>
              <Card>
                <img src={Takingnotescuate}/>
                <p className='card-name'>Radix Sort</p>
                <p className='details'>Radix sort is an efficient integer sorting algorithm that sorts the elements based on their individual digits or a specific position of digits.The time complexity of radix sort is O(nk) </p>
                <Button>Explore</Button>
              </Card>
            </Link>
            <Link to="/heap" className='link'>
              <Card>
                <img src={rafiki}/>
                <p className='card-name'>Heap Sort</p>
                <p className='details'>Heap sort is a comparison-based sorting algorithm that is based on the binary heap data structure.The time complexity of heap sort is O(n log n)</p>
                <Button>Explore</Button>
              </Card>
            </Link>
            <Link to="/merge" className='link'>
              <Card>
                <img src={Takingnotesrafiki}/>
                <p className='card-name'>Merge Sort</p>
                <p className='details'>Merge sort is a divide-and-conquer sorting algorithm that repeatedly divides a list in half until each sublist contains only one element, and then merges the sublists back together in a sorted order. The algorithm has a time complexity of O(n log n)</p>
                <Button>Explore</Button>
              </Card>
            </Link>
          </Fade>
        </Gridbox>
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
            <a href='https://www.linkedin.com/in/sundaran-v-173552236/ ' target="_blank" className='thanks'>LINKED IN</a>
            <a href='https://www.linkedin.com/in/sundaran-v-173552236/ ' target="_blank" className='thanks'>TWITTER</a>
            
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
  );  
}

export default App;
