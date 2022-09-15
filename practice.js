// let queryParamArray = ["authorId", "category", "tags", "subcategory"] 
// let obj = {
//   authorId:4556,
//   cat:"ab"
// }
// for(let key in obj){
//     if(!queryParamArray.includes(key)){
//       console.log("wooooo")
//     }
// }
// let a=/\[(.*?)\]/
// let b=/(?<=\[)(.*?)(?=\])/
// function getUrlParam(param) {
//     var results = new RegExp('[\\?&]' + param + '=([^&#]*)').exec("/test?authorId=45&category=");
//     // console.log(results)
//     return  results[1] || undefined
// }
// // console.log(b.exec("sfdf[affd]bgdfgg[sgd]"))
// console.log(getUrlParam("category"))
// console.log(null||undefined)

// const isParamValueEmpty = function(data,url){
// 	var results = new RegExp('[\\?&]' + data + '=([^&#]*)').exec(url);
//     // console.log(results)
// 	return (results &&  results[1] ) || undefined
// }
// console.log(isParamValueEmpty("subcategory","/blogs?tags=&subcategory=&category=caTEGory4"))

// 
// let obj={a:"",b:"b"}
// let arr=Object.keys(obj)
// console.log(arr)

// if(arr.includes("a")){
//     console.log("wooo")
// ,/,,/ },,
// consol,e.log(arr["c",]==undefined)

// let date=new Date()
// console.log(date.toTimeString(), date.toLocaleTimeString(), date.toLocaleString(),date.getTimezoneOffset())


// var checkArithmeticSubarrays = function(nums, l, r) {
//     let arr=[]
//     for(let i=0;i<l.length;i++){
//         let arr1=nums.slice(l[i],r[i]+1)
//         arr1.sort((a,b)=>a-b)
//         console.log(arr1)
//         for(let j=0;j<arr1.length-1;j++){
//             arr1[j]=arr1[j+1]-arr1[j]
            
//         }
//         arr1.pop()
//         if([...new Set(arr1)].length==1) arr.push(true)
//         else arr.push(false)
//     }
//     return arr
// };
// console.log(checkArithmeticSubarrays([4,6,5,9,3,7],[0,0,2],[2,3,5]))



// var CustomStack = function(maxSize) {
//     this.arr=new Array()
//     this.maxSize=maxSize
//     return this.arr
// };
// console.log(CustomStack(5))

// CustomStack.prototype.push = function(x) {
//     let a=CustomStack(5)
//     // if(this.arr.length<=this.maxSize){
//     //     this.arr.push(x)
//     // }
//     return this.arr
// };
// console.log(CustomStack.prototype.push(5))



// var findAndReplacePattern = function(words, pattern) {
//     let n=pattern.length
//     let p = pattern
//     let arr=[]
//     for(let j=0;j<words.length;j++){
//         let word=words[j]
//         for(let i=0;i<n;i++){
//             p=p.replaceAll(pattern[i],word[i])
//             word=word.replaceAll(words[j][i],pattern[i])
            
//         }
//         if(p==words[j]) arr.push(p)
//         p=pattern
//     }
//     return arr
    
// }
// console.log(findAndReplacePattern(["abc","cba","xyx","yxx","yyx"],"abc"))



// var sumOfUnique = function(nums) {
//     let digit =0
//     let a=nums.filter((x,i,arr)=>i==arr.lastIndexOf(x))
//     console.log(a)
//     nums.reduce((a,b)=>a+b,0)
//     return digit
// }
// console.log(sumOfUnique([1,2,3,2]))


// var busyStudent = function(startTime, endTime, queryTime) {
//     let digit=0
//     for(let i=0;i<startTime.length;i++){
//         if(startTime[i]<queryTime&&endTime[i]>queryTime) digit++
//     }
//     return digit
// };

// var arrayPairSum = function(nums) {
//     nums.sort((a,b)=>a-b)
//     let digit=0
//     for(let i=0;i<nums.length;i=i+2){
//         digit+=Math.min(nums[i],nums[i+1])
//     }
//     return digit
// };


// var maximumUnits = function(boxTypes, truckSize) {
//    boxTypes.sort((a,b)=>a[1]-b[1])
//    let digit=0
//    let n = boxTypes.length-1
//    for(let i=n;i>=0;i--){
//     let a=boxTypes[i]
//     if(a[0]<=truckSize){
//         digit+=a[0]*a[1]
//         truckSize=truckSize-a[0]
//     }
//     else{
//         digit+=(truckSize)*a[1]
//         break
//     }
//    }
//    return digit
// }
// console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10))


// function bubbleSort(array) {
//     var done = false;
//     while (!done) {
//       done = true;
//       for (var i = 1; i < array.length; i += 1) {
//         if (array[i - 1] > array[i]) {
//           done = false;
//           var tmp = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = tmp;
//         }
//       }
//     }
  
//     return array;
//   }
  
//   var numbers = [12, 10, 15, 11, 14, 13, 9];
//   bubbleSort(numbers);
//   console.log(numbers);


// var minimumOperations = function(nums) {
//     let digit=0
//     nums=nums.filter((x)=>x>0)
//     if(nums.length==0) return 0
//     while(nums.length!=0){
//         let min = Math.min.apply(0,nums)
//         if(min==0) min=1
//         console.log(min)
//         for(let i=0;i<nums.length;i++){
//             nums[i]=nums[i]-min
//         }
//         nums=nums.filter((x)=>x>0)
//         console.log(nums)
//         digit++
//     }
//     return digit
// };
// console.log(minimumOperations([1,2,3,4,5]))


// const urlRegex = /(https?:\/\/.*\.(?:png|jpg))/
// console.log(urlRegex.test("https://functionup-stg.s3.ap-south-1.amazonaws.com/thorium/iitd.png"))

// let obj ={
//     name:"name1",
//     arr:["ele1","ele2"],
//     obj1:{
//         lname:"last1",
//         age:20
//     }
// }
// let newObj = JSON.parse(JSON.stringify(obj))
// newObj["new"]="new"
// console.log(newObj,typeof(newObj))


// const isValidString = function(data){
//     if(Object.prototype.toString.call(data)!="[object String]" || data.trim().length==0){
//         return false
//     }
//     return true
// }
// console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test("email1@gmail.co.in"))  

// let foo = function(a,arr,b){
//     let repeat=true
//     while(repeat){
//         repeat=false
//         for(let i=1;i<arr.length;i++){
//             if(arr[i]<arr[i-1]){
//                 repeat=true
//                 let a=arr[i]
//                 arr[i]=arr[i-1]
//                 arr[i-1]=a
//             } 
//         }
//     }
//     let sum=0,i=0
//     while(sum<=b){
//         sum=0
//         let a=arr[i]
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>a) sum+=a
//             else sum+=arr[j]
//         }
//         if(sum==b) return a
//         i++
//     }
   
//  return  -1
// }
// console.log(foo(4,[2,4,4,6],11))



const foo = async function(data){
    // let sum
    let a=false    
    if(a){
    for(let i=0;i<data.length;i++){
        sum+=data[i]
    }   }
    return sum
}
console.log(foo([1,2,5,3]))



