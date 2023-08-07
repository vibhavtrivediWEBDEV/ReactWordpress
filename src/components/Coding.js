import React, { useState } from 'react'
import Video from './Video'
import Addvedio from './Addvedio'

function Coding() {


  var data = [{
    id:'1',
    title : 'cat',
    views : '100k'
  },
  {
    id:'2',
    title : 'monkey',
    views : '770 M'
  },{
    id:'3',
    title : 'dog',
    views : '99k'
  },{
    id:'4',
    title : 'rat',
    views : '1000k'
  }]

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Element found, return its index
      }
  
      if (arr[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Element not found
  }
  
  // Example usage:
  const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
  const target = 13;
  const result = binarySearch(arr, target);
  console.log(result); // Output: 6
  

const [ary,setary] =  useState(data)


function AddVedio(vedio){
  setary([...ary,{...vedio , id:vedio.length+1}])
}
    
  return (
<>
<div style={{ background: 'tomato' }}>
<Addvedio addcard={AddVedio}  />
</div>
{
  ary.map((vedio)=><Video key={vedio.id} title={vedio.title} views={vedio.views} />)
}


</>

  )
}

export default Coding