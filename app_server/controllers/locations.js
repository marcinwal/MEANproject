var require('request');
var apiOptions = {
  server = "http://localhost:3000"
};

if(process.env.NODE_ENV === 'production'){
  apiOptions = 'https://walkiedoggie-uk.herokuapp.com';
}

module.exports.homelist = function(req,res){
  res.render('locations-list',{
    title: 'Loc8r - find a place with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you'
    },
    locations: [{
      name: 'Starcups',
      address: '125 lock road , Richmond tw10 ',
      rating: 3,
      facilities: ['hot drinks','food','premium wifi'],
      distance: '100m'
    },{
      name: 'Cafe hero',
      address: '12 Deadlock road , Kichmond tw1 ',
      rating: 4,
      facilities: ['hot drinks','food','premium wifi'],
      distance: '200m'
    },{
      name: 'Burger hero',
      address: '120 Dead road , Freemond ew1 ',
      rating: 2,
      facilities: ['hot drinks','premium wifi'],
      distance: '240m'      
    }]
  });
}

module.exports.locationInfo = function(req, res){
  res.render('location-info', {
    title: 'Starcups',
    pageHeader: {title: 'Starcups'},
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: {lat: 51.455041, lng: -0.9690884},
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        closed: false
      },{
        days: 'Saturday',
        opening: '8:00am',
        closing: '5:00pm',
        closed: false
      },{
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'Marcin Gonzo',
        rating: 5,
        timestamp: '16 July 2013',
        reviewText: 'What a great place. I can\'t say enough good things about it.'
      },{
        author: 'Charlie Chaplin',
        rating: 3,
        timestamp: '16 June 2013',
        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
      }]
    }
  });
};

module.exports.addReview = function(req, res){
  res.render('location-review-form', {
    title: 'Review Starcups on Loc8r',
    pageHeader: { title: 'Review Starcups' },
    user: {
      displayName: "Marcinwal"
    }
  });
};
