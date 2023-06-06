import React from 'react'
import { useGoogleOneTapLogin } from 'react-google-one-tap-login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './home.css'
const Home = () => {
  useGoogleOneTapLogin({
    onSuccess: (Response) => {
      console.log("Success Login")
    },
    onError: (Response) => {
      console.log("Error")
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
    </div>
  )
}

export default Home