console.log("===Hour 1:JSON Basics ===");

 let student={
    name:"Asha",
    age:21,
    marks:[85,90,78]
 }

 //convert object+json string
 let jsonString=JSON.stringify(student);
console.log("JSON string:",jsonString);

//convert JSON string+object
 let parseObj=JSON.parse(student);
console.log("Parsed Object:",parseObj);

-fetch("https://jsonplaceholder.typicode.com/posts/")
   .then(response => response.json()) //convert to json
   .then(data => console.log("Fetched Data:",data))
   .catch(error => console.error("Error:",error));