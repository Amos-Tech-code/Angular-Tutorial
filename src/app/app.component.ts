import {Component, OnInit} from '@angular/core';
import {MessagesService} from "./services/messages.service";
import {LatestPrices, OrderBook, Student} from "./interfaces/data.interface";
import {Post} from "./interfaces/post.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessagesService]
})
export class AppComponent implements OnInit {

  title: string = 'Service and HttpClient Example';

  messages: string[] = [];
  posts: Post[] = [];

  constructor(private messagesService: MessagesService) {
    this.messages = messagesService.getMessages();
  }

  ngOnInit() {
    // this.messagesService.getPosts().subscribe((response) => {
    //   this.posts = response;
    // },
    // (error) => {
    //   console.error(error);
    // });

    this.messagesService.getPosts().subscribe({
        next: (response: Post[]) => {
          this.posts = response;
        },
        error: (error) => {
          console.error(error);
        },
      }
    )

    this.messagesService.getLanguages().subscribe({
        next: (response: string[]) => {
          console.log(response);
          //this.languages = response;
        },
        error: (error) => {
          console.error(error);
        },
      }
    )

    this.messagesService.getStudent().subscribe({
        next: (response: Student) => {
          console.log(response);
          //this.student = response;
        },
        error: (error) => {
          console.error(error);
        },
      }
    )

    this.messagesService.getBookOrders().subscribe({
        next: (response: OrderBook) => {
          console.log(response);
          //this.orderBook = response;
        },
        error: (error) => {
          console.error(error);
        },
      }
    )

    this.messagesService.getLatestPrices().subscribe({
        next: (latestPrices: LatestPrices) => {
          console.log(latestPrices);
          //this.latestPrices = latestPrices;
        },
        error: (error) => {
          console.error(error);
        },
      }
    )

  }



}
