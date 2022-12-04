export class Post {
    postId:number;
    createdDate:Date;
    title:string;
    content:string;
    userId:string;
    headerImage:string;
    lastUpdated:Date;

    constructor(title:string, content:string, headerImage:string='') {
        this.postId = 0;
        this.createdDate = new Date();
        this.title = title;
        this.content = content;
        this.userId = '';
        this.headerImage = headerImage;
        this.lastUpdated = this.createdDate;
    }
}
