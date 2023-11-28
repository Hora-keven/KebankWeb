import Header from '../components/Header'
import './../../src/global.css'
import Footer from '../components/Footer'
import api from '../../api/Api'
import { useContext, useState, useEffect } from 'react'
import { InformationsContext } from '../context/InformationsContext'

function Contact() {
  const { userAccount, user } = useContext(InformationsContext)
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
        <div className="informationsCard">
          <h1>Cliente {user.nameOrCompanyName}</h1>
          <span>Saldo: {userAccount.limit}</span>
          <span>Agencia: {userAccount.agency}</span>
          <span>Conta corrente: {userAccount.number}</span>
        </div>
        <div className="informationExtract">
          <div className="title">
            <h2>Data</h2>
            <h2>Valor</h2>
            <h2>Para quem</h2>
          </div>
          {movimentation.map((item) =>
            <div className="card">
              <p className='textInfo'>{item.date}</p>
              <p className='textInfo'>R${item.value}</p>
              <p className='textInfo'>{item.state}</p>
            </div>
          )}

        </div>
      </div>


      <Footer />
    </>
  )
}

export default Contact