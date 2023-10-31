import dolar from './../assets/bank.png'
import imgcard from './../assets/handcard.png'
import Card from './Card'
function Content() {

    const functions =[

     {  
        title:"Empréstimo",
        content:"Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle do início ao fim.",
        img:"./../assets/handcard.png"
    },
    {
        title:"Caixinhas",
        content:"Organize e guarde dinheiro para seus planos. Crie Caixinhas personalizadas para cada um de seus objetivos.",
        img:"./../assets/handcard.png"
    },
    {
        title:"Investimento",
        content:"Investimentos a partir de R$ 1 e opções para todos os perfis. Uma experiência fácil, segura e transparente.",
        img:"./../assets/handcard.png"
    },
    {
        title:"Cartão",
        content:"Crie novos cartões virtuais de crédito ou débito no seu app e proteja ainda mais suas compras online.",
        img:"./../assets/handcard.png" 
    },
    {
        title:"Pix",
        content:"Faça um Pix e pague com o cartão de crédito: não use o saldo da sua conta e concentre os gastos no cartão.  ",
        img:"./../assets/handcard.png" 
    }
]
        
    
    return (
        <>
            <div className="content">
                <div className="internoContent">
                    <div className="ContainertextoImg">
                        <div id="imgkebank">
                            <img src={dolar} height={600} />
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