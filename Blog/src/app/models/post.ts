export class Post {
    static id:number = 0;
    postId:number;
    createdDate:Date;
    title:string;
    content:string;
    userId:string;
    headerImage:string;
    lastUpdated:Date;

    constructor(title:string, content:string, headerImage:string='') {
        this.postId = Post.id++;
        this.createdDate = new Date();
        this.title = title;
        this.content = content;
        this.userId = 'sampleUser';
        this.headerImage = headerImage;
        this.lastUpdated = this.createdDate;
    }
}
