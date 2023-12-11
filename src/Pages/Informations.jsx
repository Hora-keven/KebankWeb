import Header from '../components/Header'
import './../../src/global.css'
import Footer from '../components/Footer'
import api from '../../api/Api'
import { useContext, useState, useEffect } from 'react'
import { InformationsContext } from '../context/InformationsContext'
import Kebank from '../components/SloganKebank'
import flagCard from './../assets/flagCard.png'
import nfc from './../assets/nfc.png'
import chip from './../assets/chip.png'

//Pagina onde pega dados da api e retorno na mesma.

function Contact() {
  const { userAccount, cardUser, user } = useContext(InformationsContext)
  const [movimentation, setMovimentation] = useState([])

  useEffect(() => {
    api.get("movimentation/?account=" + userAccount.id).then(function (response) {
      console.log(response.data)
      const newObjects = response.data.map(each => ({
        value: each.value,
        state: each.state,
        date: each.date_hour

      }));


      setMovimentation(newObjects);

    })
  }, [])
  return (
    <>
      <Header enable={false} />
      <div className="content">
        <div className="information">
          <div className="card">
            <Kebank />
            <div id="flagCard">
              <img src={flagCard} />
            </div>
            <div className="chipCard">
              <div id="chipCard">
                <img src={chip} />
              </div>
            </div>
            <div className="informationCard">
              <h2 id='number'>{cardUser.number.replace(/(.{4})/g, "$1 ")}</h2>
              <h2 id='name'>{user.nameOrCompanyName}</h2>
              <h2 id='validity'>{cardUser.validity}</h2>
            </div>
            <div id="nfcCard">
              <img src={nfc} />
            </div>
          </div>
          <div className="informationExtract">
            <div className="title">
              <h2>Data</h2>
              <h2>Valor</h2>
              <h2>Tipo transferência</h2>
            </div>
            {movimentation.map((item) =>
              <div className="cardInfo">
                <p className='textInfo'>{item.date.substr(0, 10)}</p>
                <p className='textInfo'>R${item.value}</p>
                <p className='textInfo'>{item.state}</p>
              </div>

            )}
        
          </div>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default Contact
