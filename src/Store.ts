type UserId=string;
interface Chat {
  userId: string;
  name:string;
  message:string;
  upvotes:UserId[];
}

export class Store{
  constructor(){

  }
  initRoom(){

  }
  getChats(room:string,limit:number,offset:number){

  }

}