Vue.component("gallery-component", {
  data: function() {
    return {
      projects:{
"activity":[    
              { image: 'img/gallery/club_act/1.jpg' },
              { image: 'img/gallery/club_act/2.jpg' },
              { image: 'img/gallery/club_act/3.jpg' },
              { image: 'img/gallery/club_act/4.jpg' },
              { image: 'img/gallery/club_act/5.jpg' },
              { image: 'img/gallery/club_act/6.jpg' },
              { image: 'img/gallery/club_act/7.jpg' },
              { image: 'img/gallery/club_act/8.jpg' },
              { image: 'img/gallery/club_act/9.jpg' },
              { image: 'img/gallery/club_act/10.jpg' },
              { image: 'img/gallery/club_act/11.jpg' },
              { image: 'img/gallery/club_act/12.jpg' },
              { image: 'img/gallery/club_act/13.jpg' },
              { image: 'img/gallery/club_act/14.jpg' },
              { image: 'img/gallery/club_act/15.jpg' },
              { image: 'img/gallery/club_act/16.jpg' },
              { image: 'img/gallery/club_act/17.jpg' },
              { image: 'img/gallery/club_act/18.jpg' },
              { image: 'img/gallery/club_act/19.jpg' },
              { image: 'img/gallery/club_act/20.jpg' },
              { image: 'img/gallery/club_act/21.jpg' },
              { image: 'img/gallery/club_act/22.jpg' },
              { image: 'img/gallery/club_act/23.jpg' },
              { image: 'img/gallery/club_act/24.jpg' },
              { image: 'img/gallery/club_act/25.jpg' },
		],
"prize": [
            { image: 'img\\gallery\\prize\\1.jpg' },
            { image: 'img\\gallery\\prize\\2.jpg' },
            { image: 'img\\gallery\\prize\\3.jpg' },
            { image: 'img\\gallery\\prize\\4.jpg' },
            { image: 'img\\gallery\\prize\\5.jpg' },
            { image: 'img\\gallery\\prize\\6.jpg' },
            { image: 'img\\gallery\\prize\\7.jpg' },
            { image: 'img\\gallery\\prize\\8.jpg' },
            { image: 'img\\gallery\\prize\\9.jpg' },
            { image: 'img\\gallery\\prize\\10.jpg' },
            { image: 'img\\gallery\\prize\\11.jpg' },
            { image: 'img\\gallery\\prize\\12.jpg' },
            { image: 'img\\gallery\\prize\\13.jpg' },
            { image: 'img\\gallery\\prize\\14.jpg' },
            { image: 'img\\gallery\\prize\\15.jpg' },
                 ]}
        };
  },
  template: `
	<div>
	<h1 class="display-5 text-white py-4">Club Highlights</h1>
    <!-- <div class="team row" id="gallery">
            <img style="height:20em;max-width:20em;" v-for="project in projects['activity']" :src="project.image" :data-image="project.image" data-description="Random">
    </div> -->
    <div class="team row">
            <div class="col-lg-4 d-flex align-items-stretch" v-for="project in projects['activity']" :key="project.id">
             <a :href="project.image" data-lightbox="activity">
                 <img style="height:20em; max-width:20em; border-radius: 30px;" :src="project.image">
            </a>
     </div>
     </div>

    <h1 class="display-5 text-white py-2">Prize Distributions</h1>
     <div class="team row">
            <div class="col-lg-4 d-flex align-items-stretch" v-for="project in projects['prize']" :key="project.id">
             <a :href="project.image" data-lightbox="prize">
                 <img style="height:20em;max-width:20em; border-radius: 30px;" :src="project.image">
            </a>
     </div>
     </div>
	 </div>
  `
});

new Vue({
  el: "#app"
});
