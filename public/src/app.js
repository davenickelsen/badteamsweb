export class App {
  configureRouter(config, router){
    config.title = 'Bad Teams';
    config.map([
      { route: ['','home'],  name: 'home',  moduleId: './home',  nav: false, title:'Bad Teams' },
    ]);

    this.router = router;
  }
}