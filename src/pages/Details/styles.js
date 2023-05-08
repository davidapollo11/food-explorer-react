import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 'header' 'content';

  > main {
    margin: 38px auto 0px;
    grid-area: content;
    
    display: flex;
    flex-direction: column;

    max-width: 1124px;

    > .plate_info {
      display: flex;
      align-items: center;
      gap: 48px;

      margin-top: 42px;

      > .image {
      border-radius: 50%;
      max-width: 389px;
      max-height: 389px;
      
        > img {
          width: 100%;
        }
      }

      > .data {
        display: flex;
        flex-direction: column;
        gap: 24px;

        font-family: 'Poppins';

        > h2 {
          font-weight: 500;
          font-size: 40px;
        }

        > p {
          font-weight: 400;
          font-size: 24px;
        }


        > .ingredients {
          display: flex;
          gap: 12px;
        }

        > .footer {
          max-width: 294px;
          display: flex;
          gap: 32px;

          > .amount {
            display: flex;
            align-items: center;
            gap: 14px;
          }

        }
      }
    }
  }
`