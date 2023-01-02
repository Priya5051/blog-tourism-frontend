export class User
{
  public userId:number ;
  public userName:string;
  public userPassword:string;
  public userEmail:string;
  public dob:Date;
  public about:string;
  public userRole:string;


  constructor(userId:any,userName:any,userPassword:any,userEmail:any, dob:any, about:any, userRole:any)
  {
    this.userId=userId;
    this.userName=userName;
    this.userEmail=userEmail;
    this.userPassword=userPassword;
    this.dob=dob;
    this.about=about;
    this.userRole=userRole;
  }
}