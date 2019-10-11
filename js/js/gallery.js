Vue.component("gallery-component", {
  data: function() {
    return {
      projects:{
"activity":[    
              { image: 'img/gallery/club_act/1.JPG' },
              { image: 'img/gallery/club_act/2.JPG' },
              { image: 'img/gallery/club_act/3.JPG' },
              { image: 'img/gallery/club_act/4.JPG' },
              { image: 'img/gallery/club_act/5.JPG' },
              { image: 'img/gallery/club_act/6.JPG' },
              { image: 'img/gallery/club_act/7.JPG' },
              { image: 'img/gallery/club_act/8.JPG' },
              { image: 'img/gallery/club_act/9.JPG' },
              { image: 'img/gallery/club_act/10.JPG' },
              { image: 'img/gallery/club_act/11.JPG' },
              { image: 'img/gallery/club_act/12.JPG' },
              { image: 'img/gallery/club_act/13.JPG' },
              { image: 'img/gallery/club_act/14.JPG' },
              { image: 'img/gallery/club_act/15.JPG' },
              { image: 'img/gallery/club_act/16.JPG' },
              { image: 'img/gallery/club_act/17.JPG' },
              { image: 'img/gallery/club_act/18.JPG' },
              { image: 'img/gallery/club_act/19.JPG' },
              { image: 'img/gallery/club_act/20.JPG' },
              { image: 'img/gallery/club_act/21.JPG' },
              { image: 'img/gallery/club_act/22.JPG' },
              { image: 'img/gallery/club_act/23.JPG' },
              { image: 'img/gallery/club_act/24.JPG' },
              { image: 'img/gallery/club_act/25.JPG' },
		],
"prize": [
            { image: 'img\\gallery\\prize\\1.JPG' },
            { image: 'img\\gallery\\prize\\2.JPG' },
            { image: 'img\\gallery\\prize\\3.JPG' },
            { image: 'img\\gallery\\prize\\4.JPG' },
            { image: 'img\\gallery\\prize\\5.JPG' },
            { image: 'img\\gallery\\prize\\6.JPG' },
            { image: 'img\\gallery\\prize\\7.JPG' },
            { image: 'img\\gallery\\prize\\8.JPG' },
            { image: 'img\\gallery\\prize\\9.JPG' },
            { image: 'img\\gallery\\prize\\10.JPG' },
            { image: 'img\\gallery\\prize\\11.JPG' },
            { image: 'img\\gallery\\prize\\12.JPG' },
            { image: 'img\\gallery\\prize\\13.JPG' },
            { image: 'img\\gallery\\prize\\14.JPG' },
            { image: 'img\\gallery\\prize\\15.JPG' },
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
