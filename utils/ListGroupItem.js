
debugger;
export class ListGroupItem {
    openingTag = "<li class='list-group-item boxShadowLI'>";
    closingTag = "</li>";
    innerHTML = "";
    
    constructor(content="") {debugger;
        this.innerHTML = content;
    }
    
    toString() {debugger;
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }

}


