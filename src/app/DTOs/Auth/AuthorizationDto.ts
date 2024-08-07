export class AuthenticationReq {

  public userName: string;
  public password: string;
  public grant_type: string;

  /**allows to identify user data store o */
  public client_id: string;
  //public  client_secret :string;
  public refresh_token?: string;

  public twoFACode? : string
}

export class AuthenticationRes {
  public access_token: string;
  public refresh_token: string;


}

