import { message } from "antd"

const susscess = (mes = 'Sucess') => {
    message.success(mes);
}

const error = (mes = 'Error') => {
    message.error(mes);
}

const warning = (mes = 'Warning') => {
    message.warning(mes);
}

export { susscess, error, warning }