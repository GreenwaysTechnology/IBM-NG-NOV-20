//2.decorator with params
// function Course(courseName:any) {
//     return function(target:any){
//         Object.defineProperty(target.prototype, "subject", {
//             value: courseName
//         });
//     }

// }

// @Course('Type Script with Angular')
// class Student {
//     constructor(public name: string = '') { }
// }
// let student = new Student('Subramanian') as any;
// console.log(`Student ${student.name} ${student.subject}`);


function Course(course: any) {
    return function (target: any) {
        Object.defineProperty(target.prototype, "course", {
            value: course
        });
    }

}

@Course({ name: 'Angular', author: 'Misko', duration: '3 days', level: 'basic' })
class Student {
    constructor(public name: string = '') { }
}
let student = new Student('Subramanian') as any;
console.log(`Student ${student.name} ${student.course.author}`);
console.dir(student)