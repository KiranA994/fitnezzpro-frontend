import { serverUrl } from "./baseUrl"
import { commonAPI } from "./commonAPI"

// register

export const registerApi = async(reqBody) => {
    return await commonAPI('POST',`${serverUrl}/user/register`,reqBody,"")
}

// login

export const loginApi = async(reqBody) => {
    return await commonAPI('POST', `${serverUrl}/user/login`,reqBody,"")
}

// card Payment

export const makePaymentApi = async(reqBody,reqHeader) => {
    return await commonAPI('POST', `${serverUrl}/payment`, reqBody,reqHeader)
}