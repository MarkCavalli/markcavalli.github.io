export enum JobType {
    Work = 1,
    Pet = 2
}

export interface WorkItemData {
    type: JobType;
    title: string;
    position?: string;
    fromDate: ShortDate;
    toDate: ShortDate;
    tags: string[];
}
  
export interface ShortDate {
    year: number;
    month: number;
}

export const tagColor = new Map([
    ['html', '#e34c26'],
    ['css', '#563d7c'],
    ['scss', 'hotpink'],
    ['javascript', 'gold'],
    ['typescript', '#3178c6'],
    ['nodejs', 'green'],
    ['json', 'gold'],
    ['jquery', '#0769ad'],
    ['angular', '#DD0031'],
    ['vue', '#41b883'],
    ['vuex', '#41b883'],
    ['vuerouter', '#41b883'],
    ['postgres', '#336791'],
    ['sql', '#e38c00'],
    ['mongodb', '#023430'],
    ['react', '#61dafb'],
    ['websockets', '#25c2a0'],
    ['docker', '#003f8c'],
    ['kafka', '#A9CBD4'],
    ['microservices', 'orange'],
    ['chrome-extension', '#1967d2'],
    ['mysql', '#3E6E93'],
    ['cordova', '#3992ab'],
]);

export const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const monthNameShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];