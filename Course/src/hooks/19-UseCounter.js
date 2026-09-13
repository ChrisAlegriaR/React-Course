import { useState } from "react"

export default function useCounter(valorInicial) {
    const [contador, setContador] = useState(valorInicial = 0);

    const incrementar = (valor = 1) => { setContador(contador + valor) };

    const resetear = () => {setContador(valorInicial)};

    const disminuir = (valor = 1) => { setContador(contador - valor) };

    return {
        contador,
        incrementar,
        resetear,
        disminuir
    }
}
