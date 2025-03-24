// // Add your code here

// function submitData(name,email){
//     const userData= {
//         name: name,
//         email: email
//     };

// }

// const configurationObject= {
//     method: "POST",
//     headers:{
//         "Content-Type": "application/json",
//         "Accept":"application/json",
//     },
//     body:JSON.stringify(submitData),
// };

// fetch("http://localhost:3000/users", configurationObject).then((response)=>{
//     if (!response.ok) {
//           throw new Error("Data not found");}
//     return response.json();
// })
// .then((data)=>{
//     const body = document.querySelector("body");
//       const newElement = document.createElement("p");
//       newElement.textContent = `User ID: ${data.id}`;
//       body.appendChild(newElement)
//       .catch((error) => {
//         const body = document.querySelector("body");
//         const errorElement = document.createElement("p");
//         errorElement.textContent = `Error: ${error.message}`;
//         body.appendChild(errorElement);
//       });
// })

function submitData(name, email) {
  // Create user data object
  const userData = { name, email };

  // Send a POST request
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
      // Append the new user ID to the DOM
      const body = document.querySelector("body");
      const newElement = document.createElement("p");
      newElement.textContent = `User ID: ${data.id}`;
      body.appendChild(newElement);
    })
    .catch(error => {
      // Handle errors and append error message to the DOM
      const body = document.querySelector("body");
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${error.message}`;
      body.appendChild(errorElement);
    });
}


