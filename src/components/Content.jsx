import bank from './../assets/bank.png'
import imgcard from './../assets/handcard.png'
import emprestimo from './../assets/emprestimo.png'
import dolar from './../assets/dolar.png'
import pix from './../assets/pix.png'
import cartao from './../assets/cartao.png'
import Card from './Card'
function Content() {

    const functions =[

     {  
        title:"Empréstimo",
        content:"Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle do início ao fim.",
        img:emprestimo
    },
    {
        title:"Caixinhas",
        content:"Organize e guarde dinheiro para seus planos. Crie Caixinhas personalizadas para cada um de seus objetivos.",
        img:emprestimo
    },
    {
        title:"Investimento",
        content:"Investimentos a partir de R$ 1 e opções para todos os perfis. Uma experiência fácil, segura e transparente.",
        img:dolar
    },
    {
        title:"Cartão",
        content:"Crie novos cartões virtuais de crédito ou débito no seu app e proteja ainda mais suas compras online.",
        img:cartao
    },
    {
        title:"Pix",
        content:"Faça um Pix, fácil, prático e seguro: não use o saldo da sua conta e concentre os gastos no cartão.  ",
        img:pix 
    }
]
        
    
    return (
        <>
            <div className="content">
                <div className="internoContent">
                    <div className="ContainertextoImg">
                        <div id="imgkebank">
                            <img src={bank} height={600} />
                        </div>
                        <div className="texto">
                            <p>A facilidade está em suas mãos. O banco que ajuda os seus clientes, com várias funcionalidades</p>
                        </div>
                    </div>
                    <div className="ContainertextoR">
                        <div className="textoR">
                            <p>Cartão de débito e crédito feito pra você! Te ajudando a realizar sonhos e objetivos</p>
                        </div>
                        <div id="imgkebankRigth">
                            <img src={imgcard} height={600} />
                        </div>
                      
                    </div>
                    <div className='cards'>
                        {
                            functions.map((each)=>(
                                <Card title={each.title} img={each.img} content={each.content}/>
                            ))
                        }
                         
                        </div>
                </div>
            </div>
        </>

    )
}
export default Content