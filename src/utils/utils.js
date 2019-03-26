export function reponseData (data, err_code = 0, err_msg = '成功') {
    return {
        err_code: err_code,
        err_msg: err_msg,
        data: data
    }
}