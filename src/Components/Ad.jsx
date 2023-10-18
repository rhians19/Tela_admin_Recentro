
import {StyledAD, StyledDP} from '../Components/StyledAD'


function AD(){

    return (
       
        <StyledAD>
            <div className='box'>
            <form>
            <label htmlFor="">DSQFL</label>
                <input type="number" />

                <label htmlFor="">DSQ</label>
                <input type="number" />
                
                <label htmlFor="">Bairro</label>
                <input type="text" />

                <label htmlFor="">Rua</label>
                <input type="text" />

                <label htmlFor="">Número</label>
                <input type="number" />  

                <label htmlFor="">Empreendimento</label>
                <input type="text" />   

                <label htmlFor="">Área Total</label>
                <input type="number" />     

                
            <StyledDP>
                <br></br>   
                <label htmlFor="situacao">Situação</label>    
                <select id="situacao" name="Situação">
                 <option value="volvo">Abandonado</option>
                 <option value="saab">Ocupado</option>
                 <option value="mercedes">Em reforma</option>
                 <option value="audi">Disponível</option>
                 </select>
            </StyledDP>


                 <label htmlFor="">Restaurantes e Cafés</label>
                 <input type="number" />

                 <label htmlFor="">Nome do Edifício</label>
                <input type="text" />

                <label htmlFor="">Nº Pavimento em Uso</label>
                <input type="number" />

                <label htmlFor="">Disponibilidade</label>
                <input type="text" />

                <label htmlFor="">Atividade de Funcionamento</label>
                <input type="text" />

                <label htmlFor="">Grau de Risco</label>
                <input type="text" />

                <label htmlFor="">Laudo</label>
                <input type="text" />

                <label htmlFor="">Acessibilidade</label>
                <input type="text" />

                <label htmlFor="">Pichação</label>
                <input type="text" />

                <label htmlFor="">Observações</label>
                <input type="text" />

                <label htmlFor="">Proprietário Localizado</label>
                <input type="text" />

                <label htmlFor="">Investimento</label>
                <input type="number" />

                <label htmlFor="">Qual Investimento</label>
                <input type="text" />

                <label htmlFor="">Tributação</label>
                <input type="text" />

                <label htmlFor="">Autorização de Informação</label>
                <input type="text" />

                <label htmlFor="">Proprietário Cartório</label>
                <input type="text" />

                <label htmlFor="">Proprietário Campo</label>
                <input type="text" />

                <label htmlFor="">Contato Proprietário</label>
                <input type="number" />

                <label htmlFor="">Coincidência Proprietário</label>
                <input type="text" />

                <label htmlFor="">Uso do Imóvel</label>
                <input type="text" />

                <label htmlFor="">Valor do Aluguel</label>
                <input type="number" />

                <label htmlFor="">Valor de Venda</label>
                <input type="number" />

                <label htmlFor="">Latitude</label>
                <input type="number" />

                <label htmlFor="">Longitude</label>
                <input type="number" />

                <label htmlFor="">RGI</label>
                <input type="text" />

                <label htmlFor="">Planta</label>
                <input type="text" />

                <label htmlFor="">Planta Regional</label>
                <input type="text" />

                <label htmlFor="">Judicialização</label>
                <input type="text" />

                <label htmlFor="">Descrição Judiciação</label>
                <input type="text" />
                
                <label htmlFor="">Observações</label>
                <input type="text" />

                <label htmlFor="">Processos abertos desde 2018</label>
                <input type="text" />

                <label htmlFor="">Nº da Licença</label>
                <input type="number" />

                <label htmlFor="">Nº do Processo</label>
                <input type="number" />

            </form>

            </div>
        </StyledAD>



    ) 

  

}

export default AD