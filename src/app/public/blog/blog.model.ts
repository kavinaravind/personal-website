export class Blog {

    public title: string;
    public category: string;
    public date: string;
    public imagePath: string;
    public shortDescription: string;
    public blogText: string;

    constructor(title: string, category: string, 
                date: string, imagePath: string, 
                shortDescription: string, blogText: string) {

        this.title = title;
        this.category = category;
        this.date = date;
        this.imagePath = imagePath;
        this.shortDescription = shortDescription;
        this.blogText = blogText;
    }
}