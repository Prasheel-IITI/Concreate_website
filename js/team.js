const second_yrs = [
  {
    id: 1,
    name: "LAKSHYA SHARMA",
    description: "CLUB MEMBER",
    img: "img/team/lakshya.jpg",
    year: "SECOND YEAR",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 2,
    name: "YASH RANJAN MISHRA",
    description: "CLUB MEMBER",
    img: "img/team/yash.jpg",
    year: "SECOND YEAR",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 3,
    name: "ARVIND MEHTA",
    description: "CLUB MEMBER",
    img: "img/team/arvind.jpg",
    year: "SECOND YEAR",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 4,
    name: "SUYASH JAIN",
    description: "CLUB MEMBER",
    img: "img/team/suyash.jpg",
    year: "SECOND YEAR",
    linkGit: "",
    linkLin: ""
  },
  
  {
    id: 5,
    name: "PRINCE JAISWAL",
    description: "CLUB MEMBER",
    img: "img/team/prince.jpg",
    year: "SECOND YEAR",
    linkGit: "",
    linkLin: ""
},
  



];
const third_yrs = [
    {
        id: 1,
        name: "TEJAS SONI",
        description: "CLUB MEMBER",
        img: "img/team/tejas.jpg",
        year: "THIRD YEAR",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 2,
        name: "AMAN SHARMA",
        description: "CLUB MEMBER",
        img: "img/team/aman.jpg",
        year: "THIRD YEAR",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 3,
        name: "MUKHTAR HUSNAIN HUSAINI",
        description: "CLUB MEMBER",
        img: "img/team/mukhtar.jpg",
        year: "THIRD YEAR",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 4,
        name: "SRIKANT",
        description: "CLUB MEMBER",
        img: "img/team/srikant.jpg",
        year: "THIRD YEAR",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 5,
        name: "SHIVAM KOUNDINYA",
        description: "CLUB MEMBER",
        img: "img/team/shivam.jpg",
        year: "THIRD YEAR",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 6,
        name: "RAVI VERMA",
        description: "CLUB MEMBER",
        img: "img/team/ravi.jpg",
        year: "THIRD YEAR",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 7,
        name: "REVURI LOKESH",
        description: "CLUB MEMBER",
        img: "img/team/lokesh.png",
        year: "THIRD YEAR",
        linkGit: "",
        linkLin: ""
    },
];
const fourth_yrs = [
    {
        id: 1,
        name: "HARSHIT MATHUR",
        description: "EX-CLUB HEAD" ,
        img: "img/team/harshit.jpg",
        contact: "",
        year: "Fourth Year",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 2,
        name: "SHALAY GUPTA",
        description: "CLUB MEMBER",
        img: "img/team/shalay.jpg",
        year: "Fourth Year",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 3,
        name: "SUYASH GANDHI",
        description: "CLUB MEMBER",
        img: "img/team/suyashG.jpg",
        year: "Fourth Year",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 4,
        name: "P. DEEKSHITH",
        description: "CLUB MEMBER",
        img: "img/team/dikshit.jpg",
        year: "FOURTH YEAR",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 5,
        name: "ANSHUL SIRVASTAV",
        description: "CLUB MEMBER",
        img: "img/team/matthew.png",
        year: "Fourth Year",
        linkGit: "",
        linkLin: ""
    },
    
    {
        id: 6,
        name: "RAVI SHARMA",
        description: "CLUB MEMBER",
        img: "img/team/matthew.png",
        year: "Fourth Year",
        linkGit: "",
        linkLin: ""
    },
    {
        id: 7,
        name: "AMAN PATEL",
        description: "CLUB MEMBER",
        img: "img/team/matthew.png",
        year: "Fourth Year",
        linkGit: "",
        linkLin: ""
    },

];

const heads = [
  {
    id: 1,
    name: "ASHWANI SHARMA",
    description: "Club Head",
    img: "img/team/ashwani.jpeg",
    contact: "7023513672",
    year: "Third Year",
    linkGit: "https://github.com/Ashwanis31",
        linkLin: "https://www.linkedin.com/in/ashwani-sharma-2b9811161"
  }
];

Vue.component("third_yr-component", {
  template: `
  <div class="col-lg-3 d-flex align-items-stretch" style="flex: 0 0 100%;">
    <div class="card" style="width: 100%;">
      <div class="profile-container">
        <img class="card-img-top" :src="third_yr.img" alt="Card image cap" style="height:5em; width:5em">
      </div>
        <div class="card-body h-100 d-flex justify-content-center align-items-stretch align-content-stretch" style="width: 100%; flex-direction: column;">
;
           <h5 class="card-title d-flex align-items-center justify-content-center" style="">{{third_yr.name}}</h5>
            <p class="card-text d-flex align-items-center justify-content-center"  style="">{{third_yr.description}}</p>
          <p class="card-text mb-2 d-flex justify-content-center align-items-center" style="">{{third_yr.year}}</p>
          <div class="d-flex align-items-center justify-content-center" style="">
          <a :href="third_yr.linkGit"><i class="fab fa-github d-flex justify-content-center align-items-center" style="flex: 1 1 auto;  padding: 0 0.1em;"></i> </a>
          <a :href="third_yr.linkLin"><i class="fab fa-linkedin d-flex justify-content-center align-items-center"  style="flex: 1 1 auto; padding: 0 0.1em;"></i> </a>
          </div>
        </div>
    </div>
  </div>
	`,
  props: {
    third_yr: Object
  }
});

