/* eslint-disable no-useless-catch */
import { Client, Account, ID } from "appwrite";
import conf from "../conf/Conf";

export class Authservice {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("appwrite Login Error", error);
    }
  }

  async logout() {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
}
}

const authService = new Authservice();

export default authService;
