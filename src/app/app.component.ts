import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sahara OSD';
  ViewBag = {
    Role: null,
    Name: "Admin"
  }
  session = {
    SessionId: null,
    SocietyName: ""
  }

  constructor(private translate: TranslateService,){
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: any) {
    this.translate.use(lang);
  }
  
  depositorLogout(){
    // this.authenticationService.depositorLogout(this.currentUser.id).pipe(first()).subscribe({
    //   next: (response :any) => {
    //     if(response != null){
    //       sessionStorage.removeItem('currentUser');
    //       this.authenticationService.loginEvent.emit();
    //       this.router.navigate(['/depositor/login']);
    //     }
    //   },
    //   error: () => {
        
    //   }
    // })
  }
}
