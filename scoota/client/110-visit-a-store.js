import './110-visit-a-store.html'

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


Template.group_item.onCreated(function(){});

Template.group_item.onRendered(function(){
  // Locate tag with class "group-item" then remove any "showing"

  console.log(`#########################group_item.onRendered this.data:`,this.data)
  const gi = this.findAll('.group-item');
  console.log(`group_items.onRendered gi:`, gi)
  if (gi.length !=1) throw Meteor.Error("FATAL@37")

  gi[0].classList.remove('showing');
  gi[0].classList.add('showing');

});

Template.group_item.events({
  'click': (e,tp)=>{
    console.log('click')
    return -1;
  },
  'mouseenter': (e,tp)=>{
    const group_container = e.target.closest('.js-group-container')
    console.log('mouse-enter',group_container)
  },
  'mouseenter .group-item': (e,tp)=>{
    // must do that on window.
    const group_container = e.target.closest('.js-group-container')
    console.log('mouseenter .group_item group_container:',group_container)
return;
    tp.findAll('.').forEach((it)=>{
      it.classList.remove('last-visited-store')

    })
    e.target.classList.add('last-visited-store')
  }


})
