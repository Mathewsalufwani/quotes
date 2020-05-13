export class Quote {
  showDescription: boolean;
  constructor(public quote: string,public upvote: number,public downvote: number,public description: string, public author: string){
    this.showDescription=false;
  }
}
