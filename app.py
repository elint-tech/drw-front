from flask import Flask, render_template, url_for, request, redirect, json, jsonify
import json
import os
from pathlib import Path

#Instanciando o app.
app = Flask(__name__)

#Função que renderiza a página index original
@app.route('/')
def index():
    return render_template('index.html')

#Função de verificação do tipo do arquivo (.mp3) e redirect para devida página. 
@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['inputFile']
    #Se a extensão for .mp3:
    if Path(file.filename).suffix == '.mp3':
        #recupera dados do arquivo json
        filename = os.path.join(app.static_folder, 'data', 'json_test.json')
        #carrega o arquivo json
        with open(filename) as json_test:
            data = json.load(json_test)
        #e retorna um redirect para a página index2, contendo os dados do json dentro dela.
        return render_template('index2.html', data=data)
    #Se a extensão for qualquer outra além de .mp3:
    else:
        #retorna um redirect para a página de erro
        return render_template('erro.html')

#habilitando o debug
if __name__ == "__main__":
    app.run(debug=True)
    
#TO DO
#~ atualizar css para páginas index e index2 (botões, textos e centralização do conteúdo);
#~ tratar display do arquivo json;
#~ implementação de Help no cabeçalho (como um pop-up?);
#~ transformar a página de erro em um pop-up alert.