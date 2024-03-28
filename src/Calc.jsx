import Menu from "./Menu.jsx"
import style from "./Calc.module.css"
import { useEffect, useState } from "react"

export const Calc = () => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMult, setRespMult] = useState()
    const [respDiv, setrespDiv] = useState()

    // useEffect(() => {
        
    //     if(numero1 !== undefined && numero2 !== undefined){
    //         setRespSoma(parseFloat(numero1) + parseFloat(numero2))
    //         setRespSub(parseFloat(numero1) - parseFloat(numero2))
    //         setRespMult(parseFloat(numero1) * parseFloat(numero2))
    //         setrespDiv(parseFloat(numero1) / parseFloat(numero2))
    //     }
    // }, [numero1, numero2])

    const hendleSoma = () => setRespSoma(parseFloat(numero1) + parseFloat(numero2))
    const hendleSub = () => setRespSub(parseFloat(numero1) - parseFloat(numero2))
    const hendleMult = () => setRespMult(parseFloat(numero1) * parseFloat(numero2))
    const hendleDiv = () => setrespDiv(parseFloat(numero1) / parseFloat(numero2))

    const handlAll = (a,b) => {
        setRespSoma(parseFloat(a) + parseFloat(b))
        setRespSub(parseFloat(a) - parseFloat(b))
        setRespMult(parseFloat(a) * parseFloat(b))
        setrespDiv(parseFloat(a) / parseFloat(b))
    }

    const msgError = "Digie um númer válido"

    return(
        <>
            <Menu/>
                <div className={style.sectionCalc}>
                    <h1>Cáculo</h1>
                    <div>
                        <label htmlFor="n1"></label>
                        <input type="text" id="n1" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="n2"></label>
                        <input type="text" id="n2" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
                    </div>
                    <div>
                        <div>
                            <h1>Soma</h1>
                            {!isNaN(respSoma) ? respSoma.toFixed(2): msgError }
                            <button onClick={hendleSoma}>Somar</button>
                        </div>
                        <div>
                            <h1>Subtração</h1>
                            {!isNaN(respSub) ? respSub.toFixed(2): msgError }
                            <button onClick={hendleSub}>Subtrair</button>
                        </div>
                        <div>
                            <h1>Multiplicação</h1>
                            {!isNaN(respMult) ? respMult.toFixed(2): msgError }
                            <button onClick={hendleMult}>Multiplicar</button>
                        </div>
                        <div>
                            <h1>Divisão</h1>
                            {!isNaN(respDiv) ? respDiv.toFixed(2): msgError }
                            <button onClick={hendleDiv}>Dividir</button>
                        </div>
                    </div>
                </div>
        </>
    )
}