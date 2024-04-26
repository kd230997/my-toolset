export class MenuItem {
  icon: JSX.Element;
  title: string;

  constructor(icon: JSX.Element, title: string) {
    this.icon = icon;
    this.title = title;
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