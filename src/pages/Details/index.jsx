import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Ingredient } from '../../components/Ingredient'
import { ButtonText } from '../../components/ButtonText'

import { Container } from './styles'

import { FiChevronLeft, FiMinus, FiPlus } from 'react-icons/fi'

export function Details() {
  const isAdmin = false
  return (
    <Container>
      <Header isAdmin={isAdmin} />
      <main>
        <ButtonText title='voltar' icon={FiChevronLeft} />

        <div className='plate_info'>
          <div className='image'>
            <img src='src/assets/mask-group.png' alt='' />
          </div>

          <div className='data'>
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

            <div className='ingredients'>
              <Ingredient name='alface' />
              <Ingredient name='cebola' />
              <Ingredient name='pão naan' />
              <Ingredient name='pepino' />
              <Ingredient name='rabanete' />
              <Ingredient name='tomate' />
            </div>

            {
              isAdmin ?
                <div className='footer'>
                  <Button title='editar prato' />
                </div>

                : <div className='footer'>
                  <div className='amount'>
                    <FiMinus size={24} />
                    <p>01</p>
                    <FiPlus size={24} />
                  </div>

                  <Button title='incluir | R$25,00' />
                </div>
            }
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}