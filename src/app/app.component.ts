import { Component, isDevMode } from '@angular/core';
import { TopNavbarComponent } from '@app/components/top-navbar/top-navbar.component';
import { TodoComponent } from '@app/components/todo/todo.component';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@env';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [TopNavbarComponent, TodoComponent]
})
export class AppComponent {

	constructor(private translate: TranslateService, private title: Title, private meta: Meta) {
        console.log("get env");
        console.log(isDevMode());
        console.log(environment.production);
    }

    onInit() {
        this.translate.get(['app.metadata.title', 'app.metadata.description']).subscribe((res: any) => {
			this.title.setTitle(res['app.metadata.title']);
			this.meta.addTag({ name: 'description', content: res['app.metadata.description']});
		});
    }

}
