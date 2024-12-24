function htmlContentWorks(formDataValues) {

    const _dataNascimento = new Date(formDataValues.dataNascimento)
    const dataNascimentoFormat = _dataNascimento.toLocaleDateString("pt-BR");

    const formatarQuebrasDeLinha = (texto) => {
        return texto.replace(/\n/g, '<br>');
    }

    const email = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Corpo do E-mail</title>
            <style>
                * {
                    box-sizing: border-box;
                }
                body {
                    font-family: Arial, sans-serif;
                    color: #333;
                    margin: 0;
                    padding: 0;
                    background-color: transparent;
                }
                .email-container {
                    width: 100%;
                    margin: 0 auto;
                    padding: 10px;
                }
                h1 {
                    color: #1A330E;
                }
                p {
                    line-height: 1.6;
                }
                .parag {
                    all: unset;
                    margin: 0;
                    padding: 0;
                }
                tr {
                    border: 2px solid #54694a;
                    border-bottom: none;
                    display: flex;
                    align-items: start;
                }
                table {
                    width: 100%;
                }
                td {
                    padding: 10px;
                }
                .ult {
                    border-bottom: 2px solid #54694a;
                }
                .footer {
                    font-size: 12px;
                    color: #777;
                    margin-top: 20px;
                }
                .footer a {
                    color: #777;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <h1>Trabalhe conosco</h1>
                <p>Olá,</p>
                <p>Espero que esteja bem.</p>
                <p>Aqui estão as informações enviadas pelo Formulário do nosso site oficial.</p>
                <table>
                    <tr>
                        <td><strong>Nome:</strong></td>
                        <td>${formDataValues.nome}</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>
                            <a href="mailto:${formDataValues.email}">${formDataValues.email}</a>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Telefone:</strong></td>
                        <td>${formDataValues.telefone}</td>
                    </tr>
                    <tr>
                        <td><strong>Data de Nascimento:</strong></td>
                        <td>${dataNascimentoFormat}</td>
                    </tr>
                    <tr>
                        <td><strong>Sexo:</strong></td>
                        <td>${formDataValues.sexo.charAt(0).toUpperCase() + formDataValues.sexo.slice(1)}</td>
                    </tr>
                    <tr>
                        <td><strong>Estado Civil:</strong></td>
                        <td>${formDataValues.estadoCivil.charAt(0).toUpperCase() + formDataValues.estadoCivil.slice(1)}</td>
                    </tr>
                    <tr>
                        <td><strong>Linkedin:</strong></td>
                        <td><a href="${formDataValues.linkedin}">${formDataValues.linkedin}</a></td>
                    </tr>
                    <tr>
                        <td><strong>Resumo das Qualificações:</strong></td>
                        <td><p class="parag">${formatarQuebrasDeLinha(formDataValues.qualificacoes)}</p></td>
                    </tr>
                    <tr>
                        <td><strong>Resumo de Experiências:</strong></td>
                        <td><p class="parag">${formatarQuebrasDeLinha(formDataValues.experiencias)}</p></td>
                    </tr>
                    <tr class="ult">
                        <td><strong>Outras Observações:</strong></td>
                        <td><p class="parag">${formatarQuebrasDeLinha(formDataValues.observacoes)}</p></td>
                    </tr>
                </table>
                <div class="footer">
                    <p>Este é um e-mail gerado automaticamente. Por favor, não responda.</p>
                    <p>Visite nosso site: <a href="https://www.arguspav.com">www.arguspav.com</a></p>
                </div>
            </div>
        </body>
        </html>
    `

    return email
}