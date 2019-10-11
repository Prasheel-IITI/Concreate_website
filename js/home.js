new Vue({
  el: "#blogposts",
  data: {
    link: ["index.html", "team.html", "gallery.html"],
      posts: [
          {
              "title": "BRIDGE DESIGNING COMPETITION",
              "description": "The Concreate club organises a bridge designing competition in which the participants have to make a truss bridge from popsicle sticks based on the given problem statement. The event aims to test one's skillset to form the best design with limited materials and understand the load transfer mechanism in trusses. <br>Before the competition a workshop is organised that focuses on interesting examples and practical understanding of load transfer mechanism.From this workshop students can have a better visualisation and better understanding of behaviour of truss bridges which could help them in the competition. <br>The competition is conducted in two stages viz load testing of bridges and analysis of design on staad pro.After evaluating different parameters, the top 3 teams are awarded. <br>Previous year in the competition the strongest bridge weighted about 350 grams and it took weight of 100 kgs.",
              "imageLink": "img\home\events\bridge.jpg",
              "guid": "Event1"

          },
           {
              "title": "STRUCTURA",
               "description": "The technical event of the Concreate club in the techno-cultural fest – FLUXUS-2K19 was STRUCTURA. <br>In this event the participants were asked to build earthquake resistance building out of popsicle sticks and bamboo sticks. <br>Minimum 3 floor building was necessary and additional floors were given extra marks. <br>These structures were tested by a machine which shakes the base of the building and then breakage of building was observed.",
              "imageLink": "img\home\events\structura.jpeg",
              "guid": "Event2"

          }
           ,{
              "title": "SITE VISIT",
               "description": "Every year the club organises visit to construction sites both inside and outside the campus. These sites are ongoing construction processes so that student can visualize them in a better way apart from regular labs.",
              "imageLink": "img\home\events\site.jpg",
              "guid": "Event3"

          },
          {
              "title": "  WORKSHOPS",
              "description": "To bolster an awareness of, and familiarity with, the basic tools required for day-to-day work in designing, which constitute the daily life of an Engineer, The Concreate Club regularly organises workshops on AutoCAD and SOLIDWORKS. The workshops cover various aspects of these softwares, such as installation, basic capabilities and applications, etc. These workshops also provide a hands-on experience, in designing and drafting. To encourage the students to explore more about these softwares, the club provides assignments for practice.",
              "imageLink": "img\home\events\workshop.jpeg",
              "guid": "Event4"

          },
          {

              "title": "NEWSLETTER",
              "description": "The Concreate club posts a newsletter on a weekly basis. The newsletter shall cover: <br>A) New innovations and research in the field, and how one can be an active part of it. <br>B) How innovations and research contribute towards averting and minimising the influence of catastrophes, natural or otherwise.For instance, how the usage of earthquake resistant structure and materials, can minimise the casualties in the wake of an earthquake. <br>C) The opportunities that are available for the students in Civil engineering, i.e., will provide information about various competitive exams like UPSC, GRE, TOEFL, GMAT, MBA, GATE, JAM, etc. <br>D) Projects and Internships available for the students and how to prepare oneself for them.",
              "imageLink": "img\home\events\news.jpg",
              "guid": "Event5"
          }
      ]
  },
  methods: {
    openblog(num) {
      window.open(this.link[num]);
    }
  },
  
});
