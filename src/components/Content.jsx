import dolar from './../assets/bank.png'
import card from './../assets/handcard.png'
function Content() {
    return (
        <>
            <div className="kebank">
                <h1 id='firstName'>Ke</h1>
                <h1 id='secondName'>Bank</h1>


            </div>
            <div className="slogan">
                <p>O banco que facilita</p>
            </div>
            <div className="content">
                <div id="imgkebank">
                    <img src={dolar} height={600} />
                </div>
                <div className="Containertexto">
                    <div className="texto">
                        <p>A facilidade está em suas mãos. O banco que ajuda os seus clientes, com várias funcionalidades</p>
                    </div>
                </div>
                <div id="imgkebankRigth">
                    <img src={card} height={600} />
                </div>
                <div className="ContainertextoL">
                    <div className="textoL">
                        <p>Cartão de débito e crédito feito pra você! Te ajudando a realizar sonhos e objetivos</p>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Content