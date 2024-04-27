export class MenuItem {
  iconComponent: JSX.Element;
  title: string;
  linkable?: boolean;
  linkURL?: string;

  constructor(iconComponent: JSX.Element, title: string, linkable: boolean = false, linkURL: string) {
    this.iconComponent = iconComponent;
    this.title = title;
    this.linkable = linkable;
    this.linkURL = linkURL;
  }
}

export class SectionMenu {
    title: string;
    listItems: Array<MenuItem>;

    constructor(title: string, listItems: Array<MenuItem>) {
        this.title = title;
        this.listItems = listItems;
    }
}