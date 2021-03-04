Vue.component("event-component", {
  data: function() {
    return {
        events: [
            { image: 'img/highlight/1.jpg' },
            { image: 'img/highlight/2.jpg' },
            { image: 'img/highlight/3.jpg' },
            { image: 'img/highlight/4.jpg' },
            { image: 'img/highlight/5.jpg' },
            { image: 'img/highlight/6.jpg' },
            { image: 'img/highlight/7.jpg' },
            { image: 'img/highlight/8.jpg' },
            { image: 'img/highlight/9.jpeg'}, 
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
