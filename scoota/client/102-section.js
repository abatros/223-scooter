import './102-section.html'

/*

      Show a shadow when entering (mouseenter) one of the 3 panels => hot-panel
      Set a state remembering the hot-panel-102.
      Similar to select-a-store-101

*/

Template.section_102.events({
  'mouseenter .panel-102': function(e,tp){
    console.log('mouseenter .panel-102:',e)
    tp.findAll('vbox.panel-102').forEach((it)=>{
      it.classList.remove('hot-panel-102')
    })
    e.target.classList.add('hot-panel-102')
  }
})
