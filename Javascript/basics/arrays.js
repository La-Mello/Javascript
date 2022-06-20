//create an array of integers
/**
 * An array is a data type that can store other types
 * e.g. Strings, Numbers
 */

//declaring
let nums=[];//creates an empty array
// adding new element to the array
nums[0]=20
nums.push(2)
nums.push(4)
nums.push(6)
nums.push(8)

console.log(nums);
console.log(nums[2]);//accessing individual elements

//getting the array size
console.log(nums.length);

//removing elements from the array
nums.pop()//removes last element in the array
console.log(nums);


let nums2=[2,3,4,5,6,7]//created an array with numbers

//for .. loop
/**
 * Manipulates each value of the array
 */
for(let i=0;i<nums.length;i++)
    console.log(nums[i]);

//for .. in
/**
 * Manipulates each value of the array
 */
for (const n in nums) {
    
    console.log(nums[n]);   
}


//for.. each
/**
 * Manipulates each value of the array
 */
nums2.forEach(n=>{
    console.log(++n);
})

//filter for even numbers
/**
 * Filters only values that meet the condition
 */
nums2=nums2.filter(n=>n%2==0)

console.log(nums2.toString());


//map function
/**
 * Map recreates t=new values under the specified rules
 */
nums2=nums2.map(n=>n*n);
console.log(nums2.toString());
