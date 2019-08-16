import './101-visit-stores.html'

//import './101-visit-apple-store.html'
//import './101-visit-play-store.html'


Template.visit_stores_101.onCreated(function() {
  this.flip_flop = new ReactiveVar(1);

});


Template.visit_stores_101.helpers({
  x: ()=>{
    const tp = Template.instance();
    console.log({tp})
    const y = Template.parentData();
    console.log({y})
    return 123;
  }
})


Template.visit_stores_101.events({
  'xmouseenter .js-store-flip-flop': (e,tp)=>{
    e.preventDefault();
//    console.log('enter',{e});
    console.log('enter target', e.target);
    return false;
  },
  'mouseenter .js-store-flip-flop': function(e,tp){
    console.log('leave',e.target);
    // change state of the target.
    console.log('leave2',e.target.className);
    console.log('leave3',e.target.classList);
    // trigger a reset of all last_visited
    // this add to this-one
    tp.findAll('hbox.store-panel-101').forEach((it)=>{
      it.classList.remove('last-visited-store')

    })
    e.target.classList.add('last-visited-store')

  },
  'click .js-store-flip-flop': function(e,tp){
    console.log("You Select store ",e.target);
  }

})


Template.visit_a_store.onCreated(function(){
  console.log(`visit_a_store.onCreated this:`,this)
})

Template.visit_a_store.onRendered(function(){
  console.log(`visit_a_store.onRendered this:`,this)
  console.log(`visit_a_store.onRendered this.data:`,this.data)
  console.log(`visit_a_store.onRendered this.data.visited:`,this.data.visited)
  const hbox = this.find('hbox')
  console.log(`visit_a_store.onRendered hbox:`, hbox)

  if (this.data.visited) {
    hbox.classList.add('last-visited-store')
  }

})



/************************
Template.visit_a_store.events({
  'mouseenter .js-store-flip-flop': (e,tp)=>{
    e.preventDefault();
//    console.log('enter',{e});
    console.log('enter target', e.target);
    return false;
  },
  'mouseleave .js-store-flip-flop': (e,tp)=>{
    console.log('leave',e.target);
    const div = tp.find('div')
    console.log({div})
    // mark-it lat visited.

  },
  'click .js-store-flip-flop': function(e,tp){
    console.log("You Select store ",e.target);
  }

})
****************/
