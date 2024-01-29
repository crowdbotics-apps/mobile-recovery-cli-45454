import axios from "axios"
const mobilerecoverycliAPI = axios.create({
  baseURL: "https://mobile-recovery-cli-45454.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return mobilerecoverycliAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return mobilerecoverycliAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return mobilerecoverycliAPI.post(`/api/v1/signup/`, payload)
}
function modules_payments_get_payments_history_retrieve(payload) {
  return mobilerecoverycliAPI.get(`/modules/payments/get_payments_history/`)
}
function modules_payments_get_payments_methods_retrieve(payload) {
  return mobilerecoverycliAPI.get(`/modules/payments/get_payments_methods/`)
}
function modules_payments_payment_sheet_create(payload) {
  return mobilerecoverycliAPI.post(`/modules/payments/payment_sheet/`)
}
function modules_terms_and_conditions_list(payload) {
  return mobilerecoverycliAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return mobilerecoverycliAPI.post(`/modules/terms-and-conditions/`, payload)
}
function modules_terms_and_conditions_retrieve(payload) {
  return mobilerecoverycliAPI.get(
    `/modules/terms-and-conditions/${payload.id}/`
  )
}
function modules_terms_and_conditions_update(payload) {
  return mobilerecoverycliAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return mobilerecoverycliAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_destroy(payload) {
  return mobilerecoverycliAPI.delete(
    `/modules/terms-and-conditions/${payload.id}/`
  )
}
function rest_auth_login_create(payload) {
  return mobilerecoverycliAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return mobilerecoverycliAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return mobilerecoverycliAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return mobilerecoverycliAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return mobilerecoverycliAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload
  )
}
function rest_auth_registration_create(payload) {
  return mobilerecoverycliAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return mobilerecoverycliAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return mobilerecoverycliAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return mobilerecoverycliAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return mobilerecoverycliAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return mobilerecoverycliAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_payments_get_payments_history_retrieve,
  modules_payments_get_payments_methods_retrieve,
  modules_payments_payment_sheet_create,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
