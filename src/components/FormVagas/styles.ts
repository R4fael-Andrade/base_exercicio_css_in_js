import styled from 'styled-components'
import { cores } from '../../global'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${cores.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BotaoPesquisar = styled.button`
  background-color: ${cores.corPrincipal};
  border: 1px solid ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  margin-left: 8px;
  cursor: pointer;
`

export const CampoPesquisar = styled.input`
  padding: 0 16px;
  outline-color: ${cores.corPrincipal};
`
