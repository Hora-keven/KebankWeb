import dolar from './../assets/bank.png'
import card from './../assets/handcard.png'
function Content() {
    return (
        <>
        <div className="content">
            <div className="internoContent">
        <div className="slogan">
            <div className="kebank">
                <h1 id='firstName'>Ke</h1>
                <h1 id='secondName'>Bank</h1>
            </div>
                <p>O banco que facilita</p>
            </div>
            <div className="ContainertextoImg">
                <div id="imgkebank">
                    <img src={dolar} height={600} />
                </div>
                    <div className="texto">
                        <p>A facilidade está em suas mãos. O banco que ajuda os seus clientes, com várias funcionalidades</p>
                    </div>
                </div>
             <div className="ContainertextoL">
                <div id="imgkebankRigth">
                    <img src={card} height={600} />
                </div>
              
                    <div className="textoL">
                        <p>Cartão de débito e crédito feito pra você! Te ajudando a realizar sonhos e objetivos</p>
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}
export default Content