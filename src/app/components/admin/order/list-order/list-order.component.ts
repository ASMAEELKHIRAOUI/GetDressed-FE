import { Component } from '@angular/core';
import { Order } from '../../../../modals/order';
import { OrderService } from '../../../../services/order/order.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-order',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-order.component.html',
  styleUrl: './list-order.component.css'
})
export class ListOrderComponent {

  orders: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
    })
  }

  deleteOrder(id: number | undefined): void {
    if (id) {
      this.orderService.deleteOrder(id)
        .subscribe({
          next: (res) => {
            console.log(res);
            window.location.reload();
          },
          error: (e) => console.error(e)
        });
    }
  }

  editOrder(id: number | undefined): void {
    if (id) {
      console.log('Order id:', id);
      this.router.navigate(['/dashboard/order/edit', id]);
    }
  }

}
