import './101-subscribe.html';

Template.subscribe_101.onRendered(function(){
  const tp = this;
  console.log(this.data)
  const width = this.data.width; // string.
  if (width) {
    const hbox = tp.find('hbox.subscribe-101')
    console.log('hbox:',hbox)
    hbox.style.width = width;
  }
});


Template.subscribe_101.events({

})
