Vue.component("event-component", {
  data: function() {
    return {
        events: [
            { image: 'img/highlight/1.JPG' },
            { image: 'img/highlight/2.JPG' },
            { image: 'img/highlight/3.JPG' },
            { image: 'img/highlight/4.JPG' },
            { image: 'img/highlight/5.JPG' },
            { image: 'img/highlight/6.JPG' },
            { image: 'img/highlight/7.JPG' },
            { image: 'img/highlight/8.JPG' },
                
            ]
    };
  },
  template: `
        <div>
            <div class="team row" id="gallery">
            <img style="height:20em;max-width:20em;" v-for="project in events" :src="project.image" :data-image="project.image" data-description="Random">
        
  	        </div>
    </div>
  `
});

new Vue({
  el: "#secondary"
});
