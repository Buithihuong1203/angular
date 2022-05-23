import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 //nơi quản lý tất cả dữ liệu và logic của chức năng user
 formValues = {
   id: 0,
   name: '',
   age: 0,
   email: ''
 };

 users = [
  {
    id: 1,
    name:'huongbtph16610',
    age: 20,
    email: 'huongbtph16610@fpt.edu.vn',
    phone: '0335705742',
    avatar:'https://picsum.photos/50/50',
  },
  {
    id: 10,
    name:'huongbt1203',
    age: 19,
    email: 'huongbtph1203@fpt.edu.vn',
    phone: '0989097911',
    avatar:'https://picsum.photos/50/50'},
    {
      id: 10,
      name:'huongbt1',
      age: 21,
      email: 'huongbtph1@fpt.edu.vn',
      phone: '0989097911',
      avatar:'https://picsum.photos/50/50'},
];
onParentSubmit(formData: any) {
 //1.tìm ra id lớn nhaast
 const userId = this.users.map(users => users.id).sort((a,b)=> a-b);
 console.log(userId);
 const newId = userId[userId.length -1];

 //nếu formValues có id = 0 thì thêm mới =>vd là id: 2
 //nếu formValues có giá trị id != 0 thì chỉnh sửa -> 2
 if (this.formValues.id ==0) {
   //2.thêm vào mảng
 this.users.push({...formData, //giá trị con truyền sang
   id:newId +1});

 //nếu formValues có id!= 0 thì là chỉnh sửa
 }else{
   const idx = this.users.findIndex((user) => user.id === this.formValues.id)
   if (idx > -1) {
     this.users[idx] = {...formData,id:this.formValues.id}
   }
 }


}
onParentDelete(userId: Number) {
  this.users = this.users.filter(user => user.id !== userId);
}
onParentEdit(userId:number) {
  //1. tìm xem đâu là user được chỉnh sửa
  const editUser = this.users.find(user => user.id === userId);
  if(editUser) {
    return  this.formValues = {...editUser};
  }
    return  alert("Không tìm thấy user");


}
}
