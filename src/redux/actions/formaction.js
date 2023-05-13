
export const RECORD_FORM_REQUEST = 'RECORD_FORM_REQUEST';
export const RECORD_FORM_SUCCESS = 'RECORD_FORM_SUCCESS';
export const RECORD_FORM_FAILURE = 'RECORD_FORM_FAILURE';
export const SET_LOADING = "SET_LOADING"

export const recordFormRequest = (formData) => ({
  type: RECORD_FORM_REQUEST,
  payload: formData,
});

export const recordFormSuccess = (response) => ({
  type: RECORD_FORM_SUCCESS,
  payload: response,
});

export const recordFormFailure = (error) => ({
  type: RECORD_FORM_FAILURE,
  payload: error,
});