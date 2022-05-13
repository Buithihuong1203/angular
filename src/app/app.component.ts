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


}
