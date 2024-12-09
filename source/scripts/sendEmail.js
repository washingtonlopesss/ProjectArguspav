async function reqHttp(formData) {
    try {
        const response = await fetch("https://send-email-api-gamma.vercel.app/enviar_email", {
            method: "POST",
            body: formData
        })
        return response.status
    } 
    catch (error) {
        return error
    }
}

document.getElementById('form-contato').addEventListener('submit', async (event) => {
    event.preventDefault()

    let elementosBtnContato = document.querySelectorAll('.btn-contato')

    elementosBtnContato.forEach(function(element) {
        element.setAttribute('disabled', true);
    })

    const formDataValues = {
        nome: document.getElementById('nome_contato').value,
        email: document.getElementById('email_contato').value,
        telefone: document.getElementById('telefone_contato').value,
        empresa: document.getElementById('empresa_contato').value,
        mensagem: document.getElementById('mensagem_orcamento').value
    }

    const contentHTML = htmlContentContact(formDataValues)

    const formData = new FormData()
    formData.append("to", "washington.lopes@nwadv.com.br")
    formData.append("subject", "CONTATO VIA WEBSITE")
    formData.append("html", contentHTML)

    const response = await reqHttp(formData)

    if (response == 200) {
        window.location.href = "./sendConfirmation.html"
    }
    else {
        elementosBtnContato.forEach(function(element) {
            element.setAttribute('disabled', false);
        })

        alert(response)
    }       
})

document.getElementById('form-orcamento').addEventListener('submit', async (event) => {
    event.preventDefault()

    let elementosBtnContato = document.querySelectorAll('.btn-contato')

    elementosBtnContato.forEach(function(element) {
        element.setAttribute('disabled', true);
    })

    const formDataValues = {
        nome: document.getElementById('nome_orcamento').value,
        cargo: document.getElementById('cargo_orcamento').value,
        razaoSocial: document.getElementById('razao_social_orcamento').value,
        cnpj: document.getElementById('cnpj_orcamento').value,
        telefone: document.getElementById('telefone_orcamento').value,
        email: document.getElementById('email_orcamento').value,
        mensagem: document.getElementById('mensagem_orcamento').value
    }

    const contentHTML = htmlContentBudget(formDataValues)

    const formData = new FormData()
    formData.append("to", "washington.lopes@nwadv.com.br")
    formData.append("subject", "SOLICITAÇÃO DE ORÇAMENTO")
    formData.append("html", contentHTML)

    const response = await reqHttp(formData)

    if (response == 200) {
        window.location.href = "./sendConfirmation.html"
    }
    else {
        elementosBtnContato.forEach(function(element) {
            element.setAttribute('disabled', false);
        })

        alert(response)
    }
})

document.getElementById('form-locacao').addEventListener('submit', async (event) => {
    event.preventDefault()

    let elementosBtnContato = document.querySelectorAll('.btn-contato')

    elementosBtnContato.forEach(function(element) {
        element.setAttribute('disabled', true);
    })

    const formDataValues = {
        nome: document.getElementById('nome_locacao').value,
        telefone: document.getElementById('telefone_locacao').value,
        email: document.getElementById('email_locacao').value,
        equipamento: document.getElementById('equipamento_locacao').value
    }

    const contentHTML = htmlContentRental(formDataValues)

    const formData = new FormData()
    formData.append("to", "washington.lopes@nwadv.com.br")
    formData.append("subject", "LOCAÇÃO DE EQUIPAMENTOS")
    formData.append("html", contentHTML)

    const response = await reqHttp(formData)

    if (response == 200) {
        window.location.href = "./sendConfirmation.html"
    }
    else {
        elementosBtnContato.forEach(function(element) {
            element.setAttribute('disabled', false);
        })

        alert(response)
    }
})

document.getElementById('form-trabalhe-conosco').addEventListener('submit', async (event) => {
    event.preventDefault()

    let elementosBtnContato = document.querySelectorAll('.btn-contato')

    elementosBtnContato.forEach(function(element) {
        element.setAttribute('disabled', true);
    })

    const formDataValues = {
        nome: document.getElementById('nome_trabalho').value,
        dataNascimento: document.getElementById('data_nascimento_trabalho').value,
        sexo: document.getElementById('sexo_trabalho').value,
        estadoCivil: document.getElementById('estado_civil_trabalho').value,
        linkedin: document.getElementById('linkedin_trabalho').value,
        email: document.getElementById('email_trabalho').value,
        telefone: document.getElementById('telefone_trabalho').value,
        qualificacoes: document.getElementById('qualificacoes_trabalho').value,
        experiencias: document.getElementById('experiencias_trabalho').value,
        observacoes: document.getElementById('observacoes_trabalho').value
    }
    
    const contentHTML = htmlContentWorks(formDataValues)

    const formData = new FormData()
    formData.append("to", "washington.lopes@nwadv.com.br");
    formData.append("subject", "TRABALHE CONOSCO");
    formData.append("html", contentHTML);

    const fileInput = document.getElementById('file-upload')
    if (fileInput.files.length > 0) {
        formData.append("attachment", fileInput.files[0])
    }

    const response = await reqHttp(formData)

    if (response == 200) {
        window.location.href = "./sendConfirmation.html"
    }
    else {
        elementosBtnContato.forEach(function(element) {
            element.setAttribute('disabled', false);
        })

        alert(response)
    }
})