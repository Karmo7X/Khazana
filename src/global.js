
import Cookies from 'js-cookie'

export const baseurl =`https://server.khezanatalkutub.com/api/v1`
export const  token =Cookies.get('token')
export const lang=localStorage.getItem('selectedLanguage')