export class ListGroupItem {
    openingTag = "<li class='list-group-item boxShadowLI'>";
    closingTag = "</li>";
    innerHTML = "";
    
    constructor(content="") {
        this.innerHTML = content;
    }
    
    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }

}


