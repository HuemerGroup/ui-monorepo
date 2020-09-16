declare module "*.json" {
    const path: string;
    export default path;
}
declare module "*.scss" {
    const path: string;
    export default path;
}
declare module "*.css" {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module "*.svg" {
    const path: string;
    export default path;
}
declare module "*.jpg" {
    const path: string;
    export default path;
}
declare module "*.png" {
    const path: string;
    export default path;
}
