import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
    title = 'ang_calculator';
    
    calValue: number = 0;
    funcT: any = 'NoFunction';

}
