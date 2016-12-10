export default class Project {
  static isDevelopment = (process.env.NODE_ENV === "development")
  static isProduction = (process.env.NODE_ENV === "production")
}
