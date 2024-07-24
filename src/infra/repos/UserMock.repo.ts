
import { IUserRepository } from "@app/interfases/IUserRepository";
import CryptoFunctions from "@common/helpers/CryptoFunctions";
import { MokUsers, TwoFA, User } from "@domain/Entities/User";
const mockData = require("../../mock/usermok.json");

/**
 * Persist users to file  
 * */
export default class UserMockRepository implements IUserRepository {
  SetUser: (userId: string, twoFA: TwoFA) => Promise<void>;
  private static MokUsers: MokUsers;

  private static async LoadUsers() {
    if (!UserMockRepository.MokUsers) UserMockRepository.MokUsers = mockData as MokUsers;
  }

  public async GetUserById(userId: string): Promise<User> {
    await UserMockRepository.LoadUsers();

    const user = UserMockRepository.MokUsers.users.find((p) => p.id === userId);
    return user;
  }

  public async FindByUserName(userName: string): Promise<User> {
    await UserMockRepository.LoadUsers();

    const user = UserMockRepository.MokUsers.users.find((p) => p.userName === userName);

    return user;
  }

  /**
 * Función para generar un hash de una contraseña
 * @param password
 * @returns Hassed Passwword
 */
  public async HassPassword(password: string): Promise<string> {
    const hash = await CryptoFunctions.HassPassword(password); // Generar el hash
    return hash;

  }

  /**
   *
   * @param password
   * @param hash
   * @returns
   */
  public async VerifyPassword(password: string, hash: string): Promise<boolean> {
    return await CryptoFunctions.VerifyPassword(password, hash);

  }
}
