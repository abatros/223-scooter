import assert from 'assert';
import './105-how-it-works.html'

Template.panel_105.onRendered(function(){
  console.log(`panel_105.onRendered this:`,this)
  console.log(`panel_105.onRendered this.data:`,this.data)
  console.log(`panel_105.onRendered this.data.visited:`,this.data.visited)
  const hbox = this.find('hbox')
  console.log(`panel_105.onRendered hbox:`, hbox)

  if (this.data.visited) {
    hbox.classList.add('last-visited-panel')
  }

})

Template.how_it_works_105.events({
  'mouseenter .panel-105': function(e,tp){
    // console.log('mouseenter .panel-105:',e)
    const plist = tp.findAll('vbox.panel-105')
    assert(plist.length == 3)
    plist.forEach((it)=>{
      it.classList.remove('hot-panel-105')
    })
    e.target.classList.add('hot-panel-105')
  }
});
