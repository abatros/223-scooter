import './110-download-app.html'

import './110-visit-a-store.js'


Template.group_item.helpers({
  x: ()=>{
    const tp = Template.instance();
    console.log({tp})
    const y = Template.parentData();
    console.log({y})
    return 123;
  }
})
