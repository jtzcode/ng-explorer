export class Item {
    title: string;
    id: string;

    constructor(id: string, title: string) {
        this.title = title;
        this.id = id;
    }

    setTitle(title: string) {
        this.title = title;
    }
};