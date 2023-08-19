import { showMessage } from 'react-native-flash-message'

const showError = message => {
  showMessage({
    type: 'danger',
    icon: 'danger',
    backgroundColor:'darkred',
    message,
  })
}

const showSuccess = message => {
  showMessage({
    type: 'success',
    icon: 'success',
    backgroundColor:'#1478A8',

    message,
  })
}

export  { showError, showSuccess }