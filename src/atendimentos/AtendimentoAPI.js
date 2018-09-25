export class AtendimentoAPI {

    _atendimentos_database = [
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "CONFIRMADO" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "CONFIRMADO" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "PENDENTE" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "CONFIRMADO" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "CONFIRMADO" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "CANCELADO" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "CONFIRMADO" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "CONFIRMADO" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "CONFIRMADO" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "CANCELADO" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "CANCELADO" },
        { "id": Math.random().toString(36).substr(2, 9), "passageiro": "João da Silva", "origem": "Av. Antonio Gomes, 312", "destino": "Rua dos Pinheiros, 133", "horario": "01/09/2018 às 13:00", "situacao": "PENDENTE" }
    ]

    findAll() {
        return this._atendimentos_database;
    }

}