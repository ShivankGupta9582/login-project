import React, { useEffect } from 'react'
import { useGoogleOneTapLogin } from 'react-google-one-tap-login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './home.css'
import { useState } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
const options = {
  client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  auto_select: false,
  context: "signin",
}
// function Home() {
//   const [loginData, setLoginData] = useState(
//     localStorage.getItem("loginData")
//       ? JSON.parse(localStorage.getItem("loginData"))
//       : null
//   );
//   useEffect(() => {
//     if (!loginData) {
//       // useGoogleOneTapLogin(options, async (response) => {
//       //   console.log(response);
//       //   const res = await fetch("/api/google-login", {
//       //     method: "POST",
//       //     body: JSON.stringify({
//       //       token: response.credential,
//       //     }),
//       //     headers: {
//       //       "Content-Type": "application/json",
//       //     },
//       //   });

//       //   const data = await res.json();
//       //   setLoginData(data);
//       //   localStorage.setItem("loginData", JSON.stringify(data));
//       // });
//     }
//   }, [loginData]);

//   const handleLogout = () => {
//     localStorage.removeItem("loginData");
//     setLoginData(null);
//   };
//   return (
//     <div>
//       <Container className="HomePage">
//         <div class="container">
//           <h3 class="title">
//             <span class="title-word title-word-1">Welcome</span>
//             <span class="title-word title-word-2">to</span>
//             <span class="title-word title-word-3">EG</span>
//             <span class="title-word title-word-4">Login Project</span>
//           </h3>
//         </div>
//         <ReactPlayer url="https://www.youtube.com/watch?v=35npVaFGHMY" loop="true" controls="false" width="200" playing="true" />
//         <div className='para'>
//           <p>Expedia Group, Inc., headquartered in Seattle, owns and operates travel fare aggregators and travel metasearch engines, including Expedia.com, Hotels.com, Vrbo, Travelocity, Hotwire.com, Orbitz, Ebookers, CheapTickets, CarRentals.com, Expedia Cruises, Wotif, and Trivago.</p>
//         </div>
//       </Container>

//       <div class="container">
//         <div class="row">
//           <div class="col-md-12 text-center">
//             <h3 class="animate-charcter">Power Global Travel For Everyone,Everywhere!!</h3>
//           </div>
//         </div>
//       </div>
//       <div>
//           {!loginData ? (
//             <div>
//               <h3>
//                 You "Shivank Gupta" logged in as shivanklords9582@gmail.com
//               </h3>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           ) : (
//             <div>Not logged in</div>
//           )}
//         </div>
//     </div>

//   )
// }
const Home = () => {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [logeed,islogged] =useState(false);
  const[inPage,setPage]= useState("")
    useGoogleOneTapLogin({ //make a conditional hook here conidton would be that the user is logged in or not

      onSuccess: (Response) => {
        console.log("Success Login")
  
        setName(Response.given_name);
        setEmail(Response.email);
        islogged(true);
        //here i have to stop the loop to repeatedly show the login portal to the user and alos on refershing the login page the user shall see the successful login tag
  
     },
      onError: (Response) => {
        console.log("Error")
        islogged(false);
      },
      googleAccountConfigs: {
        client_id: "614186185696-s50t20rog34rso3g7fbtsjo4mcgdek9f.apps.googleusercontent.com"
      }
    })

  return (
    <div>
      <Container className="HomePage">
      <div class="container">
  <h3 class="title">
    <span class="title-word title-word-1">Welcome</span>
    <span class="title-word title-word-2">to</span>
    <span class="title-word title-word-3">EG</span>
    <span class="title-word title-word-4">Login Project</span>
  </h3>
</div>
        <ReactPlayer url="https://www.youtube.com/watch?v=35npVaFGHMY" loop="true" controls="false" width="200" playing="true" />
        <div className='para'>
          <p>Expedia Group, Inc., headquartered in Seattle, owns and operates travel fare aggregators and travel metasearch engines, including Expedia.com, Hotels.com, Vrbo, Travelocity, Hotwire.com, Orbitz, Ebookers, CheapTickets, CarRentals.com, Expedia Cruises, Wotif, and Trivago.</p>
        </div>
      </Container>

      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter">Power Global Travel For Everyone,Everywhere!!</h3>
          </div>
        </div>
      </div>
      <div className='success'>
      the user is <b>{logeed?'currently logged in as Shivank with email as shivanklords9582@gmail.com':'not loged in'}</b>
     </div>
    </div>
  )
}

export default Home