import { FormEvent, useState } from 'react'
import { BotaoPesquisar, CampoPesquisar, Formulario } from './styles'

// import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    // <form className={styles.form} onSubmit={aoEnviarForm}>
    <Formulario onSubmit={aoEnviarForm}>
      <CampoPesquisar
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisar>Pesquisar</BotaoPesquisar>
    </Formulario>
    // </form>
  )
}
export default FormVagas
