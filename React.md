## JSX

1. return de uma função (dentro de um componente)
2. retorna apenas uma única coisa (se precisar encapsula dentro de uma <div> ou <>)
3. className ao invés class
4. camelCase 
5. condição dentro do jSX => ternário  => suporta a sintaxe do if/else
6. string => renderizar direto na tela
7. js => sempre entre {}
8. return => mais de uma linha de código precisa ter o parênteses

# COMPONENTES

1. iniciam com letra maiúscula
2. são funções que retornam jsx
3. exportar o componente 
4. importar o componente onde queremos utilizá-lo

# KEY

1. permite identificar cada elemento de uma lista do React e somente rerenderizar se for alterado.
2. precisa ser único => index não é a melhor opção.

# HOOKS
1. ele precisa ser utilizado na raiz do sue componente função. 


# STATE 
1. Não pode ser mutado

# PROPS 
  
# RENDERIZAÇÃO CONDICIONAL
## CONDICIONAL DE ESTILO
  ```js
<!--   OPÇÃO 1 -->
<button className={`Acoes__adicionar ${!quantidadeSelecionada && "Acoes__adicionar--preencher"}`}
                     
  ```
  ```js
<!--   OPÇÃO 2 -->
                                                                                        
                        <button className={
                            (quantidadeSelecionada>0) ? 
                                "Acoes__adicionar" 
                                : "Acoes__adicionar Acoes__adicionar--preencher" } 

                            onClick={() => adicionarItem(index)}
  ```
  ## CONDICIONAL DE "ESTRUTURAS" NA TELA
```js
<!--   OPÇÃO 1 -->
const removeButton = (canRender, index) => {
        return (
            <> 
            {/* SHORT-CIRCUIT */}
            {Boolean(canRender) && 
                <button className="Acoes__remover " onClick={() => removerItem(index)}>remover</button>}
            </>
            )
        }

           
  ```
  ```js
<!--   OPÇÃO 2 -->
    const removeButton1 = (quantidadeSelecionada, index) => {
        return (
            <> 
            {/* SHORT-CIRCUIT */}
            {(quantidadeSelecionada > 0) && 
                    <button className="Acoes__remover " onClick={() => removerItem(index)}>remover</button>}
            </>
            )
        }

                                                                                                  
        
  ```
```js
<!--   OPÇÃO 3 -->
           const removeButton2 = (quantidadeSelecionada, index) => {
        return (
            <> 
            {(quantidadeSelecionada > 0) ?
                    <button className="Acoes__remover " onClick={() => removerItem(index)}>remover</button>
                    : null
                }
            </>
            )
        }    

                                                                        
        
  ```
```js
<!--   OPÇÃO 4 -->
                                                                                        
       const removeButton3 = (quantidadeSelecionada, index) => {
            if(quantidadeSelecionada > 0) {
                return (<button className="Acoes__remover " onClick={() => removerItem(index)}>remover</button>)
            } else {
                return null
            }
        }                   
  ```
                          
