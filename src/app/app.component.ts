import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-App';
  storedPosts=[];

  onPostAdded(post: any){
    this.storedPosts.push(post);
  }
}
