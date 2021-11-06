export enum DispatchActionType {
  AUTH_REGISTER = "AUTH_REGISTER",
  AUTH_LOGIN = "AUTH_LOGIN",
  AUTH_LOGIN_TOKEN = "AUTH_LOGIN_TOKEN",
  AUTH_VERIFY = "AUTH_VERIFY",
  USER_STATUS = "GET_APP_STATUS",
  SPONSORS_LIST = "SPONSORS_LIST",
  // Application form
  APPLICATION_UPLOAD_RESUME = "APPLICATION_UPLOAD_RESUME",
  // Trigger application section validation
  APPLICATION_VALIDATE_BASIC = "APPLICATION_VALIDATE_BASIC",
  APPLICATION_VALIDATE_ESSAY = "APPLICATION_VALIDATE_ESSAY",
  APPLICATION_VALIDATE_EXPERIENCE = "APPLICATION_VALIDATE_EXPERIENCE",
  APPLICATION_VALIDATE_LOGISTICS = "APPLICATION_VALIDATE_LOGISTICS",
  APPLICATION_VALIDATE_PORTFOLIO = "APPLICATION_VALIDATE_PORTFOLIO",
  APPLICATION_VALIDATE_SCHOOL = "APPLICATION_VALIDATE_SCHOOL",
  APPLICATION_VALIDATE_WORK_AUTH = "APPLICATION_VALIDATE_WORK_AUTH",
  // Save application section data
  APPLICATION_SAVE_BASIC = "APPLICATION_SAVE_BASIC",
  APPLICATION_SAVE_ESSAY = "APPLICATION_SAVE_ESSAY",
  APPLICATION_SAVE_EXPERIENCE = "APPLICATION_SAVE_EXPERIENCE",
  APPLICATION_SAVE_LOGISTICS = "APPLICATION_SAVE_LOGISTICS",
  APPLICATION_SAVE_PORTFOLIO = "APPLICATION_SAVE_PORTFOLIO",
  APPLICATION_SAVE_SCHOOL = "APPLICATION_SAVE_SCHOOL",
  APPLICATION_SAVE_WORK_AUTH = "APPLICATION_SAVE_WORK_AUTH"
}