Vue.component("second_yr-component", {
    template: `
  <div class="col-lg-3 d-flex align-items-stretch" style="flex: 0 0 100%;">
    <div class="card" style="width: 100%;">
      <div class="profile-container">
        <img class="card-img-top" :src="second_yr.img" alt="Card image cap" style="height:5em; width:5em">
      </div>
        <div class="card-body h-100 d-flex justify-content-center align-items-stretch align-content-stretch" style="width: 100%; flex-direction: column;">
;
           <h5 class="card-title d-flex align-items-center justify-content-center" style="">{{second_yr.name}}</h5>
            <p class="card-text d-flex align-items-center justify-content-center"  style="">{{second_yr.description}}</p>
          <p class="card-text mb-2 d-flex justify-content-center align-items-center" style="">{{second_yr.year}}</p>
          <div class="d-flex align-items-center justify-content-center" style="">
          <a :href="second_yr.linkGit"><i class="fab fa-github d-flex justify-content-center align-items-center" style="flex: 1 1 auto;  padding: 0 0.1em;"></i> </a>
          <a :href="second_yr.linkLin"><i class="fab fa-linkedin d-flex justify-content-center align-items-center"  style="flex: 1 1 auto; padding: 0 0.1em;"></i> </a>
          </div>
        </div>
    </div>
  </div>
	`,
    props: {
        second_yr: Object
    }
});

Vue.component("fourth_yr-component", {
    template: `
  <div class="col-lg-3 d-flex align-items-stretch" style="flex: 0 0 100%;">
    <div class="card" style="width: 100%;">
      <div class="profile-container">
        <img class="card-img-top" :src="fourth_yr.img" alt="Card image cap" style="height:5em; width:5em">
      </div>
        <div class="card-body h-100 d-flex justify-content-center align-items-stretch align-content-stretch" style="width: 100%; flex-direction: column;">
;
           <h5 class="card-title d-flex align-items-center justify-content-center" style="">{{fourth_yr.name}}</h5>
            <p class="card-text d-flex align-items-center justify-content-center"  style="">{{fourth_yr.description}}</p>
          <p class="card-text mb-2 d-flex justify-content-center align-items-center" style="">{{fourth_yr.year}}</p>
          <div class="d-flex align-items-center justify-content-center" style="">
          <a :href="fourth_yr.linkGit"><i class="fab fa-github d-flex justify-content-center align-items-center" style="flex: 1 1 auto;  padding: 0 0.1em;"></i> </a>
          <a :href="fourth_yr.linkLin"><i class="fab fa-linkedin d-flex justify-content-center align-items-center"  style="flex: 1 1 auto; padding: 0 0.1em;"></i> </a>
          </div>
        </div>
    </div>
  </div>
	`,
    props: {
        fourth_yr: Object
    }
});

Vue.component("head-component", {
    template: `
    
	<div class="col-lg-4" style="flex: 0 0 100%;" >
    <div class="card" style="width: 100%;" >
      <div class="profile-container" >
        <img class="card-img-top" :src="head.img" alt="Card image cap" style="height:7em; width:7em">
      </div>
        <div class="card-body h-100 d-flex justify-content-center align-items-stretch align-content-stretch" style="width: 100%; flex-direction: column;">
          <h5 class="card-title d-flex align-items-center justify-content-center" style="">{{head.name}}</h5>
          <p class="card-text d-flex align-items-center justify-content-center" style="">{{head.description}}</p>
          <p class="card-text mb-2 d-flex justify-content-center" style="">{{head.year}}</p>
          <div class="d-flex align-items-center justify-content-center" style="">
          <a :href="head.linkGit"><i class="fab fa-github d-flex justify-content-center"  style="flex: 1 1 auto; padding: 0 0.1em;"></i> </a>
          <a :href="head.linkLin"><i class="fab fa-linkedin d-flex justify-content-center"  style="flex: 1 1 auto; padding: 0 0.1em;"></i> </a>
          </div>
        </div>
    </div>
  </div>
	`,
  props: {
    head: Object
  }
});

new Vue({
  el: "#app",
  data: {
    third_yrs,
    second_yrs,
    fourth_yrs,
    heads
  }
});
