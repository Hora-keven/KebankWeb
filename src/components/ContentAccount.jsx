import dolar from './../assets/bank.png'
import card from './../assets/handcard.png'
function ContentAccount() {
    return (
        <>
            <div className="content">
                <div className="internoContent">
                    <div className="ContainertextImg">
                        <div id="imgkebank">
                            <img src={dolar} height={600} />
                        </div>
                        <div className="text">
                            <p>A facilidade está em suas mãos. O banco que ajuda os seus clientes, com várias funcionalidades</p>
                        </div>
                    </div>
                    <div className="ContainertextoR">
                        <div className="textR">
                            <p>Cartão de débito e crédito feito pra você! Te ajudando a realizar sonhos e objetivos</p>
                        </div>
                        <div id="imgkebankRigth">
                            <img src={card} height={600} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default ContentAccount