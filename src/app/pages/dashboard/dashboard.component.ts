import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  //trạng thái 0 chưa chọn, trạng thái 1 đang chọn, trạng thái 2 ghế đã được mua
  data = [
    {
      id: 1,
      trangthai: 0
    },
    {
      id: 2,
      trangthai: 0
    },
    {
      id: 3,
      trangthai: 2
    },
    {
      id: 4,
      trangthai: 0
    },
    {
      id: 5,
      trangthai: 2
    },
    {
      id: 6,
      trangthai: 2
    },
    {
      id: 7,
      trangthai: 2
    },
    {
      id: 8,
      trangthai: 2
    },
    {
      id: 9,
      trangthai: 0
    },
    {
      id: 10,
      trangthai: 2
    },
    {
      id: 11,
      trangthai: 2
    },
    {
      id: 12,
      trangthai: 2
    },
    {
      id: 13,
      trangthai: 0
    },
    {
      id: 14,
      trangthai: 2
    },
    {
      id: 15,
      trangthai: 0
    },
    {
      id: 16,
      trangthai: 0
    }
  ];
  ngOnInit(): void {

  }
  chuyenMau(item: any) {

    if (this.data[item].trangthai == 1)
      this.data[item].trangthai = 0;
    else
      this.data[item].trangthai = 1;
  }

}
