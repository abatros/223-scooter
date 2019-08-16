import './109-faq.html'

Template.accordeon_109.onRendered(function(){
  const tp = this;
  tp.findAll('div.kc_accordion_content')
  .forEach(it =>{
    console.log(it)
  })
})



Template.accordeon_109.events({
  'click a': (e,tp)=>{
    e.preventDefault();
    console.log('click-109 target:',e.target);
    console.log('click-109 target.parent:',$(e.target).parent('h3'));
    console.log('click-109 target.parent.next:',$(e.target).parent('h3').next());

    tp.findAll('div.kc_accordion_content')
    .forEach(it =>{
//      console.log(it)
      it.classList.remove('showing')
    })

    // target is <a> Up - NEXT to get div.kc_accordion_content

    const dst = $(e.target).parent('h3').next()
    dst[0].classList.add('showing')

    return -1;
  }
})
