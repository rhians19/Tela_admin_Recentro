import styled from 'styled-components'


export const StyledAD = styled.div`
* {
   font-family: 'Inter', sans-serif;
}

 .box {
    display: flex;
    height: 100%;
    width: 100vh;
    margin: auto;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);

    form {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-between;
        padding: 1rem 0;
        align-items: center;
    }

    input {
      display: flex;
      flex-direction: column;
      justify-content: space-beteween;
      margin: 0.6rem 0;
      padding: 0.8rem 1.2rem;
      background-color: #dfe0e2;
      border: none;
      border-radius: 10px;
      border-shadow: 3px 3px 10px #000001c;
      width: 25rem;
   }
  
  input::hover {
      background-color: #eeeeee75;
   }
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

 button {
   margin-top: 10px;
   padding: 10px;
   border-radius: 8px;
   border: 0;
   background-color: #f09311;
   color: #fff;
   font-size: 20px;
 }

 button:hover {
   opacity: 0.9
 }
`
export const StyledDP = styled.div`

select{
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    boder-shadow: 1px 1px 6px #0000001c;
    width: 25rem;
    
}
`
export const StyledGroup1 = styled.div`

body {
   margin: 0.6rem 0;
    
}
`
export const StyledGroup2 = styled.div`

body {
   margin: 0.6rem 0;
    
}
`
export const StyledGroup3 = styled.div`

body {
   margin: 0.6rem 0;
    
}
`
