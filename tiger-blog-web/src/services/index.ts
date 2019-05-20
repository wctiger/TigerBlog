/** Generate by swagger-axios-codegen */

import axiosStatic, { AxiosPromise, AxiosInstance } from 'axios';
export interface IRequestOptions {
  headers?: any;
}

interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
function axios(configs: IRequestConfig): AxiosPromise {
  return serviceOptions.axios
    ? serviceOptions.axios.request(configs)
    : axiosStatic(configs);
}

export class AuthService {
  /**
   *
   */
  static authenticate(
    params: {
      /**  */
      user?: User;
    } = <any>{},
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'post' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/Auth';

      configs.url = url;

      let data = { ...params['user'] };

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export class PostService {
  /**
   *
   */
  static get(
    params: {
      /**  */
      id: number;
    } = <any>{},
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/Post/{id}';
      url = url.replace('{id}', params['id'] + '');

      configs.url = url;

      let data = null;

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   *
   */
  static getSummary(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/Post/GetSummary';

      configs.url = url;

      let data = null;

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   *
   */
  static getAll(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/Post/GetAll';

      configs.url = url;

      let data = null;

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   *
   */
  static insert(
    params: {
      /**  */
      post?: Post;
    } = <any>{},
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'post' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/Post/Create';

      configs.url = url;

      let data = { ...params['post'] };

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   *
   */
  static delete(
    params: {
      /**  */
      id: number;
    } = <any>{},
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'delete' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/Post/Delete/{id}';
      url = url.replace('{id}', params['id'] + '');

      configs.url = url;

      let data = null;

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   *
   */
  static update(
    params: {
      /**  */
      post?: Post;
    } = <any>{},
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'put' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/Post/Update';

      configs.url = url;

      let data = { ...params['post'] };

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export class UserService {
  /**
   *
   */
  static getAll(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/User/GetAll';

      configs.url = url;

      let data = null;

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   *
   */
  static get(
    params: {
      /**  */
      id: number;
    } = <any>{},
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/User/{id}';
      url = url.replace('{id}', params['id'] + '');

      configs.url = url;

      let data = null;

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   *
   */
  static post(
    params: {
      /**  */
      user?: User;
    } = <any>{},
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'post' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/User/Create';

      configs.url = url;

      let data = { ...params['user'] };

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   *
   */
  static put(
    params: {
      /**  */
      user?: User;
    } = <any>{},
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'put' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/User/Update';

      configs.url = url;

      let data = { ...params['user'] };

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   *
   */
  static delete(
    params: {
      /**  */
      id: number;
    } = <any>{},
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'delete' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = '/api/User/Delete/{id}';
      url = url.replace('{id}', params['id'] + '');

      configs.url = url;

      let data = null;

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export class User {
  /**  */
  UserId: number;

  /**  */
  UserName: string;

  /**  */
  Password: string;

  /**  */
  IsAdmin: boolean;

  /**  */
  DisplayName: string;

  /**  */
  Email: string;

  /**  */
  CreatedTime: string;

  /**  */
  UpdatedTime: string;

  constructor(data?: any) {
    if (data) {
      this['UserId'] = data['UserId'];
      this['UserName'] = data['UserName'];
      this['Password'] = data['Password'];
      this['IsAdmin'] = data['IsAdmin'];
      this['DisplayName'] = data['DisplayName'];
      this['Email'] = data['Email'];
      this['CreatedTime'] = data['CreatedTime'];
      this['UpdatedTime'] = data['UpdatedTime'];
    }
  }
}

export class Post {
  /**  */
  PostId: number;

  /**  */
  Owner: number;

  /**  */
  Title: string;

  /**  */
  Summary: string;

  /**  */
  Content: string;

  /**  */
  IsArchived: boolean;

  /**  */
  CreatedTime: string;

  /**  */
  UpdatedTime: string;

  constructor(data?: any) {
    if (data) {
      this['PostId'] = data['PostId'];
      this['Owner'] = data['Owner'];
      this['Title'] = data['Title'];
      this['Summary'] = data['Summary'];
      this['Content'] = data['Content'];
      this['IsArchived'] = data['IsArchived'];
      this['CreatedTime'] = data['CreatedTime'];
      this['UpdatedTime'] = data['UpdatedTime'];
    }
  }
}
