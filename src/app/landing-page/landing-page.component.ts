import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.loader();
    // setTimeout(()=>this.router.navigate(['/booking']),2000);
    // this.router.navigate(['/booking']);
  }

  loader()
  {
    setTimeout(function() {
    for(var i=1;i<5;i++){
         var element = document.getElementById("landing"+i);
        element.classList.add("done");
    }
  
  setTimeout(function() {
    for(var i=1;i<5;i++){
         var element = document.getElementById("landing"+i);
        element.classList.add("page");
        
    }
    
    setTimeout(function() {
      var el = document.getElementById("pageLoad");
      el.classList.add('off');
  	}, 500)
  }, 500)
}, 1500);
console.log("anii");
  }

}
