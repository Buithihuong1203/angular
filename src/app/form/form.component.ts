import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputValues ={
    id:0,
    name:'',
    age: 0,
    email: '',
    phone:'',
    avatar:''
  }

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
  ]
  onSubmit(userForm:NgForm){
    //1.tìm ra id lớn nhaast
    const userId = this.users.map(users => users.id).sort((a,b)=> a-b);
    console.log(userId);
    const newId = userId[userId.length -1];

    //nếu inputValue có id = 0 thì thêm mới
    if (this.inputValues.id ==0) {
      //2.thêm vào mảng
    this.users.push({...userForm.value, id:newId +1});

    //nếu inputValue có id!= 0 thì là chỉnh sửa
    }else{
      const idx = this.users.findIndex((user) => user.id === this.inputValues.id)
      if (idx > -1) {
        this.users[idx] = {...userForm.value,id:this.inputValues.id}
      }
    }

    //3. cập nhật lại giá trị ban đầu
    userForm.resetForm({
      name: '',
      age:0,
      email:'',
      phone:'',
      avatar:''
    });

  }

  onDelete(userId: number){
    this.users = this.users.filter((user) => user.id !== userId)
  }

  onEdit(userId: number){
    //1.tìm ra user có id là userId truyền vào
    const editUser = this.users.find((user) => user.id === userId)
    //2: nếu tìm ra thì gán giá trị lên form
    if (editUser) {
      this.inputValues = {...editUser};
    }
  }
}
