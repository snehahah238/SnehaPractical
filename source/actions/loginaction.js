import axios from 'axios';

import Toast from 'react-native-simple-toast';
import { Actions } from 'react-native-router-flux';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';

export const client_login = (email, password) => {

  return async dispatch => {

    loadingstart(dispatch)

    let data = new FormData();

    data.append('email', email);   //text data in key value pair form
    data.append('password', password);
    data.append('device_type', 'android');
    data.append('device_id', 3);
    data.append('fcm_id', 1);
    data.append('ios_id', 2);

    console.log(data)

    axios.post('http://mbdbtechnology.com/projects/smarttrans/ws/Webservice_Client/login', data,
      { headers: { 'Authorization': 'delta141forceSEAL8PARA9MARCOSKATJRT', 'Content-Type': 'application/x-www-form-urlencoded' } })
      .then(function (response) {
        console.log(response.data)

        var user_data = response.data.user_data

        console.log("AAAAAAA", user_data)

        if (response.data.status == '200') {
          Actions.grocery()
          Toast.show("Login Succsessfully")
          loadingend(dispatch)

        } else {
          Toast.show("email or password is wrong")
          loginerror(error, dispatch)
        }

      }.bind(this))
      .catch(function (error) {
        console.log(error);
        loginerror(error, dispatch)
      }.bind(this));

  }

}


export const loadingstart = (dispatch) => {
  dispatch({
    type: LOADING_START,
  });
}

export const loadingend = (dispatch) => {
  dispatch({
    type: LOADING_END,
  });
}



export const loginsuccess = (responsedata, dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: responsedata
  });
}

export const getuserdata = (responsedata, dispatch) => {
  dispatch({
    type: GET_USER_DATA,
    payload: responsedata
  });
}


export const loginerror = (responsedata, dispatch) => {
  dispatch({
    type: LOGIN_ERROR,
    payload: responsedata
  });
}

