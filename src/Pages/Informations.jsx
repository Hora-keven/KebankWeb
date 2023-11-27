import Header from '../components/Header'
import './../../src/global.css'
import Footer from '../components/Footer'

import { useContext } from 'react'
import { InformationsContext } from '../context/InformationsContext'

function Contact() {
  const { userAccount, user } = useContext(InformationsContext)
  return (
    <>
      <Header enable={false} />

      <div className="content">
        <div className="informations">
          <h1>Cliente {user.nameOrCompanyName}</h1>
          <span>Saldo: {userAccount.limit}</span>
          <span>Agencia: {userAccount.agency}</span>
          <span>Conta corrente: {userAccount.number}</span>
        </div>
        <div className="informationExtract">
         <div className="date">
            <span></span>
            <span></span>
         </div>
         <div className="value">
          <span></span>
          <span></span>
         </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Contact