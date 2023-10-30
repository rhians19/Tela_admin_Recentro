import styled from 'styled-components'


export const StyledAD = styled.div`
* {
   font-family: 'Inter', sans-serif;
}

 .box {
    display: flex;
    height: 100%;
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);
    border-radius: 20px;
    

    form {
        display: grid;
        grid-template-columns: 35rem 35rem 30rem;
        justify-content: center;
        padding: 1rem 0;
        
    }

    input {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 0.6rem 0;
      margin-right: 5rem;
      padding: 0.8rem 1.2rem;
      background-color: #dfe0e2;
      border: 2px solid;
      border-color: #353B3C;
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
 
 button:hover {
   opacity: 0.9
 }
 
`
export const StyledDP = styled.div`

select{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 0.6rem 0;
      margin-right: 5rem;
      padding: 0.8rem 1.2rem;
      background-color: #dfe0e2;
      border: 2px solid;
      border-color: #353B3C;
      border-radius: 10px;
      border-shadow: 3px 3px 10px #000001c;
      width: 27.8rem;
    
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
export const StyledButtons = styled.div`

.button-group {
   display: flex;
   flex-direction: row;
}

button {
   margin-top: 40px;
   margin-right: 3rem;
   width: 10rem; 
   padding: 10px;
   border-radius: 8px;
   border: 0;
   background-color: #f09311;
   color: #fff;
   font-size: 20px;
    
}
`
