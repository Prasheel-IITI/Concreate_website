const members = [
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
    year: "Third Year",
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
    name: "P. DEEKSHITH",
    description: "CLUB MEMBER",
    img: "img/team/dikshit.jpg",
    year: "SECOND YEAR",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 6,
    name: "PRINCE JAISWAL",
    description: "CLUB MEMBER",
    img: "img/team/prince.jpg",
    year: "SECOND YEAR",
    linkGit: "",
    linkLin: ""
},
  {
    id: 7,
    name: "TEJAS SONI",
    description: "CLUB MEMBER",
    img: "img/team/tejas.jpg",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
},
  {
    id: 8,
    name: "AMAN SHARMA",
    description: "CLUB MEMBER",
    img: "img/team/aman.jpg",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
},
  {
    id: 9,
    name: "MUKHTAR HUSNAIN HUSAINI",
    description: "CLUB MEMBER",
    img: "img/team/mukhtar.jpg",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
},
{
    id: 10,
    name: "SRIKANT",
    description: "CLUB MEMBER",
    img: "img/team/srikant.jpg",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
},
{
    id: 11,
    name: "SHIVAM KUNDANIYA",
    description: "CLUB MEMBER",
    img: "img/team/shivam.jpg",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
},
{
    id: 12,
    name: "RAVI VERMA",
    description: "CLUB MEMBER",
    img: "img/team/ravi.jpg",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
},
{
        id: 13,
        name: "RAVI SHARMA",
        description: "CLUB MEMBER",
        img: "img/team/raviS.jpg",
        year: "Fourth Year",
        linkGit: "",
        linkLin: ""
},
{
        id: 14,
        name: "AMAN PATEL",
        description: "CLUB MEMBER",
        img: "img/team/amanP.jpg",
        year: "Fourth Year",
        linkGit: "",
        linkLin: ""
},
{
        id: 15,
        name: "SUYASH GANDHI",
        description: "CLUB MEMBER",
        img: "img/team/suyashG.jpg",
        year: "Fourth Year",
        linkGit: "",
        linkLin: ""
},
{
        id: 16,
        name: "ASHUTOSH ANSHUL",
        description: "CLUB MEMBER",
        img: "img/team/ashutosh.jpg",
        year: "Fourth Year",
        linkGit: "",
        linkLin: ""
}


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
  },
  {
    id: 2,
    name: "HARSHIT MATHUR",
    description: "EX-Club Head",
      img: "img/team/harshit.jpg",
    contact: "",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  }
];

Vue.component("member-component", {
  template: `
  <div class="col-lg-3 d-flex align-items-stretch" style="flex: 0 0 100%;">
    <div class="card" style="width: 100%;">
      <div class="profile-container">
        <img class="card-img-top" :src="member.img" alt="Card image cap" style="height:5em; width:5em">
      </div>
        <div class="card-body h-100 d-flex justify-content-center align-items-stretch align-content-stretch" style="width: 100%; flex-direction: column;">
;
           <h5 class="card-title d-flex align-items-center justify-content-center" style="">{{member.name}}</h5>
            <p class="card-text d-flex align-items-center justify-content-center"  style="">{{member.description}}</p>
          <p class="card-text mb-2 d-flex justify-content-center align-items-center" style="">{{member.year}}</p>
          <div class="d-flex align-items-center justify-content-center" style="">
          <a :href="member.linkGit"><i class="fab fa-github d-flex justify-content-center align-items-center" style="flex: 1 1 auto;  padding: 0 0.1em;"></i> </a>
          <a :href="member.linkLin"><i class="fab fa-linkedin d-flex justify-content-center align-items-center"  style="flex: 1 1 auto; padding: 0 0.1em;"></i> </a>
          </div>
        </div>
    </div>
  </div>
	`,
  props: {
    member: Object
  }
});

Vue.component("head-component", {
  template: `
	<div class="col-lg-4 d-flex align-items-stretch" style="flex: 0 0 100%;">
    <div class="card" style="width: 100%;">
      <div class="profile-container">
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
    members,
    heads
  }
});
