import { Component } from '@angular/core';
import { TopNavbarComponent } from '@app/components/top-navbar/top-navbar.component';
import { TodoComponent } from '@app/components/todo/todo.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [TopNavbarComponent, TodoComponent]
})
export class AppComponent {}
