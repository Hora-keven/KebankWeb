import Header from './../components/Header'

import './../../src/global.css'
import Footer from './../components/Footer'
import bank from './../assets/bank.png'
import imgcard from './../assets/handcard.png'
import emprestimo from './../assets/emprestimo.png'
import pix from './../assets/pix.png'
import cartao from './../assets/cartao.png'
import extrato from './../assets/extrato.png'
import Card from './../components/Card'

//Tela principal onde tenho algumas informações sobre o Kebank.

function Home() {
  const functions = [

    {
      title: "Empréstimo",
      content: "Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle do início ao fim.",
      img: emprestimo
    },

    {
      title: "Extrato",
      content: "Veja as suas movimentações. Uma experiência fácil e transparente.",
      img: extrato
    },
    {
      title: "Cartão",
      content: "Crie novos cartões virtuais de crédito ou débito no seu app e proteja ainda mais suas compras online.",
      img: cartao
    },
    {
      title: "Pix",
      content: "Faça um Pix, fácil, prático e seguro: não use o saldo da sua conta e concentre os gastos no cartão.  ",
      img: pix
    }
  ]
  return (
    <>
      <Header enable={true} />
      <div className="content">
        <div className="internContent">
          <div className="ContainertextImg">
            <div id="imgkebank">
              <img src={bank} height={600} />
            </div>
            <div className="text">
              <p>A facilidade está em suas mãos. O banco que ajuda os seus clientes, com várias funcionalidades</p>
            </div>
          </div>
          <div className="ContainertextR">
            <div className="textR">
              <p>Cartão de débito e crédito feito pra você! Te ajudando a realizar sonhos e objetivos</p>
            </div>
            <div id="imgkebankRigth">
              <img src={imgcard} height={600} />
            </div>

          </div>
          <div className='cards'>
            {
              functions.map((each) => (
                <Card title={each.title} img={each.img} content={each.content} />
              ))
            }

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
