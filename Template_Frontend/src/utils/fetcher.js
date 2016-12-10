import Project from './project'
export const HOST = process.env.REACT_APP_HOST || "http://localhost:3000";

const VERSION = 'v1'
export const API = `${HOST}/api/${VERSION}`;
export const API2 = 'http://private-492f0-virtualclassroom.apiary-mock.com';

export default class Fetcher {
  static jsonHeaders(headers) {
    const originalHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    return Object.assign(originalHeaders, headers)
  }

  static jsonGet(path, headers = {}) {
    return fetch(`${API}${path}`, {headers: Fetcher.jsonHeaders(headers)})
  }

  static jsonPost(path, body = {}, headers = {}) {
    if (Project.isDevelopment) {
      console.log(`POST ${path}`)
      console.log(body)
    }
    return fetch(`${API}${path}`, {
      method: 'POST',
      headers: Fetcher.jsonHeaders(headers),
      body: JSON.stringify(body)
    })
  }

  static jsonPatch(path, body = {}, headers = {}) {
    if (Project.isDevelopment) {
      console.log(`PATCH ${path}`)
      console.log(body)
    }
    return fetch(`${API}${path}`, {
      method: 'PATCH',
      headers: Fetcher.jsonHeaders(headers),
      body: JSON.stringify(body)
    })
  }

  static jsonDelete(path, headers = {}) {
    if (Project.isDevelopment) {
      console.log(`DELETE ${path}`)
    }
    return fetch(`${API}${path}`, {
      method: 'DELETE',
      headers: Fetcher.jsonHeaders(headers)
    })
  }
}
