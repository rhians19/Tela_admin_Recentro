import styled from 'styled-components'


export const StyledAD = styled.div`

 .box {
    display: flex;
    height: 100%;
    width: 100vh;
    margin: auto;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem 0;
        align-items: center;
    }
 }

 input {
    display: flex;
    flex-direction: column;
    justify-content: space-beteween;
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border-width: thin;
    border-radius: 10px;
    boder-shadow: 1px 1px 6px #000001c;
    width: 30rem;
 }

input::hover {
    background-color: #eeeeee75;
 }

 h2::after{
    content: '';
    display: block;
    width: 5rem;
    height: 0.3rem;
    background-color: #f09311;
    margin 0 auto;
    position: absolute;
    border-radius: 10px;
 }
`
export const StyledDP = styled.div`

select{
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    boder-shadow: 1px 1px 6px #0000001c;
    width: 30rem;
    
}
`