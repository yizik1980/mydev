export class DialogData {
    constructor(component?: string,wide?:boolean) {
        this.componentName = component || '';
        this.show = !!component;
        this.wide = wide;
    }
    componentName: string;
    title: string;
    text: string;
    wide: boolean;
    show: boolean;
    src: string;
    innerTitle: string;
    callBackDialog: any;
    dynamicObject:unknown;
    close() {
        this.show = false;
    }
}
