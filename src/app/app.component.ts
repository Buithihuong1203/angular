import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_web16304';

  //phần logic, định nghĩa giá trị biến và sử dụng ở html
  name = 'huongbtph16610';
  age = '20';
  //kiểu dữ liệu mảng
  students = [
    {
      id: '1',
      name: 'student 1',
      status: 0
    },
    {
      id: '2',
      name: 'student 2',
      status: 1

    }
  ];

}
