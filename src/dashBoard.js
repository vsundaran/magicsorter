import React from 'react'
import App from './App'
import {Routes, Route } from "react-router-dom";
import Mergesort from './components/mergeSort';
import Bubblesort from './components/bubblesort';
import SelectionSort from './components/selectionSort';
import Quicksort from './components/quicksort';
import Insertionsort from './components/insertionSort';
import CountSort from './components/countsort';
import BucketSort from './components/bucket';
import RedixSort from './components/redixsort';
import HeapSort from './components/heap';
function DashBoard() {
  return (
    <>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/merge" element={<Mergesort />} />
          <Route path="/bubble" element={<Bubblesort />} />
          <Route path="/selection" element={<SelectionSort />} />
          <Route path="/quick" element={<Quicksort/>} />
          <Route path="/insertion" element={<Insertionsort/>} />
          <Route path="/count" element={<CountSort/>} />
          <Route path="/bucket" element={<BucketSort/>} />
          <Route path="/redix" element={<RedixSort/>} />
          <Route path="/heap" element={<HeapSort/>} />
        </Routes>
      </>
  )
}

export default DashBoard
