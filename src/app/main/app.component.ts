import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Practice';

  password = ''
  correctPassword = 'test'

  color = 'red'

  products=[
    {
      sku: 'T-1209',
      name: 'T shirt',
      price: '220'
    },
    {
      sku: 'T-1210',
      name: 'Shoes',
      price: '120'
    }
  ]

  checkPass(){
    if(this.password === this.correctPassword){
      return true
    }else{
      return false
    }
  }

  addProduct(){
    this.products.push(
      {
        sku: 'C-1210',
        name: 'Cap',
        price: '1230'
      }
    )
  }

  deleteProduct(i:any){
    this.products.splice(i,1)
  }
}



// $ cd AngularPractice/

// $ ng serve
