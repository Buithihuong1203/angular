import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_web16304';

  //phần logic, định nghĩa giá trị biến và sử dụng ở html

  //kiểu dữ liệu mảng


  teachers = [
    {
      id: 1,
      name: " tuannda3",
      age: 23,
      gender: 1,
      avatar: "https://picsum.photos/50/50",
      status: 1

    },
    {
      id: 1,
      name: " tuannda1",
      age: 32,
      gender: 0,
      avatar: "https://picsum.photos/50/50",
      status: 0

    },
    {
      id: 1,
      name: " tuannda2",
      age: 30,
      gender: 1,
      avatar: "https://picsum.photos/50/50",
      status: 0

    }
  ];
  studentName = " huongbt";
  studentId = "123456";

  inputValues={
    name: '',
    age: '',
    gender: '0',
    avatar: '',
    status: '1'
  };
   // onInputName(event:any, info: string){
   //   this.inputValues.name = event.target.value;
   // }
   // onInputAge(event:any, info: string){
   //   this.inputValues.age = event.target.value;
   // }

   //key: 'name' | 'age', key chỉ được là giá trị name, age
   onInput(event:any, key: 'name' | 'age' |'gender' | 'avatar'| 'status'){
     this.inputValues[key] = event.target.value;
   }
   //sự kiện click nút submit form
   onSubmit(){
     console.log(this.inputValues)
     // thêm dữ liệu thao tác với form vào mảng teachers
     this.teachers.push({...this.inputValues,
                         age:+this.inputValues.age,// đưa age từ chuỗi về số
                         gender: +this.inputValues.gender,
                         status: +this.inputValues.status,
                         id:this.teachers.length + 1
                       });
     //cập nhật lại giá trị input của form
     this.inputValues ={
       name:'',
       age:'',
       gender:'0',
       avatar :'',
       status: '1'
     }
   }
 }


