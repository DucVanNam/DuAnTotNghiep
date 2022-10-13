import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datvexe',
  templateUrl: './datvexe.component.html',
  styleUrls: ['./datvexe.component.scss']
})
export class DatvexeComponent implements OnInit {

  data = [
    {
      id: 1,
      name: 'Chuyến xe số 1',
      diemdi: 'Hà Nội',
      diemtoi: 'Lào Cai',
      loaixe: '16 chỗ'
    },
    {
      id: 2,
      name: 'Chuyến xe số 2',
      diemdi: 'Hà Nội',
      diemtoi: 'Bắc Giang',
      loaixe: '30 chỗ'
    },
    {
      id: 3,
      name: 'Chuyến xe số 3',
      diemdi: 'Hà Nội',
      diemtoi: 'Hải Phòng',
      loaixe: '30 chỗ'
    },
    {
      id: 4,
      name: 'Chuyến xe số 4',
      diemdi: 'Hà Nội',
      diemtoi: 'Quảng Ninh',
      loaixe: '16 chỗ'
    },
    {
      id: 5,
      name: 'Chuyến xe số 5',
      diemdi: 'Hà Nội',
      diemtoi: 'Cần Thơ',
      loaixe: '30 chỗ'
    }
  ];
  isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleCancel() {
    this.isVisible = false;
  }
  handleOk() {
    this.isVisible = false;
  }
  test(item: any) {
    console.log('data', item);
    this.isVisible = true;
  }

  isLoadingOne = false;

  loadOne(item: any) {
    if (this.data[item].id) {
      this.isLoadingOne = true;
      setTimeout(() => {
        this.isLoadingOne = false;
      }, 5000);
    }

  }
}
