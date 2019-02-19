var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/detail/',
      url: 'detail.html',
    },
    {
      path: '/program/',
      url: 'program.html',
    },
    {
      path: '/participants/',
      url: 'participants.html',
    },
    {
      path: '/participants_roses/',
      url: 'participants_roses.html',
    },
    {
      path: '/participants_candles/',
      url: 'participants_candles.html',
    },
    {
      path: '/participants_bills/',
      url: 'participants_bills.html',
    },
    {
      path: '/map/',
      url: 'map.html',
    },

    {
      path: '/attire/',
      url: 'attire.html',
    },

    {
      path: '/food/',
      url:  'food.html',
    },
    {
      path: '/developers/',
      url:  'developers.html',
    },
  ],
  // ... other parameters
  theme: "auto"
});

var mainView = app.views.create('.view-main');

var app = new Framework7();

var $$ = Dom7;

$$('.open-progress').on('click', function () {
  var progress = 0;
  var dialog = app.dialog.progress('La Vie Est Belle', progress);
  dialog.setText("Veronica's Debut 1 of 10");
  var interval = setInterval(function () {
    progress += 10;
    dialog.setProgress(progress);
    dialog.setText('' + ((progress) / 10) + ' of 10');
    if (progress === 100) {
      clearInterval(interval);
      dialog.close();
    }
  }, 300)
});



