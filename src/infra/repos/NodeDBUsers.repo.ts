
import { IUserRepository } from "@app/interfases/IUserRepository";
import { MokUsers, TwoFA, User } from "@domain/Entities/User";
import { compare, hash, hashSync } from "bcryptjs";
import { JsonDB, Config } from 'node-json-db';

/**
 * Persist users to file  
 * */
export default class NodeDBUsersRepository implements IUserRepository {

  private db: JsonDB;

  constructor() {
    const dbPath = require('path').resolve(__dirname, '../../../mock/usermok.json');
    this.db = new JsonDB(new Config(dbPath, true, true, '/', true));

  }


  public async GetUserById(userId: string): Promise<User> {

    try {
      const mock: MokUsers = await this.db.getData("/");

      const user = await mock.users.find(user => user.id === userId);
      return user;
    } catch (error) {
      throw new Error(`User with userName ${userId} not found`);
    }

  }

  public async FindByUserName(userName: string): Promise<User> {

    try {

      const mock: MokUsers = await this.db.getData("/");

      const user = await mock.users.find(user => user.userName === userName);

      return user;
    } catch (error) {
      throw new Error(`User with userName ${userName}not found\n${error}`);
    }

  }
  public async SetUser(userId: string, twoFA: TwoFA): Promise<void> {

    try {
      const mock: MokUsers = await this.db.getData("/");

      const userIndex = mock.users.findIndex(user => user.id === userId);

      if (userIndex !== -1) {
        mock.users[userIndex].twoFA = twoFA;
        await this.db.push("/users", mock.users);
      } else {
        throw new Error(`User with id ${userId} not found`);
      }

    } catch (error) {
      throw new Error(`Error updating twoFA for user with id ${userId}: ${error.message}`);
    }


  }
  /**
   *
   * @param password
   * @returns Hassed Passwword
   */
  public HassPassword(password: string): Promise<string> {
    //  Salt length to generate or salt to use, default to 10
    const saltWorkFactor = 12;
    return hash(password, saltWorkFactor);
  }

  /**
   *
   * @param password
   * @param hash
   * @returns
   */
  public async VerifyPassword(password: string, hash: string): Promise<boolean> {

    return compare(password, hash);
  }
}
