import Axios from "axios";
import config from '@/assets/ipconfig'

class Server {
  constructor() {
    this.$ajax = Axios.create({
      // baseURL: "http://47.110.42.170:4098",
      // baseURL: 'http://47.107.148.76:4096',
      // baseURL: 'http://localhost:4096',
      baseURL: config.type + config.ip,
      timeout: "3000",
      headers: {
        "X-Custom-Header": "foobar"
      }
    });
  }

  async get(uri, data) {
    return new Promise((resolve, reject) => {
      this.$ajax
        .get(uri, {
          params: data
        })
        .then(res => {
          return resolve(res.data);
        })
        .catch(res => {
          return reject(res.data);
        });
    });
  }

  async post(uri, data) {
    return new Promise((resolve, reject) => {
      this.$ajax
        .post(uri, data)
        .then(res => {
          return resolve(res.data);
        })
        .catch(res => {
          return reject(res.data);
        });
    });
  }

  async put(uri, data) {
    return new Promise((resolve, reject) => {
      this.$ajax
        .put(uri, data)
        .then(res => {
          return resolve(res.data);
        })
        .catch(res => {
          return reject(res.data);
        });
    });
  }
}

export default Server;