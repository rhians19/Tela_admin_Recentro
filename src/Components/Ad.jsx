
import {StyledAD, StyledDP} from '../Components/StyledAD'


function AD(){

    return (
       
        <StyledAD>
            <h2>Registrar Imóvel</h2>
            <div className='box'>
            <form>
            <label htmlFor="DSQFL">DSQFL</label>
                <input type="number" id='DSQFL' placeholder='Digite o DSQFL' />

                <label htmlFor="DSQ">DSQ</label>
                <input type="number" id='DSQ' placeholder='Digite o DSQ' />
                
                <label htmlFor="Bairro">Bairro</label>
                <input type="text" id='Bairro' placeholder='Digite o Bairro' />

                <label htmlFor="Rua">Rua</label>
                <input type="text" id='Rua' placeholder='Digite a Rua' />

                <label htmlFor="Numero">Número</label>
                <input type="number" id='Numero' placeholder='Digite o número'/>  

                <label htmlFor="Empreendimento">Empreendimento</label>
                <input type="text" id='Empreendimento' />   

                <label htmlFor="AT">Área Total</label>
                <input type="number" id='AT' />     

                
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


                 <label htmlFor="RC">Restaurantes e Cafés</label>
                 <input type="number" id='RC' />

                 <label htmlFor="NE">Nome do Edifício</label>
                <input type="text" id='NE'/>

                <label htmlFor="NPU">Nº Pavimento em Uso</label>
                <input type="number" id='NPU' />

                <label htmlFor="Disponibilidade">Disponibilidade</label>
                <input type="text" id='Disponibilidade' />

                <label htmlFor="AF">Atividade de Funcionamento</label>
                <input type="text" id='AF' />

                <label htmlFor="GR">Grau de Risco</label>
                <input type="text" id='GR' placeholder='Descreva o grau de risco'/>

                <label htmlFor="Laudo">Laudo</label>
                <input type="text" id='Laudo' />

                <label htmlFor="Acessibilidade">Acessibilidade</label>
                <input type="text" id='Acessibilidade' />

                <label htmlFor="Pichacao">Pichação</label>
                <input type="text" id='Pichacao' />

                <label htmlFor="Observacoes">Observações</label>
                <input type="text" id='Observacoes' />

                <label htmlFor="PR">Proprietário Localizado</label>
                <input type="text" id='PR' />

                <label htmlFor="Investimento">Investimento</label>
                <input type="number" id='Investimento' />

                <label htmlFor="QI">Qual Investimento</label>
                <input type="text" id='QI' />

                <label htmlFor="Tributacao">Tributação</label>
                <input type="text" id='Tributacao' />

                <label htmlFor="AI">Autorização de Informação</label>
                <input type="text" id='AI' />

                <label htmlFor="PC">Proprietário Cartório</label>
                <input type="text" id='PC' />

                <label htmlFor="PPC">Proprietário Campo</label>
                <input type="text" id='PPC' />

                <label htmlFor="CP">Contato Proprietário</label>
                <input type="number" id='CP'/>

                <label htmlFor="CCP">Coincidência Proprietário</label>
                <input type="text" id='CCP' />

                <label htmlFor="UI">Uso do Imóvel</label>
                <input type="text" id='UI' />

                <label htmlFor="VA">Valor do Aluguel</label>
                <input type="number" id='VA' />

                <label htmlFor="VV">Valor de Venda</label>
                <input type="number" id='VV' />

                <label htmlFor="Latitude">Latitude</label>
                <input type="number" id='Latitude' />

                <label htmlFor="Longitude">Longitude</label>
                <input type="number" id='Longitude' />

                <label htmlFor="RGI">RGI</label>
                <input type="text" id='RGI' />

                <label htmlFor="Planta">Planta</label>
                <input type="text" id='Planta' />

                <label htmlFor="PLR">Planta Regional</label>
                <input type="text" id='PLR' />

                <label htmlFor="Judicializacao">Judicialização</label>
                <input type="text" id='Judicializacao' />

                <label htmlFor="DJ">Descrição Judiciação</label>
                <input type="text" id='DJ' />
                
                <label htmlFor="Observacoes">Observações</label>
                <input type="text" id='Observacoes' />

                <label htmlFor="PA2018">Processos abertos desde 2018</label>
                <input type="text" id='PA2018' />

                <label htmlFor="NL">Nº da Licença</label>
                <input type="number" id='NL' />

                <label htmlFor="NP">Nº do Processo</label>
                <input type="number" id='NP' />

            </form>

            </div>
        </StyledAD>



    ) 

  

}

export default AD